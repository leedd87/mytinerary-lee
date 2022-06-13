import React from "react";
import "../styles/cardDetail.css";

const CardDetail = ({ city }) => {
	return (
		<div className="d-flex flex-row card-detail p-5 rounded">
			<div>
				<img src={city[0].image} alt={city[0].city} className="img-card" />
			</div>
			<div>
				<h1>{city[0].city}</h1>
				<p>{city[0].description}</p>
			</div>
		</div>
	);
};

export default CardDetail;
