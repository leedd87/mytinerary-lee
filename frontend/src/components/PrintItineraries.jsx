import React from "react";
import { useEffect, useState } from "react";

import "../styles/printItineraries.css";
import CardItinerary from "./CardItinerary";
import { useDispatch } from "react-redux";
import itinerariesActions from "../redux/actions/itinerariesActions";

import ItineraryNotFound from "./ItineraryNotFound";

const PrintItineraries = ({ image, name, id }) => {
	// const { id } = useParams();
	const [itineraries, setItineraries] = useState();
	// const [reload, setReload] = useState(false);
	const dispatch = useDispatch(); //no podemos poner un hook dentro de otro hook

	//ESTOY PROBANDO------
	useEffect(() => {
		dispatch(itinerariesActions.findItineraryFromCity(id)).then((itinerary) =>
			setItineraries(itinerary.data.response)
		);
		//aca le tengo que pasar la accion
		//eslint-disable-next-line
	}, []); //AGREGAR RELOAD ACA PROBANDO

	// let handleReload = () => {
	// 	setReload(!reload);
	// };
	//--------HASTA ACA ESTOY PROBANDO-----

	// const itineraries = useSelector(
	// 	(store) => store.itinerariesReducer.itineraries
	// );

	console.log(itineraries);
	// const id = useParams();

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
						<CardItinerary
							itinerary={itinerary}

							// handleReload={handleReload}
						/>
					</div>
				))
			) : (
				<ItineraryNotFound />
			)}
		</>
	);
};

export default PrintItineraries;
