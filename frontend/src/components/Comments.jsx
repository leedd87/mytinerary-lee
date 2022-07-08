import React from "react";
import { useState, useEffect } from "react";
import "react-comments-section/dist/index.css";
import { useDispatch, useSelector } from "react-redux";
import commentsActions from "../redux/actions/commentsActions";
import itinerariesActions from "../redux/actions/itinerariesActions";
import "../styles/comments.css";

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

	async function handleAddComment(event) {
		event.preventDefault();

		const comment = {
			itinerary: itinerary._id,
			comment: input,
		};

		await dispatch(commentsActions.addCommentAction(comment));
		setInput("");
		setReload(!reload);
	}

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
			{user ? (
				<>
					<div className="w-100 my-3">
						{comments?.map((comment) => (
							<div
								className="d-flex align-items-center bg-primary p-2 rounded flex-column flex-md-row"
								key={comment._id}
							>
								<div className="d-flex align-items-center">
									<img
										src={comment?.userId.userPhoto}
										className="rounded-circle mx-5"
										style={{ width: 65 }}
										alt="Avatar"
									/>
									<h5 className="me-3 my-0">
										{comment?.userId.userName +
											" " +
											comment?.userId.userLastName}
									</h5>
								</div>
								<div
									suppressContentEditableWarning={true}
									contentEditable
									onInput={(event) =>
										setModifyInput(event.currentTarget.textContent)
									}
									type="text"
									className="w-75 comment-font"
								>
									{comment.comment}
								</div>
								<div className="d-flex flex-column flex-md-row">
									<button
										className="btn"
										onClick={() => modifyComment(comment._id)}
									>
										Modify
									</button>
									<button
										className="btn"
										onClick={() => deleteComment(comment._id)}
									>
										Delete
									</button>
								</div>
							</div>
						))}
					</div>
					<div className="w-100 d-flex my-3">
						<input
							type="text-area"
							placeholder="Agregar un comentario"
							className="w-100"
							onChange={(e) => setInput(e.target.value)}
							value={input}
						/>
						<button className="btn" onClick={handleAddComment}>
							Add Comment
						</button>
					</div>
				</>
			) : (
				<div className="w-100">
					{comments?.map((comment) => (
						<div
							className="d-flex align-items-center bg-primary"
							key={comment._id}
						>
							<img
								src={comment?.userId.userPhoto}
								className="rounded-circle mx-5"
								style={{ width: 65 }}
								alt="Avatar"
							/>
							<div className="d-flex align-items-center ">
								<h5 className="me-3 my-0">
									{comment?.userId.userName +
										" " +
										comment?.userId.userLastName}
								</h5>
								<div className="container">{comment.comment}</div>
							</div>
						</div>
					))}
					<div>PLEASE SIGN UP OR LOG IN</div>
				</div>
			)}
		</>
	);
};

export default Comments;
