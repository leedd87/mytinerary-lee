import React from "react";
import { Card } from "react-bootstrap";
import "../styles/cardCities.css";
import { Link as LinkRouter } from "react-router-dom";

function CardCities({ image, city, id }) {
	return (
		<Card className="card-cities d-flex justify-content-center align-items-center">
			<Card.Img variant="top" src={image} className="img-card" />
			<Card.Title className=" p-1 card-text">{city}</Card.Title>
			<LinkRouter
				to={`/city/${id}`}
				className="linkRouter link-card-cities p-1 rounded"
			>
				More info
			</LinkRouter>{" "}
		</Card>
	);
}

export default CardCities;
