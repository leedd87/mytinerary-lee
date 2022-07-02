import React from "react";
import axios from "axios";
import "../styles/signUp.css";
import { Form, Button } from "react-bootstrap";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

import usersActions from "../redux/actions/usersActions";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import GoogleSignUp from "./GoogleSignUp";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const SignUp = ({ country }) => {
	const [countries, setCountries] = useState([]);
	const [pais, setPais] = useState("");

	const dispatch = useDispatch();
	useEffect(() => {
		axios
			.get("https://restcountries.com/v3.1/all")
			.then((res) => setCountries(res.data));
		// 	//eslint-disable-next-line
	}, []);

	const sortedCountries = countries.map((res) => res.name.common).sort();

	const navigate = useNavigate();

	const handleSubmit = async (event) => {
		event.preventDefault();
		console.log(event);
		const userData = {
			userName: event.target[0].value,
			userLastName: event.target[1].value,
			email: event.target[2].value,
			userPhoto: event.target[4].value,
			country: event.target[5].value,
			// country: country,
			password: event.target[3].value,
			from: "form-signup",
		};

		let res = await dispatch(usersActions.signUpUser(userData));

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
	};

	return (
		<div className="signup-container d-flex justify-content-center align-items-center container my-5 rounded">
			<div className="signup-form p-5 rounded">
				<Form.Select
					className="mb-3"
					onChange={(e) => setPais(e.target.value)}
				>
					<option value="">Country</option>
					{sortedCountries?.map((pais, index) => (
						<option key={index} value={pais}>
							{pais}
						</option>
					))}
				</Form.Select>
				{pais ? (
					<Form onSubmit={handleSubmit}>
						<Form.Group className="mb-3">
							<Form.Control
								required="name"
								type="text"
								placeholder="First Name"
							/>
						</Form.Group>
						<Form.Group className="mb-3">
							<Form.Control type="text" placeholder="Last Name" />
						</Form.Group>
						<Form.Group className="mb-3">
							<Form.Control type="email" placeholder="Enter email" />
						</Form.Group>
						<Form.Group className="mb-3">
							<Form.Control type="password" placeholder="Password" />
						</Form.Group>
						<Form.Group className="mb-3">
							<Form.Control type="text" placeholder="Photo URL" />
						</Form.Group>
						{/* <Form.Select className="mb-3">
						<option>Country</option>
						{sortedCountries?.map((pais, index) => (
							<option key={index} value={pais}>
								{pais}
							</option>
						))}
					</Form.Select> */}
						<Button variant="primary" type="submit">
							Submit
						</Button>
						<GoogleSignUp pais={pais} />
					</Form>
				) : null}
				{/* <Form onSubmit={handleSubmit}>
					<Form.Group className="mb-3">
						<Form.Control
							required="name"
							type="text"
							placeholder="First Name"
						/>
					</Form.Group>
					<Form.Group className="mb-3">
						<Form.Control type="text" placeholder="Last Name" />
					</Form.Group>
					<Form.Group className="mb-3">
						<Form.Control type="email" placeholder="Enter email" />
					</Form.Group>
					<Form.Group className="mb-3">
						<Form.Control type="password" placeholder="Password" />
					</Form.Group>
					<Form.Group className="mb-3">
						<Form.Control type="text" placeholder="Photo URL" />
					</Form.Group> */}
				{/* <Form.Select className="mb-3">
						<option>Country</option>
						{sortedCountries?.map((pais, index) => (
							<option key={index} value={pais}>
								{pais}
							</option>
						))}
					</Form.Select> */}
				{/* <Button variant="primary" type="submit">
						Submit
					</Button>
					<GoogleSignUp />
				</Form> */}
			</div>
		</div>
	);
};

export default SignUp;
