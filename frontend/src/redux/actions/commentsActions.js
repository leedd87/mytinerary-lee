import axios from "axios";

const commentsActions = {
	addCommentAction: () => {
		const token = localStorage.getItem("token");
		return async () => {
			try {
				let res = await axios.post(
					`http://localhost:4000/api/itineraries/comments/`,
					{},
					{ headers: { Authorization: "Bearer " + token } }
				);
				console.log(res);
				return res;
			} catch (error) {
				console.log(error);
			}
		};
	},

	editCommentAction: () => {
		const token = localStorage.getItem("token");
		return async () => {
			try {
				let res = await axios.put(
					`http://localhost:4000/api/itineraries/comments/`,
					{},
					{ headers: { Authorization: "Bearer " + token } }
				);
				console.log(res);
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
				let res = await axios.delete(
					`http://localhost:4000/api/itineraries/comments/${idComment}`,
					{},
					{ headers: { Authorization: "Bearer " + token } }
				);
				console(res);
				return res;
			} catch (error) {
				console.log(error);
			}
		};
	},
};

export default commentsActions;
