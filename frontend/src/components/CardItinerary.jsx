import React from "react";
import Activities from "./Activities";
import { useState } from "react";
import { AiOutlineHeart } from "react-icons/ai";
import "../styles/cardItinerary.css";

const CardItinerary = ({ element }) => {
	const [showActivities, setShowActivities] = useState(false);
	const handleClick = () => {
		setShowActivities(!showActivities);
		console.log(showActivities);
	};

	return (
		<>
			<div className="w-100 d-flex justify-content-center align-items-center pt-3">
				<h2 className="text-center">{element.itineraryName}</h2>
			</div>
			<div className="d-flex justify-content-around align-items-center w-75">
				<img
					src={element.image}
					alt={element.name}
					className="avatar-itinerary"
				/>
				<h4>{element.name}</h4>
			</div>
			{/* <p className="text-center px-6">
						A diverse and colorful neighborhood in Seoul, Itaewon is a
						hotspot for foreigners and locals alike. The lively streets,
						numerous cafes, restaurants, and shops fill the bustling
						streets as nightlife is filled with vibrant energy.
					</p> */}
			<div className="d-flex justify-content-around">
				<p className="p-3">Price: {element.price}</p>
				<p className="p-3">Duration: {element.duration}hs</p>
			</div>
			<div>
				<h6 className="text-center">
					<AiOutlineHeart size={30} />: {element.likes}
				</h6>
			</div>
			<div className="d-flex justify-content-around">
				{element.hashtags.map((hashtag, index) => (
					<h6 key={index} className="p-3">
						#{hashtag}
					</h6>
				))}
			</div>
			{!showActivities ? (
				<div className="d-flex justify-content-center my-4">
					<button onClick={handleClick} className="btn-itinerary">
						Show More
					</button>
				</div>
			) : (
				<div className="d-flex justify-content-center my-4">
					<button onClick={handleClick} className="btn-itinerary">
						Show Less
					</button>
				</div>
			)}
			{showActivities ? <Activities /> : null}
		</>
	);
};

export default CardItinerary;
