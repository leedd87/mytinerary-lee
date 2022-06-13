import React from "react";
import PrintCardCities from "../components/PrintCardCities";
import { useState } from "react";

import dataObjeto from "../assets/data";
import NotFound from "../components/NotFound";
import "../styles/cities.css";

function Cities() {
	const [searchInput, setSearchInput] = useState("");

	const handleChange = (e) => {
		setSearchInput(e.target.value);
	};

	const dataArray = [];

	dataObjeto.map((ciudad) => {
		return ciudad.cities.map((element) => {
			return dataArray.push(element);
		});
	});

	const filter = dataArray.filter((elemento) =>
		elemento.city.toLowerCase().startsWith(searchInput.toLowerCase())
	);

	return (
		<div className="d-flex flex-column justify-content-center align-items-center my-5 py-4 rounded cities-container container">
			<input
				type="text"
				placeholder="Find city"
				className="w-25 rounded"
				onKeyUp={handleChange}
			></input>
			<div className="d-flex justify-content-center container flex-wrap">
				{filter.length > 0 ? (
					<PrintCardCities filterArray={filter} />
				) : (
					<NotFound />
				)}
			</div>
		</div>
	);
}

export default Cities;
