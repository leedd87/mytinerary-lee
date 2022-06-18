import React from "react";
import PrintCardCities from "../components/PrintCardCities";
import { useState, useEffect } from "react";

import NotFound from "../components/NotFound";
import "../styles/cities.css";
import HeroCities from "../components/HeroCities";
import axios from "axios";

function Cities() {
	const [cities, setCities] = useState();
	const [search, setSearch] = useState("");

	const handleChange = (e) => {
		setSearch(e.target.value);
	};

	useEffect(() => {
		axios
			.get("http://localhost:4000/api/cities")
			.then((res) => setCities(res.data.response.cities));
	}, []);

	let city = cities?.filter((elemento) =>
		elemento.name.toLowerCase().trim().startsWith(search.toLowerCase().trim())
	);

	console.log(city);

	return (
		<>
			<HeroCities />
			<input
				type="text"
				placeholder="Find a city"
				className="w-25 rounded"
				onKeyUp={handleChange}
			></input>
			<div className="d-flex flex-column justify-content-center align-items-center my-5 py-4 rounded cities-container container">
				<div className="d-flex justify-content-center container flex-wrap">
					{city.length > 0 ? (
						<PrintCardCities filterArray={city} />
					) : (
						<NotFound />
					)}
				</div>
			</div>
		</>
	);
}

export default Cities;
