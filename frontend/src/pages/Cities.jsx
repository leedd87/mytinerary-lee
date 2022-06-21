import React, { useState } from "react";
import "../styles/cities.css";
import { useEffect } from "react";
import axios from "axios";
import CardCities from "../components/CardCities";

function Cities() {
	const [cities, setCities] = useState([]);
	const [search, setSearch] = useState("");

	// console.log(dataArray);

	const handleChange = (e) => {
		setSearch(e.target.value);
		console.log(e.target.value);
	};

	useEffect(() => {
		axios.get("http://localhost:4000/api/cities").then((res) => {
			setCities(res.data.response.cities);
		});
	}, []);

	let city = cities?.filter((elemento) =>
		elemento.name.toLowerCase().trim().startsWith(search.toLowerCase().trim())
	);

	return (
		<div className="d-flex flex-column justify-content-center align-items-center">
			<div className="form__group field mb-4">
				<input
					required=""
					placeholder="City"
					className="form__field"
					type="input"
					onChange={handleChange}
				/>
				<label className="form__label">City</label>
			</div>

			<div className="d-flex flex-column justify-content-center align-items-center cities-container rounded mx-5 mb-5 py-5 ">
				<div className="d-flex justify-content-center align-items-center flex-wrap container-fluid">
					{city?.map((element) => {
						return (
							<div key={element._id} className="">
								<CardCities
									city={element.name}
									image={element.image}
									id={element._id}
									description={element.description}
								/>
							</div>
						);
					})}
				</div>
			</div>
		</div>
	);
}

export default Cities;
