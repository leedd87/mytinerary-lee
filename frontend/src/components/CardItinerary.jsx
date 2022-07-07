import React from "react";
import Activities from "./Activities";
import { useState } from "react";
import { AiOutlineHeart } from "react-icons/ai";
import "../styles/cardItinerary.css";
import { useDispatch } from "react-redux";
import itinerariesActions from "../redux/actions/itinerariesActions";
import activitiesActions from "../redux/actions/activitiesActions";
import LikesButton from "./LikesButton";

const CardItinerary = ({ itinerary, handleReload }) => {
	// const { id } = useParams();
	const [activities, setActivities] = useState();
	//revisar
	const dispatch = useDispatch();
	const [showActivities, setShowActivities] = useState(false);

	const handleClick = async () => {
		setShowActivities(!showActivities);
		console.log(showActivities);
		let res = await dispatch(
			activitiesActions.findActivityFromItinerary(itinerary._id) //
		);
		setActivities(res);
	};

	// useEffect(() => {
	// 	dispatch(itinerariesActions.findItineraryFromCity(id)); //aca le tengo que pasar la accion
	// }, [reload]);
	// definir si hay un usuario

	// async function likesDislikes() {
	// 	let res = await dispatch(
	// 		itinerariesActions.likeDislikeAction(itinerary._id)
	// 	);
	// 	console.log(res);
	// 	handleReload();
	// }

	let money = "💵 ";

	return (
		<>
			<div className="w-100 d-flex justify-content-center align-items-center pt-3">
				<h2 className="text-center">{itinerary.itineraryName}</h2>
			</div>
			<div className="d-flex justify-content-around align-items-center w-75">
				<img
					src={itinerary.image}
					alt={itinerary.name}
					className="avatar-itinerary"
				/>
				<h4>{itinerary.name}</h4>
			</div>
			<div className="d-flex justify-content-around">
				<p className="p-3">Price: {money.repeat(itinerary.price)}</p>
				<p className="p-3">Duration: {itinerary.duration}hs</p>
			</div>
			<div>
				<LikesButton
					itinerary={itinerary}
					//  handleReload={handleReload}
				/>
				{/* <h5 className="text-center"> */}
				{/* <AiOutlineHeart size={30} onClick={likesDislikes} /> : */}
				{/* {itinerary.likes.length} */}
				{/* </h5> */}
			</div>
			<div className="d-flex justify-content-around">
				{itinerary.hashtags.map((hashtag, index) => (
					<h6 key={index} className="p-3">
						#{hashtag}
					</h6>
				))}
			</div>
			{!showActivities ? (
				<div className="d-flex justify-content-center my-4">
					<button onClick={handleClick} className="btn-itinerary">
						Show More
					</button>
				</div>
			) : (
				<div className="d-flex justify-content-center my-4">
					<button onClick={handleClick} className="btn-itinerary">
						Show Less
					</button>
				</div>
			)}
			{showActivities ? <Activities activities={activities} /> : null}
		</>
	);
};

export default CardItinerary;
