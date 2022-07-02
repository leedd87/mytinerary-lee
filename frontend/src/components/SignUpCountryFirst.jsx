import React from "react";
import { useState, useEffect } from "react";
// import { Form } from "react-bootstrap";
import axios from "axios";
import SignUp from "./SignUp";

const SignUpCountryFirst = () => {
	const [countries, setCountries] = useState([]);
	const [pais, setPais] = useState("");

	useEffect(() => {
		axios
			.get("https://restcountries.com/v3.1/all")
			.then((res) => setCountries(res.data));
		// 	//eslint-disable-next-line
	}, []);

	const sortedCountries = countries.map((res) => res.name.common).sort();

	return (
		<>
			<div>
				<h1>Hello</h1>
				{/* <Form.Select className="mb-3">
				<option>Country</option>
				{sortedCountries?.map((pais, index) => (
					<option key={index} value={setPais(pais)}>
					{pais}
					</option>
					))}
				</Form.Select>*/}
			</div>
			<SignUp />
		</>
	);
};

export default SignUpCountryFirst;
