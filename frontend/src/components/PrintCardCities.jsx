import React from "react";
import CardCities from "./CardCities";

function PrintCardCities({ filterArray }) {
	return (
		<>
			{filterArray.map((element) => (
				<div
					className="d-flex justify-content-center align-items-center flex-wrap"
					key={element.id}
				>
					<CardCities
						city={element.city}
						image={element.image}
						id={element.id}
					/>
				</div>
			))}
		</>
	);
}

export default PrintCardCities;
