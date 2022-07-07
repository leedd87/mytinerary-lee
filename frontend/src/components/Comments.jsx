import React from "react";
import { useState, useEffect } from "react";
import "react-comments-section/dist/index.css";
import { useDispatch, useSelector } from "react-redux";
import commentsActions from "../redux/actions/commentsActions";
import itinerariesActions from "../redux/actions/itinerariesActions";

const Comments = ({ itinerary }) => {
	const dispatch = useDispatch();
	const user = useSelector((store) => store.usersReducer.user);
	// const [itineraries, setItineraries] = useState();
	const [comments, setComments] = useState();
	const [input, setInput] = useState("");
	const [reload, setReload] = useState(false);
	// console.log(itinerary);
	// console.log(user);

	useEffect(() => {
		dispatch(itinerariesActions.getOneItinerary(itinerary._id)) //aca le tengo que pasar la accion
			.then((res) => setComments(res.data.response.comments));

		//eslint-disable-next-line
	}, [reload]);
	// console.log(comments);

	function handleChange(event) {
		setInput(event.target.value);
		// console.log("value is", event.target.value);
	}

	function handleAddComment(event) {
		event.preventDefault();
		console.log("handleAddComment", input);
		const comment = {
			itinerary: "62b37abaed37dc907710dc02", //itinerary._id
			comment: input,
		};
		console.log(comment);

		dispatch(commentsActions.addCommentAction());

		setInput("");

		setReload(!reload);
	}
	// const handleChange = event => {
	// 	setInput(event.target.value);
	// 	console.log("value is", event.targe.value);
	// }

	return (
		<>
			<h2>Comments</h2>
			<div className="w-100">
				{comments?.map((comment) => (
					<div
						className="d-flex align-items-center bg-primary"
						key={comment._id}
					>
						<img
							src={user.userData.userPhoto}
							className="rounded-circle mx-5"
							style={{ width: 65 }}
							alt="Avatar"
						/>
						<div className="d-flex align-items-center ">
							<h5 className="me-3 my-0">
								{user.userData.userName +
									" " +
									user.userData.userLastName}
							</h5>
							<p
								className="my-0"
								onClick={(e) => {
									console.log(e.target.textContent);
								}}
							>
								{comment.comment}
							</p>
						</div>
					</div>
				))}
			</div>
			<div className="w-100 d-flex">
				<input
					type="text"
					placeholder="Agregar un comentario"
					className="w-100"
					// value={(e) => setInput(e.target.value)}
					onKeyDown={handleChange}
				/>
				<button type="submit" onClick={handleAddComment}>
					Add Comment
				</button>
			</div>
		</>
	);
};

export default Comments;
