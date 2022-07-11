import React from "react";
import "../styles/activities.css";
import Comments from "./Comments";
// import PrintComments from "./PrintComments";

const Activities = ({ activities, itinerary }) => {
	// console.log(activities);
	console.log(itinerary);

	const allActivities = activities?.data.response;
	// console.log(allActivities);

	return (
		<>
			<div className="d-flex flex-column flex-lg-row  justify-content-center align-items-center container">
				{allActivities?.length > 0 ? (
					allActivities.map((activity, index) => (
						// <div key={activity._id}>
						<div
							className="d-flex justify-content-center align-items-center flex-column container"
							key={activity._id}
						>
							<img
								src={activity.image}
								alt="actividad_2"
								className="img-activities rounded my-3"
							/>
							<h6 className="text-center">{activity.name}</h6>
						</div>
						// </div>
					))
				) : (
					<h3 className="no-activities p-3 mb-5 mt-2 rounded">
						No activities yet 🥲
					</h3>
				)}
			</div>
			{/* <PrintComments itinerary={itinerary} /> */}
			<Comments itinerary={itinerary} />
		</>
	);
};

export default Activities;
