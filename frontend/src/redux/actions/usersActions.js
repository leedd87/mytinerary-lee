import axios from "axios";

const usersActions = {
	signUpUser: (userData) => {
		// console.log(userData);
		return async (dispatch, getState) => {
			// try {
			const res = await axios.post(
				"http://localhost:4000/api/users/signup",
				{ userData }
			);
			console.log(res);
			dispatch({
				type: "SIGN_UP_MESSAGE", //cambio de nombre antes MESSAGE
				payload: {
					view: true,
					message: res.data.message,
					success: res.data.success,
				},
			});
			return res; //probando
			// } catch (error) {
			// 	console.log(error);
			// }
		};
	},
	signInUser: (logedUser) => {
		// console.log(logedUser);
		return async (dispatch, getState) => {
			const res = await axios.post(
				"http://localhost:4000/api/users/signin",
				{ logedUser }
			);
			console.log(res);

			if (res.data.success) {
				localStorage.setItem("token", res.data.response.token);
				dispatch({
					type: "SIGN_IN",
					payload: {
						view: true,
						userData: res.data.response.userData,
						message: res.data.message,
						success: res.data.success,
					},
				});
			} else {
				//si res.data.success es false solo pasa el mensaje
				dispatch({
					type: "SIGN_IN_FALSE_SUCCESS_MESSAGE",
					payload: {
						view: true,
						message: res.data.message,
						success: res.data.success,
					},
				});
			}

			return res; //probando
		};
	},

	signOutUser: () => {
		//ex parametro closeUser
		return async (dispatch, getState) => {
			// const res = axios.post("http://localhost:4000/api/users/signout", {
			// 	closeUser,
			// });
			localStorage.removeItem("token");
			dispatch({ type: "SIGN_OUT", payload: null });
		};
	},

	verifyToken: (token) => {
		return async (dispatch, getState) => {
			await axios
				.get("http://localhost:4000/api/users/signintoken", {
					headers: { Authorization: "Bearer " + token },
				})
				.then((user) => {
					if (user.data.success) {
						dispatch({ type: "SIGN_IN", payload: user.data.response }); //revisar si anda mal
						dispatch({
							type: "SIGN_IN",
							payload: {
								view: true,
								message: user.data.message,
								success: user.data.success,
							},
						}); //revisar si anda mal
					} else {
						localStorage.removeItem("token");
					}
				})
				.catch((error) => {
					if (error.response.status === 401)
						dispatch({
							type: "SIGN_IN_FALSE_SUCCESS_MESSAGE",
							payload: {
								view: true,
								message: "Please sign in again",
								success: false,
							},
						});
					localStorage.removeItem("token");
				});
		};
	},
};

export default usersActions;
