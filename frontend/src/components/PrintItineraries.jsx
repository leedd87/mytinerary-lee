import React from "react";
import { useState } from "react";
import "../styles/itineraries.css";
import Activities from "./Activities";
import "../styles/printItineraries.css";

const PrintItineraries = ({ image, name }) => {
	const [showActivities, setShowActivities] = useState(false);

	const handleClick = () => {
		setShowActivities(!showActivities);
		console.log(showActivities);
	};

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

			<h1>ITINERARIES</h1>
			<div className="d-flex flex-column justify-content-center align-items-center bg-white rounded w-100 container my-3">
				<h2>Visit Itaewon</h2>
				<div className="d-flex justify-content-around align-items-center w-75">
					<img
						src="https://media1.popsugar-assets.com/files/thumbor/o3SqeZaXAC1pwWwoxvYBRClWiYA/0x251:3265x3516/fit-in/2048xorig/filters:format_auto-!!-:strip_icc-!!-/2022/03/22/318/n/48559432/c3febcd2623ac05c889a58.03128934_/i/who-is-nam-joo-hyuk-facts.jpg"
						alt="nam_joo_hyuk"
						className="avatar-itinerary"
					/>
					<h4>Tom Hanks</h4>
				</div>
				{/* <p className="text-center px-6">
						A diverse and colorful neighborhood in Seoul, Itaewon is a
						hotspot for foreigners and locals alike. The lively streets,
						numerous cafes, restaurants, and shops fill the bustling
						streets as nightlife is filled with vibrant energy.
					</p> */}
				<div className="d-flex justify-content-around">
					<p>PRICE: $$$$</p>
					<p>Duration: 6hs</p>
				</div>
				<div>
					<h6 className="text-center">BOTON LIKES: 0</h6>
				</div>
				<div className="d-flex justify-content-around">
					<h6>#seoul</h6>
					<h6>#dongdemun</h6>
					<h6>#itaewon</h6>
				</div>
				{!showActivities ? (
					<div className="d-flex justify-content-center my-4">
						<button onClick={handleClick}>MOSTRAR ACTIDADES</button>
					</div>
				) : (
					<div className="d-flex justify-content-center my-4">
						<button onClick={handleClick}>MOSTRAR MENOS</button>
					</div>
				)}
				{showActivities ? <Activities /> : null}
			</div>
		</>
	);
};

export default PrintItineraries;
