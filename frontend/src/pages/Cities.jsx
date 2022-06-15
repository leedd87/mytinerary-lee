import React from "react";
import PrintCardCities from "../components/PrintCardCities";
import { useState, useEffect } from "react";

import NotFound from "../components/NotFound";
import "../styles/cities.css";
import HeroCities from "../components/HeroCities";
import axios from "axios";

function Cities() {
	const [cities, setCities] = useState([]);
	const [search, setSearch] = useState("");

	const handleChange = (e) => {
		setSearch(e.target.value);
		console.log(e.target.value);
	};

	useEffect(() => {
		axios.get("http://localhost:4000/api/cities").then((res) => {
			// setCities(res);
			// console.log(res);

			let city = res.data.response.cities.filter((elemento) =>
				elemento.name.toLowerCase().startsWith(search.toLowerCase())
			);
			setCities(city);
			console.log(city);
		});
	}, [search]);

	// 	useEffect(()=> {
	// 		axios.get('http://localhost:4000/api/cities').then (res=> {

	// 		let filterInput = Cities.filter((city) => city.name.toLowerCase().startsWith(inputValue.toLowerCase().trim()));

	// 		setCities(filterInput)
	// 	});
	//   }, [inputValue])

	return (
		<>
			<HeroCities />
			<div className="d-flex flex-column justify-content-center align-items-center my-5 py-4 rounded cities-container container">
				<input
					type="text"
					placeholder="Find a city"
					className="w-25 rounded"
					onKeyUp={handleChange}
				></input>
				<div className="d-flex justify-content-center container flex-wrap">
					{cities.length > 0 ? (
						<PrintCardCities filterArray={cities} />
					) : (
						<NotFound />
					)}
				</div>
			</div>
		</>
	);
}

export default Cities;
