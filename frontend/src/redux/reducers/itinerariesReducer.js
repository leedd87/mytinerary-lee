const initialState = {
	itineraries: [],
	itinerary: [],
};

const itinerariesReducer = (state = initialState, action) => {
	switch (action.type) {
		case "FIND_ITINERARY_FROM_CITY":
			return {
				...state,
				itineraries: action.payload,
			};

		case "GET_ONE_ITINERARY":
			return {
				...state,
				itinerary: action.payload,
			};
		default:
			return state;
	}
};

export default itinerariesReducer;
