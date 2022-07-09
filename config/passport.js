const passport = require("passport");
const jwtStrategy = require("passport-jwt").Strategy;
const extractJwt = require("passport-jwt").ExtractJwt;

const User = require("../models/user");

module.exports = passport.use(
	new jwtStrategy( //nueva estrategia
		{
			jwtFromRequest: extractJwt.fromAuthHeaderAsBearerToken(), //extrae el token del header y comparara su firma desencriptandola
			secretOrKey: process.env.SECRET_KEY, //con nuestro secretkey
		},
		(jwt_payload, done) => {
			// console.log(jwt_payload);
			User.findOne({ _id: jwt_payload.id }) //busca por el id de la base de datos que coincida con el id del token

				.then((user) => {
					// console.log(user);
					if (user) {
						return done(null, user);
					} else if (err) {
						console.log(err);
						return done(err, false);
					} else {
						return done(null, false);
					}
				})
				.catch((err) => {
					console.log(err.status);
					return done(err, false);
				});
		}
	)
);
