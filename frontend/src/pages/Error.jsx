import React from "react";
import { Link as LinkRouter } from "react-router-dom";

function Error() {
	return (
		<div className="error-container d-flex justify-content-center align-items-center">
			<LinkRouter
				to="/"
				className="linkRouter link-error-container p-2 rounded"
			>
				<h1>CITY NOT FOUND</h1>
			</LinkRouter>
		</div>
	);
}

export default Error;
