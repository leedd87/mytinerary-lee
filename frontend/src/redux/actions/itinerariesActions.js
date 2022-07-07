import axios from "axios";

const itinerariesActions = {
	findItineraryFromCity: (id) => {
		return async (dispatch, getState) => {
			const res = await axios.get(
				`http://localhost:4000/api/itineraries/cities/${id}`
			);
			// console.log(res);
			dispatch({
				type: "FIND_ITINERARY_FROM_CITY",
				payload: res.data.response,
			});
			return res;
		};
	},

	getOneItinerary: (id) => {
		return async (dispatch, getState) => {
			const res = await axios.get(
				`http://localhost:4000/api/itineraries/${id}`
			);
			dispatch({
				type: "GET_ONE_ITINERARY",
				payload: res.data.response,
			});
			return res;
		};
	},

	likeDislikeAction: (id) => {
		//id del itinerario
		const token = localStorage.getItem("token"); //lo primero que hace es adquirir el token del localstorage
		return async () => {
			try {
				let res = await axios.put(
					//estructuctura de axios => primero va el parametro(id), despues el body({}) y despues el headers{headers}
					`http://localhost:4000/api/itineraries/likes/${id}`, //ruta va el parametro luego...
					{}, //...el body y luego...
					{ headers: { Authorization: "Bearer " + token } } //el headers, si no va a asi el headers nunca va a llegar porque va a tomarlo como "body"
				);
				console.log(res);
				return res;
			} catch (error) {
				console.log(error);
			}
		};
	},
};

export default itinerariesActions;
