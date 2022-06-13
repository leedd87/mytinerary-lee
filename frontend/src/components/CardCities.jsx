import React from "react";
import { Card } from "react-bootstrap";
import "../styles/cardCities.css";
import { Link } from "react-router-dom";

function CardCities({ image, city, id }) {
	return (
		<Card className="card-cities">
			<Card.Img variant="top" src={image} className="img-card" />
			<Card.Title className="text-center p-1 card-text">{city}</Card.Title>
			<Link to={`/city/${id}`}>More info</Link>{" "}
		</Card>
	);
}

export default CardCities;
