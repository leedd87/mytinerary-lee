import React from "react";
import "../styles/cardDetail.css";
import { Link as LinkRouter } from "react-router-dom";

const CardDetail = ({ city }) => {
	return (
		<div className="d-flex flex-column flex-md-row card-detail p-5 rounded w-100">
			<div>
				<img
					src={city.image}
					alt={city.city}
					className="img-card rounded"
				/>
			</div>
			<div className="mx-4 d-flex flex-column align-items-center justify-content-center detail-text-container p-3 my-3 rounded">
				<div>
					<h1>{city.name}</h1>
					<p>{city.description}</p>
				</div>
				<LinkRouter to="/cities" className="btn-detail mt-2 linkRouter">
					Back to cities
				</LinkRouter>
			</div>
		</div>
	);
};

export default CardDetail;
