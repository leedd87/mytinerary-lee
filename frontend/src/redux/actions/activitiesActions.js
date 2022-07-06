import axios from "axios";

const activitiesActions = {
	findActivityFromItinerary: (id) => {
		return async (dispatch, getState) => {
			const res = await axios.get(
				`http://localhost:4000/api/activities/itineraries/${id}`
			);
			// console.log(res);
			dispatch({
				type: "FIND_ACTIVITY_FROM_ITINERARY",
				payload: res.data.response,
			});
			return res;
		};
	},
};

export default activitiesActions;
