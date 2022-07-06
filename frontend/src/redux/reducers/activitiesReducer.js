const initialState = {
	activities: [],
};

const activitiesReducer = (state = initialState, action) => {
	switch (action.type) {
		case "FIND_ACTIVITY_FROM_ITINERARY":
			return {
				...state,
				activities: action.payload,
			};
		default:
			return state;
	}
};

export default activitiesReducer;
