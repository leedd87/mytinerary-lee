import React from "react";
import { useEffect } from "react";

import "../styles/printItineraries.css";
import CardItinerary from "./CardItinerary";

import { useDispatch, useSelector } from "react-redux";
import itinerariesActions from "../redux/actions/itinerariesActions";
import { useParams } from "react-router-dom";
import ItineraryNotFound from "./ItineraryNotFound";

const PrintItineraries = ({ image, name }) => {
	const { id } = useParams();

	const dispatch = useDispatch(); //no podemos poner un hook dentro de otro hook

	useEffect(() => {
		dispatch(itinerariesActions.findItineraryFromCity(id)); //aca le tengo que pasar la accion
		//eslint-disable-next-line
	}, []);

	const itineraries = useSelector(
		(store) => store.itinerariesReducer.itineraries
	);

	console.log(itineraries);

	return (
		<>
			<div
				className="itinerary-container w-100"
				style={{
					backgroundImage: `url(${image})`,
				}}
			>
				<h1 className="itinerary-text p-3 rounded">Welcome to {name}</h1>
			</div>

			{/* ITINERARY */}

			<h2 className="itinerary-title p-2 rounded mt-3">ITINERARIES</h2>

			{itineraries.length > 0 ? (
				itineraries.map((element) => (
					<div
						className="d-flex flex-column justify-content-center align-items-center bg-white rounded w-100 container my-3 container-card-itinerary"
						key={element._id}
					>
						<CardItinerary element={element} />
					</div>
				))
			) : (
				<ItineraryNotFound />
			)}
		</>
	);
};

export default PrintItineraries;
