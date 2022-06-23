const initialState = {
	cities: [],
	city: {},
	auxiliar: [],
	filteredCity: [],
};

const citiesReducer = (state = initialState, action) => {
	switch (action.type) {
		case "GET_CITIES":
			return {
				...state,
				cities: action.payload,
				auxiliar: action.payload,
				filteredCity: action.payload,
			};

		case "GET_ONE_CITY":
			return {
				...state,
				city: action.payload,
			};

		case "FILTER_CITIES":
			const filteredCities = state.cities.filter((city) =>
				city.name
					.toLowerCase()
					.trim()
					.startsWith(action.payload.toLowerCase().trim())
			);
			return {
				...state,
				filteredCities: filteredCities,
			};
		default:
			return state;
	}
};

export default citiesReducer;
