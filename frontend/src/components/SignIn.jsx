import React from "react";
import "../styles/signUp.css";
import { Form, Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import usersActions from "../redux/actions/usersActions";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import GoogleSignIn from "./GoogleSignIn";
import { useNavigate } from "react-router-dom";

const SignIn = () => {
	const dispatch = useDispatch();

	const navigate = useNavigate();

	const handleSubmit = async (event) => {
		event.preventDefault();

		const logedUser = {
			email: event.target[0].value,
			password: event.target[1].value,
			from: "form-signin",
		};
		let res = await dispatch(usersActions.signInUser(logedUser));
		console.log(res.data.message);

		let messagePopUp = res.data.message;
		if (res.data.success) {
			toast.success(messagePopUp, { position: "top-center" });
			navigate("/");
		} else {
			toast.error(messagePopUp, { position: "top-center" });
		}
	};

	return (
		<div className="container-signin">
			<div className="signup-container d-flex justify-content-center align-items-center container my-5 rounded">
				<div className="signup-form p-5 rounded d-flex justify-content-center">
					<Form onSubmit={handleSubmit} className="w-100">
						<Form.Group className="mb-3">
							<Form.Control
								type="email"
								placeholder="Email"
								// className="form_signin"
							/>
						</Form.Group>
						<Form.Group className="mb-3">
							<Form.Control type="password" placeholder="Password" />
						</Form.Group>

						<Button
							variant="primary"
							type="submit"
							className="mb-3 sign-button"
						>
							Log in
						</Button>
						<GoogleSignIn />
					</Form>
				</div>
			</div>
		</div>
	);
};

export default SignIn;
