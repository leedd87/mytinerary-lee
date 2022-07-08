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
	const [modifyInput, setModifyInput] = useState();
	console.log(itinerary);
	// console.log(user);

	useEffect(() => {
		dispatch(itinerariesActions.getOneItinerary(itinerary._id)) //aca le tengo que pasar la accion
			.then((res) => setComments(res.data.response.comments));

		//eslint-disable-next-line
	}, [reload]);

	console.log(comments);
	// console.log(user.userData.id);

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
								className="d-flex align-items-center flex-column bg-comment-section my-3 p-3 rounded"
								key={comment._id}
							>
								<div className="d-flex align-items-center w-100 py-3 mb-3 rounded bg-name-avatar">
									<img
										src={comment?.userId.userPhoto}
										className="rounded-circle mx-5 border border-dark"
										style={{ width: 65 }}
										alt="Avatar"
									/>
									<h5 className="me-3 my-0">
										{comment?.userId.userName +
											" " +
											comment?.userId.userLastName}
									</h5>
								</div>
								<div className="d-flex w-100 bg-comment p-2 rounded flex-column flex-sm-row">
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

									{/*DIFFERENT USER BUTTON CONDITIONAL */}
									{comment?.userId._id === user.userData.id ? (
										<div className="d-flex flex-column flex-md-row">
											<button
												className="btn btn-comment"
												onClick={() => modifyComment(comment._id)}
											>
												Modify
											</button>
											<button
												className="btn btn-comment"
												onClick={() => deleteComment(comment._id)}
											>
												Delete
											</button>
										</div>
									) : null}
								</div>
							</div>
						))}
					</div>
					<div className="w-100 d-flex mb-3">
						<input
							type="text-area"
							placeholder="Add a comment"
							className="w-100 rounded border border-dark"
							onChange={(e) => setInput(e.target.value)}
							value={input}
						/>
						<button
							className="btn mx-2 btn-add-comment"
							onClick={handleAddComment}
						>
							Add Comment
						</button>
					</div>
				</>
			) : (
				<div className="w-100 my-3">
					{comments?.map((comment) => (
						<div
							className="d-flex align-items-center flex-column bg-comment-section my-3 p-3 rounded"
							key={comment._id}
						>
							<div className="d-flex align-items-center w-100 py-3 mb-3 rounded bg-name-avatar">
								<img
									src={comment?.userId.userPhoto}
									className="rounded-circle mx-5 border border-dark"
									style={{ width: 65 }}
									alt="Avatar"
								/>
								<h5 className="me-3 my-0">
									{comment?.userId.userName +
										" " +
										comment?.userId.userLastName}
								</h5>
							</div>
							<div className="d-flex w-100 bg-comment p-2 rounded flex-column flex-sm-row">
								<div
									// suppressContentEditableWarning={true}
									// contentEditable
									// onInput={(event) =>
									// 	setModifyInput(event.currentTarget.textContent)
									// }
									// type="text"
									className="w-75 comment-font"
								>
									{comment.comment}
								</div>
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
