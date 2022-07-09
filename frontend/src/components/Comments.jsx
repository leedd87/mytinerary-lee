import React from "react";
import { useState, useEffect } from "react";
import "react-comments-section/dist/index.css";
import { useDispatch, useSelector } from "react-redux";
import commentsActions from "../redux/actions/commentsActions";
import itinerariesActions from "../redux/actions/itinerariesActions";
import "../styles/comments.css";
import Comment from "./Comment";
import { Link as LinkRouter } from "react-router-dom";

const Comments = ({ itinerary }) => {
	const dispatch = useDispatch();
	const [comments, setComments] = useState();
	const [input, setInput] = useState("");
	const [reload, setReload] = useState(false);
	const user = useSelector((store) => store.usersReducer.user);

	let handleReload = () => {
		setReload(!reload);
	};

	useEffect(() => {
		dispatch(itinerariesActions.getOneItinerary(itinerary._id)) //aca le tengo que pasar la accion
			.then((res) => setComments(res.data.response.comments));

		//eslint-disable-next-line
	}, [reload]);

	// console.log(comments);

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
								<Comment
									comment={comment}
									user={user}
									handleReload={handleReload}
								/>
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
									referrerPolicy="no-referrer"
								/>
								<h5 className="me-3 my-0">
									{comment?.userId.userName +
										" " +
										comment?.userId.userLastName}
								</h5>
							</div>
							<div className="d-flex w-100 bg-comment p-2 rounded flex-column flex-sm-row">
								<div className="w-75 comment-font">
									{comment.comment}
								</div>
							</div>
						</div>
					))}
					<div className="d-flex justify-content-center">
						<LinkRouter to="/users/signup" className="mx-2 signup">
							SIGN UP AND COMMENT
						</LinkRouter>
					</div>
				</div>
			)}
		</>
	);
};

export default Comments;
