import React from "react";
import { useEffect, useState } from "react";

import "../styles/printItineraries.css";
import CardItinerary from "./CardItinerary";
import { useDispatch } from "react-redux";
import itinerariesActions from "../redux/actions/itinerariesActions";
import { Link as LinkRouter } from "react-router-dom";
import ItineraryNotFound from "./ItineraryNotFound";

const PrintItineraries = ({ image, name, id }) => {
	const [itineraries, setItineraries] = useState();
	// const [reload, setReload] = useState(false);
	const dispatch = useDispatch(); //no podemos poner un hook dentro de otro hook

	//ESTOY PROBANDO------
	useEffect(() => {
		dispatch(itinerariesActions.findItineraryFromCity(id)).then(
			(
				itinerary //ME TRAE TODOS LOS ITINERARIOS DE ESA CIUDAD
			) => setItineraries(itinerary.data.response)
		);
		//aca le tengo que pasar la accion
		//eslint-disable-next-line
	}, []); //AGREGAR RELOAD ACA PROBANDO

	console.log(itineraries); //ME TRAE TODOS LOS ITINERARIOS DE ESA CIUDAD
	// let handleReload = () => {
	// 	setReload(!reload);
	// };
	//--------HASTA ACA ESTOY PROBANDO-----

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

			{itineraries?.length > 0 ? (
				itineraries?.map((itinerary) => (
					<div
						className="d-flex flex-column justify-content-center align-items-center bg-white rounded w-100 container my-3 container-card-itinerary"
						key={itinerary._id}
					>
						<CardItinerary itinerary={itinerary} />
					</div>
				))
			) : (
				<ItineraryNotFound />
			)}
			<div>
				<LinkRouter to="/cities" className="mx-2 back-to-cities-link ">
					<h3 className="back-to-cities btn-detail rounded p-2">
						Back to cities
					</h3>
				</LinkRouter>
			</div>
		</>
	);
};

export default PrintItineraries;
