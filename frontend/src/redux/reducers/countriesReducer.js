const initialState = {
	countries: [],
};

const countriesReducer = (state = initialState, action) => {
	switch (action.type) {
		case "GET_COUNTRIES":
			return {
				...state,
				countries: action.payload,
			};
		default:
			return state;
	}
};

export default countriesReducer;
