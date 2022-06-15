import React from "react";
import "../styles/cardDetail.css";
import { Link as LinkRouter } from "react-router-dom";

const CardDetail = ({ city }) => {
	return (
		<div className="d-flex flex-row card-detail p-5 rounded">
			<div>
				<img src={city.image} alt={city.city} className="img-card" />
				<img src={city.image} alt={city.city} className="img-card" />
			</div>
			<div className="mx-4">
				<div>
					<h1>{city.name}</h1>
					<p>{city.description}</p>
				</div>
				<LinkRouter to="/cities" className="linkRouter mx-2">
					Cities
				</LinkRouter>
			</div>
		</div>
	);
};

export default CardDetail;
