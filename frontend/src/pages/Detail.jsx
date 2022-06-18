import React from "react";
import { useParams } from "react-router-dom";
import CardDetail from "../components/CardDetail";
import axios from "axios";
import { useState, useEffect } from "react";

function Detail() {
	const { id } = useParams();

	const [cities, setCities] = useState();

	useEffect(() => {
		axios
			.get(`http://localhost:4000/api/cities/${id}`)
			.then((city) => setCities(city));
	}, [id]);

	// console.log(cities.data.response);

	// let cityDetail = cities.filter((element) => element._id === id);

	if (!cities) {
		return <h1>CARGANDO</h1>; //CUANDO TARDA LA API
	}

	return (
		<div className="container detail-container d-flex justify-content-center align-items-center">
			<CardDetail city={cities.data.response} />
		</div>
	);
}

export default Detail;
