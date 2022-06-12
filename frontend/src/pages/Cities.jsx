import React from "react";
import { Link as LinkRouter } from "react-router-dom";

function Cities() {
	return (
		<div className="cities-container d-flex justify-content-center align-items-center">
			<LinkRouter
				to="/"
				className="linkRouter link-error-container p-2 rounded"
			>
				<h1 className="p-2 rounded">
					WE ARE WORKING FOR YOUR BEST EXPERIENCE
				</h1>
			</LinkRouter>
		</div>
	);
}

export default Cities;
