import React from "react";
import { useEffect } from "react";
import jwt_decode from "jwt-decode";
import { useDispatch } from "react-redux";
import usersActions from "../redux/actions/usersActions";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { CLIENT_ID } from "../consts/google";

const GoogleSignUp = ({ pais }) => {
	const dispatch = useDispatch();
	// const buttonDiv = useRef(null); //revisar
	const navigate = useNavigate();

	async function handleCallbackResponse(response) {
		console.log(response.credential);
		let userObject = jwt_decode(response.credential);
		console.log(userObject);

		let res = await dispatch(
			usersActions.signUpUser({
				userName: userObject.given_name,
				userLastName: userObject.family_name,
				email: userObject.email,
				userPhoto: userObject.picture,
				password: userObject.sub,
				country: pais,
				from: "google",
			})
		);

		// console.log(res);
		// console.log(res.data.message);

		let messagePopUp = res.data.message;

		if (res.data.from === "validator") {
			messagePopUp.forEach((alert) => {
				toast.error(alert.message);
			});
		}
		if (res.data.from === "signup") {
			if (res.data.success) {
				navigate("/");
				toast.success(res.data.message);
			} else {
				toast.error(res.data.message);
			}
		}
	}

	useEffect(() => {
		/* global google */

		//agregado para probar posibles errores
		google.accounts.id.initialize({
			//inicializador
			client_id: CLIENT_ID,
			//"561756246857-vf9thunmmq3mpqoldqk8i9l8ottsmlfb.apps.googleusercontent.com", //env o sin env
			callback: handleCallbackResponse, //una funcion para ver como se maneja la respuesta. nos va a mandar la info que recibamos de google a nuestro backend y a nuestra bd y asi poder autenticar al usuario
		});

		google.accounts.id.renderButton(
			// buttonDiv,
			document.getElementById("buttonDiv"),
			{
				theme: "outline",
				size: "large",
				locale: "en",
				shape: "pill",
				text: "signup_with",
			}
		);
	});

	return <div id="buttonDiv"></div>;
};

export default GoogleSignUp;
