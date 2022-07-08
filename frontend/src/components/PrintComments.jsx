import React from "react";
import { useState, useEffect } from "react";
import Comments from "./Comments";

const PrintComments = ({ itinerary }) => {
	const [comments, setComments] = useState();

	return (
		<div>
			PrintComments
			<Comments comment={comment} />
		</div>
	);
};

export default PrintComments;
