import React from "react";
import "../styles/activities.css";
import Comments from "./Comments";

const Activities = ({ activities }) => {
	console.log(activities);

	const allActivities = activities?.data.response;
	console.log(allActivities);

	return (
		<>
			<div className="d-flex flex-column flex-lg-row align-items-center gap-3">
				{allActivities?.length > 0 ? (
					allActivities.map((activity) => (
						<div
							className="d-flex justify-content-center align-items-center flex-column"
							key={activity._id}
						>
							<img
								src={activity.image}
								alt="actividad_2"
								className="img-activities rounded"
							/>
							<h6>{activity.name}</h6>
						</div>
					))
				) : (
					<h1 className="text-center">PAGE UNDER CONSTRUCTION</h1>
				)}
			</div>
			<Comments />
		</>
	);
};

export default Activities;
