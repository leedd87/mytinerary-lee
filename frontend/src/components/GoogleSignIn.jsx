import React from "react";
import { useEffect } from "react";
import jwt_decode from "jwt-decode";
import { useDispatch } from "react-redux";
import usersActions from "../redux/actions/usersActions";
import { toast } from "react-toastify";
import { CLIENT_ID } from "../consts/google";
import { useNavigate } from "react-router-dom";

const GoogleSignUp = ({ country }) => {
	const dispatch = useDispatch();
	const navigate = useNavigate();

	async function handleCallbackResponse(response) {
		// console.log(response.credential);
		let userObject = jwt_decode(response.credential);
		// console.log(userObject);

		let res = await dispatch(
			usersActions.signInUser({
				email: userObject.email,
				password: userObject.sub,
				from: "google",
			})
		);

		let messagePopUp = res.data.message;
		if (res.data.success) {
			toast.success(messagePopUp, { position: "top-center" });
			navigate("/");
		} else {
			toast.error(messagePopUp, { position: "top-center" });
		}
	}

	useEffect(() => {
		/* global google */
		google.accounts.id.initialize({
			//inicializador
			client_id: CLIENT_ID,
			callback: handleCallbackResponse, //una funcion para ver como se maneja la respuesta. nos va a mandar la info que recibamos de google a nuestro backend y a nuestra bd y asi poder autenticar al usuario
		});

		google.accounts.id.renderButton(document.getElementById("buttonDiv"), {
			theme: "outline",
			size: "large",
			locale: "en",
			shape: "pill",
			text: "signin_with",
			// type: "icon",
		});
	});

	return <div id="buttonDiv"></div>;
};

export default GoogleSignUp;
