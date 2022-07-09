import React from "react";
import { useState } from "react";
import "react-comments-section/dist/index.css";
import { useDispatch } from "react-redux";
import commentsActions from "../redux/actions/commentsActions";
import "../styles/comments.css";

const Comment = ({ comment, user, handleReload }) => {
	const dispatch = useDispatch();
	const [modifyInput, setModifyInput] = useState();

	async function deleteComment(event) {
		// console.log(event);
		await dispatch(commentsActions.deleteCommentAction(event));

		handleReload();
	}

	async function modifyComment(id) {
		// console.log(id);
		const comment = {
			comment: modifyInput,
		};
		// console.log(comment);
		await dispatch(commentsActions.editCommentAction(comment, id));

		handleReload();
	}

	return (
		<>
			<div className="d-flex align-items-center w-100 py-3 mb-3 rounded bg-name-avatar">
				<img
					src={comment?.userId.userPhoto}
					className="rounded-circle mx-5 border border-dark"
					style={{ width: 65 }}
					alt="Avatar"
					referrerPolicy="no-referrer" //evita el error de google
				/>
				<h5 className="me-3 my-0">
					{comment?.userId.userName && comment?.userId.userLastName
						? `${comment?.userId.userName} ${comment?.userId.userLastName}`
						: comment?.userId.userName}
				</h5>
			</div>
			<div className="d-flex w-100 bg-comment p-2 rounded flex-column flex-sm-row">
				{comment?.userId._id === user.userData.id ? (
					<div
						suppressContentEditableWarning={true}
						contentEditable
						onInput={(event) =>
							setModifyInput(event.currentTarget.textContent)
						}
						type="text"
						className="w-75 comment-font d-flex align-items-center"
					>
						{comment.comment}
					</div>
				) : (
					<div className="w-75 comment-font">{comment.comment}</div>
				)}
				{/*DIFFERENT USER BUTTON CONDITIONAL */}
				{comment?.userId._id === user.userData.id ? (
					<div className="d-flex flex-column flex-md-row align-items-center">
						<button
							className="btn btn-comment mx-2 my-2"
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
		</>
	);
};

export default Comment;
