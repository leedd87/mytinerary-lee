import axios from "axios";

const commentsActions = {
	addCommentAction: (comment) => {
		const token = localStorage.getItem("token");
		return async () => {
			try {
				let res = await axios.post(
					`http://localhost:4000/api/itineraries/comments/`,
					{ comment },
					{ headers: { Authorization: "Bearer " + token } }
				);

				return res;
			} catch (error) {
				console.log(error);
			}
		};
	},

	editCommentAction: (comment, id) => {
		const token = localStorage.getItem("token");
		return async () => {
			try {
				let res = await axios.put(
					`http://localhost:4000/api/itineraries/comments/${id}`,
					{ comment },
					{ headers: { Authorization: "Bearer " + token } }
				);
				// console.log(res);
				return res;
			} catch (error) {
				console.log(error);
			}
		};
	},

	deleteCommentAction: (idComment) => {
		const token = localStorage.getItem("token");
		return async () => {
			try {
				let res = await axios.post(
					//ES UN POST
					`http://localhost:4000/api/itineraries/comments/${idComment}`,
					{},
					{ headers: { Authorization: "Bearer " + token } }
				);

				return res;
			} catch (error) {
				console.log(error);
			}
		};
	},
};

export default commentsActions;
