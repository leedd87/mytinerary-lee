import React from "react";
import { Card } from "react-bootstrap";
import "../styles/card.css";

function CardBoostrap({ image, city }) {
	return (
		<Card className="card-container">
			<Card.Img variant="top" src={image} className="img-card" />
			<Card.Title className="text-center p-1 card-text">{city}</Card.Title>
		</Card>
	);
}

export default CardBoostrap;
