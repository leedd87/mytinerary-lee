const User = require("../models/user");
const bcryptjs = require("bcryptjs");
const crypto = require("crypto");
const sendVerification = require("./sendVerification");
const jwt = require("jsonwebtoken");

const usersControllers = {
	getUsers: async (req, res) => {
		let users;
		let error = null;
		try {
			users = await User.find();
		} catch (err) {
			error = err;
		}
		res.json({
			response: error ? "ERROR" : { users },
			success: error ? false : true,
			error: error,
		});
	},

	/*SIGN UP USER*/
	signUpUser: async (req, res) => {
		let {
			userName,
			userLastName,
			email,
			userPhoto,
			country,
			password,
			from,
		} = req.body.userData;

		try {
			const userExist = await User.findOne({ email }); //variable global para utilizar
			const hashPassword = bcryptjs.hashSync(password, 10); //variable global para utlizar
			const verification = false; //por default
			const uniqueString = crypto.randomBytes(15).toString("hex"); //utilizo metodo crypto de bycrptjs

			if (userExist) {
				//SI EL USUARIO EXISTE
				if (userExist.from.indexOf(from) !== -1) {
					//si el usuario existe
					//recorre el array del from y si encuentra coincidencia avisa que tiene que loguearse
					res.json({
						success: false,
						from: "signup",
						message: "You already sign up, please sign in",
					});
				} else {
					//si el usuario no esta registrado con ese FROM, pero usuario existe pushea el nuevo from
					//const hashPassword = bcryptjs.hashSync(password, 10);//deberia funcionar ya que es global
					userExist.from.push(from);
					userExist.password.push(hashPassword);
					userExist.verification = true;
					await userExist.save();

					res.json({
						success: true,
						from: "signup",
						message: "We add " + from + " to your signin methods",
					});
				}
			} else {
				//SI EL USUARIO NO EXISTE
				//const hashPassword = bcryptjs.hashSync(password, 10);
				const newUser = await new User({
					userName,
					userLastName,
					email,
					userPhoto,
					country,
					password: [hashPassword],
					from: [from],
					uniqueString: uniqueString,
					verification,
				});
				if (from !== "form-signup") {
					//google facebook si viene de la red social
					newUser.verification = true;
					await newUser.save();
					res.json({
						success: true,
						from: "signup",
						message: "Gratz! Your user has been created with " + from,
					});
				} else {
					//si la data viene del formulario
					await newUser.save();
					await sendVerification(email, uniqueString); //envio de mails o sendVerification o sendEmail
					res.json({
						success: true,
						from: "signup",
						message:
							"We send you a email to validate your mail, please check your inbox to complete the sign up",
					});
				}
			}
		} catch (error) {
			res.json({
				console: console.log(error),
				success: false,
				message: "Something went wrong, please try again later",
			});
		}
	},

	/*SING IN USER*/

	signInUser: async (req, res) => {
		const { email, password, from } = req.body.logedUser;
		try {
			const userExist = await User.findOne({ email });
			console.log(userExist);
			// const indexPass = userExist.from.indexOf(from);
			if (!userExist) {
				//EL USUARIO NO EXISTE
				res.json({
					success: false,
					message: "Your user has not been registered, please sign up",
				});
			} else {
				//EL USUARIO SI EXISTE
				if (from !== "form-signin") {
					//USUARIO NO fue registrado por el formulario de la pagina Y REGISTRO POR RED SOCIAL
					//LINEA 163 ES FORMULARIO
					//RED SOCIAL
					let passwordMatch = userExist.password.filter((pass) =>
						bcryptjs.compareSync(password, pass)
					);
					console.log(passwordMatch);
					if (passwordMatch.length > 0) {
						const userData = {
							//los datos del modelo
							id: userExist._id,
							userName: userExist.userName,
							email: userExist.email,
							userPhoto: userExist.userPhoto,
							from: from,
						};
						const token = jwt.sign(
							//creacion de TOKEN
							{ ...userData },
							process.env.SECRET_KEY,
							{ expiresIn: 60 * 60 * 24 }
						);
						await userExist.save();
						res.json({
							success: true,
							from: from,
							response: { token, userData },
							message: "Welcome back " + userData.userName,
						});
					} else {
						res.json({
							success: false,
							from: from,
							message:
								"You have not registered with " +
								from +
								" if you want to enter with this method you must do the sign up with " +
								from,
						});
					}
				} else {
					//pasa por aca SI EL USUARIO SE REGISTRO por el formulario de la pagina FORMULARIO
					let passwordMatch = userExist.password.filter(
						(pass) => bcryptjs.compareSync(password, pass) //si devuelve un length mayor a 0 quiere decir que coinciden
					);
					console.log(passwordMatch.length);
					if (
						//SI SE REGISTRO Y SU MAIL ESTA VERIFICADO
						passwordMatch.length > 0 &&
						userExist.verification === true
					) {
						const userData = {
							id: userExist._id,
							userName: userExist.userName,
							email: userExist.email,
							userPhoto: userExist.userPhoto,
							from: from,
						};
						const token = jwt.sign(
							//creacion de TOKEN
							{ ...userData },
							process.env.SECRET_KEY,
							{ expiresIn: 60 * 60 * 24 }
						);
						await userExist.save(); //DEVUELVE LA RESPUESTA
						res.json({
							success: true,
							from: from,
							response: { token, userData },
							message: "Welcome back " + userData.userName,
						});
					} else if (!userExist.verification) {
						//SI ESTA REGISTRADO Y NO VERIFICO SU MAIL
						res.json({
							success: false,
							from: from,
							message: "You need to verify your mail first.",
						});
					} else {
						res.json({
							success: false,
							from: from,
							message: "The user or password doesn't match",
						});
					}
				}
			}
		} catch (error) {
			res.json({
				success: false,
				message: "Something went wrong, please try again later",
			});
		}
	},

	verifyMail: async (req, res) => {
		const { string } = req.params;
		const user = await User.findOne({ uniqueString: string });
		console.log(user);

		if (user) {
			user.verification = true;
			await user.save();
			res.redirect("http://localhost:3000/");
		} else {
			res.json({
				success: false,
				message: `Email has not been verify yet!`,
			});
		}
	},

	verifyToken: (req, res) => {
		if (req.user) {
			res.json({
				success: true,
				response: {
					id: req.user.id,
					userName: req.user.userName,
					email: req.user.email,
					userPhoto: req.user.userPhoto,
					from: "token",
				},
				message: "Welcome back " + req.user.userName,
			});
		} else {
			res.json({ success: false, message: "Please sign in again" });
		}
	},
};

module.exports = usersControllers;
