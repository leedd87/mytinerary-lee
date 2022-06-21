import React from "react";
import "../styles/cardCities.css";
import { Link as LinkRouter } from "react-router-dom";

const CardCities = ({ image, city, id, description }) => {
	return (
		<>
			<div className="flip-card m-2 card-city" key={id}>
				<div className="flip-card-inner">
					<div className="flip-card-front d-flex flex-column justify-content-center align-items-center">
						<img src={image} alt={city} className="img-card-cities" />
						<h1 className="text-cities mt-2">{city}</h1>
					</div>
					<div className="flip-card-back text-cities-container d-flex flex-column justify-content-center align-items-center">
						<p className="text-cities p-2">{description}</p>

						<LinkRouter
							to={`/cities/${id}`}
							className="btn-flip-card linkRouter"
						>
							See More
						</LinkRouter>
					</div>
				</div>
			</div>
		</>
	);
};

export default CardCities;
