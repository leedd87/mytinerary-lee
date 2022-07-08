import React from "react";
import { useState, useEffect } from "react";
import "react-comments-section/dist/index.css";
import { useDispatch, useSelector } from "react-redux";
import commentsActions from "../redux/actions/commentsActions";
import itinerariesActions from "../redux/actions/itinerariesActions";

const Comments = ({ itinerary, handleReload }) => {
	const dispatch = useDispatch();
	// const [itineraries, setItineraries] = useState();
	const [comments, setComments] = useState();
	const [input, setInput] = useState("");
	const [reload, setReload] = useState(false);
	const user = useSelector((store) => store.usersReducer.user);
	const [modifyInput, setModifyInput] = useState("");
	// console.log(itinerary);
	// console.log(user);

	useEffect(() => {
		dispatch(itinerariesActions.getOneItinerary(itinerary._id)) //aca le tengo que pasar la accion
			.then((res) => setComments(res.data.response.comments));

		//eslint-disable-next-line
	}, [reload]);
	// console.log("hola comentario", comments);

	// function handleChange(event) {
	// 	setInput(event.target.value);
	// 	// console.log("value is", event.target.value);
	// }
	// console.log(input);

	async function handleAddComment(event) {
		event.preventDefault();
		// console.log("handleAddComment", input);
		const comment = {
			itinerary: itinerary._id, //itinerary._id
			comment: input,
		};
		// console.log(comment);
		await dispatch(commentsActions.addCommentAction(comment));
		setInput("");
		setReload(!reload);
	}
	// const handleChange = event => {
	// 	setInput(event.target.value);
	// 	console.log("value is", event.targe.value);
	// }

	async function deleteComment(event) {
		console.log(event);
		await dispatch(commentsActions.deleteCommentAction(event));
		setReload(!reload);
	}

	async function modifyComment(id) {
		console.log(id);
		const comment = {
			comment: modifyInput,
		};
		console.log(comment);
		await dispatch(commentsActions.editCommentAction(comment, id));
		setReload(!reload);
	}

	return (
		<>
			<h2>Comments</h2>
			<div className="w-100">
				{comments?.map((comment, index) => (
					<div key={index} style={{ marginBottom: "1rem" }}>
						<div
							suppressContentEditableWarning={true}
							contentEditable
							onInput={(event) =>
								setModifyInput(event.currentTarget.textContent)
							}
							type="text"
							style={{ border: "1px solid black" }}
						>
							{comment.comment}
						</div>
						<button onClick={() => modifyComment(comment._id)}>
							Modify
						</button>
						<button onClick={() => deleteComment(comment._id)}>
							Delete
						</button>
					</div>

					// <div
					// 	className="d-flex align-items-center bg-primary"
					// 	key={comment._id}
					// >
					// 	<img
					// 		src={comment?.userId.userPhoto}
					// 		className="rounded-circle mx-5"
					// 		style={{ width: 65 }}
					// 		alt="Avatar"
					// 	/>
					// 	<div className="d-flex align-items-center ">
					// 		<h5 className="me-3 my-0">
					// 			{comment?.userId.userName +
					// 				" " +
					// 				comment?.userId.userLastName}
					// 		</h5>
					// 		<p className="my-0">{comment.comment}</p>
					// 	</div>
					// </div>
				))}
			</div>
			<div className="w-100 d-flex">
				<input
					type="text-area"
					placeholder="Agregar un comentario"
					className="w-100"
					onChange={(e) => setInput(e.target.value)}
					value={input}
				/>
				<button onClick={handleAddComment}>Add Comment</button>
			</div>
		</>
	);
};

export default Comments;
