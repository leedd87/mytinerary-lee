import React from "react";

const CardDetail = ({ city }) => {
	return (
		<div className="d-flex flex-row">
			<div>
				<img src={city[0].image} alt={city[0].city} />
			</div>
			<div>
				<h1>{city[0].city}</h1>
				<p>{city[0].description}</p>
			</div>
		</div>
	);
};

export default CardDetail;
