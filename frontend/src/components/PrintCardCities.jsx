import React from "react";
import CardCities from "./CardCities";

function PrintCardCities({ filterArray }) {
	return (
		<>
			{filterArray.map((element) => (
				<div
					className="d-flex justify-content-center align-items-center flex-wrap"
					key={element._id}
				>
					<CardCities
						city={element.name}
						image={element.image}
						id={element._id}
					/>
				</div>
			))}
		</>
	);
}

export default PrintCardCities;
