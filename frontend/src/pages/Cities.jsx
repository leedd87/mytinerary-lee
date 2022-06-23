import React, { useState } from "react";
import "../styles/cities.css";
import { useEffect } from "react";
import CardCities from "../components/CardCities";

import citiesActions from "../redux/actions/citiesActions";
import { useDispatch, useSelector } from "react-redux";

function Cities() {
	const dispatch = useDispatch();

	const [search, setSearch] = useState("");

	const handleChange = (e) => {
		setSearch(e.target.value);
		console.log(e.target.value);
	};

	useEffect(() => {
		dispatch(citiesActions.filterCities(search));
		//eslint-disable-next-line
	}, [search]);

	const city = useSelector((store) => store.citiesReducer.filteredCities);
	console.log(city);

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
