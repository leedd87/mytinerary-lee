const initialState = {
	user: null,
	popup: {
		view: false,
		message: "",
		success: false,
	},
};

const usersReducer = (state = initialState, action) => {
	switch (action.type) {
		case "SIGN_UP_MESSAGE":
			return {
				...state,
				popup: action.payload,
			};
		case "SIGN_IN":
			return {
				...state,
				user: action.payload,
			};
		case "SIGN_IN_FALSE_SUCCESS_MESSAGE":
			return {
				...state,
				popup: action.payload,
			};
		case "SIGN_OUT":
			return {
				...state,
				user: action.payload,
			};
		default:
			return state;
	}
};
export default usersReducer;
