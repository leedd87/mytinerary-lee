import axios from "axios";
import React, { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import PrintItineraries from "../components/PrintItineraries";

const Itineraries = () => {
	const { id } = useParams();
	const [city, setCity] = useState();
	console.log(id);

	useEffect(() => {
		axios
			.get(`http://localhost:4000/api/cities/${id}`)
			.then((res) => setCity(res.data.response));
	}, [id]);

	console.log(city);

	return (
		<div className="d-flex flex-column align-items-center container-detail">
			<PrintItineraries name={city?.name} image={city?.image} />
		</div>
	);
};

export default Itineraries;
