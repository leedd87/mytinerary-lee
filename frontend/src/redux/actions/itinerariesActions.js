import axios from "axios";

const itinerariesActions = {
	findItineraryFromCity: (id) => {
		return async (dispatch, getState) => {
			const res = await axios.get(
				`http://localhost:4000/api/itineraries/cities/${id}`
			);
			console.log(res);
			dispatch({
				type: "FIND_ITINERARY_FROM_CITY",
				payload: res.data.response,
			});
		};
	},
};

export default itinerariesActions;
