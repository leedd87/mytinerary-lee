import axios from "axios";

// const url = "http://localhost:4000/";
const url = "https://mytinerary-lee-backend.herokuapp.com/";

const commentsActions = {
	addCommentAction: (comment) => {
		const token = localStorage.getItem("token");
		return async () => {
			try {
				let res = await axios.post(
					url + `api/itineraries/comments/`,
					{ comment },
					{ headers: { Authorization: "Bearer " + token } }
				);
				console.log(res);
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
					url + `api/itineraries/comments/${id}`,
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
					url + `api/itineraries/comments/${idComment}`,
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
