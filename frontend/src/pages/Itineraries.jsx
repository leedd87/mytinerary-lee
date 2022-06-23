import React, { useEffect } from "react";

import { useParams } from "react-router-dom";
import PrintItineraries from "../components/PrintItineraries";

import { useDispatch, useSelector } from "react-redux";
import citiesActions from "../redux/actions/citiesActions";

const Itineraries = () => {
	const { id } = useParams();

	console.log(id);

	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(citiesActions.getOneCity(id));
		//eslint-disable-next-line
	}, []);

	const city = useSelector((store) => store.citiesReducer.city);
	console.log(city);

	return (
		<div className="d-flex flex-column align-items-center container-detail">
			<PrintItineraries name={city?.name} image={city?.image} />
		</div>
	);
};

export default Itineraries;
