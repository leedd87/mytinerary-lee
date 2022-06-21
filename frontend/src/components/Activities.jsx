import React from "react";
import "../styles/activities.css";

const Activities = () => {
	return (
		<>
			<div className="d-flex justify-content-center align-items-center gap-3">
				<div className="d-flex justify-content-center align-items-center flex-column">
					<img
						src="http://res.heraldm.com/content/image/2020/11/25/20201125000671_0.jpg"
						alt="actividad_1"
						className="img-activities rounded"
					/>
					<h6>Pottery Lesson</h6>
				</div>
				<div className="d-flex justify-content-center align-items-center flex-column">
					<img
						src="https://cdn.theculturetrip.com/wp-content/uploads/2018/04/nightlife-2162772_1280.jpg"
						alt="actividad_2"
						className="img-activities rounded"
					/>
					<h6>Discover Itaewon Nightlife</h6>
				</div>
				<div>
					<img
						src="https://thumbs.dreamstime.com/b/seoul-south-korea-may-leeum-samsung-art-museum-anish-kapoor-s-sculpture-tall-tree-eye-garden-displays-korean-199185289.jpg"
						alt="actividad_3"
						className="img-activities rounded"
					/>
					<h6>Visit Leeum Art Museum</h6>
				</div>
			</div>
		</>
	);
};

export default Activities;
