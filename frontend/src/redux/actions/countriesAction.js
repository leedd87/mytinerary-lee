import axios from "axios";

const countriesActions = {
	getCountries: () => {
		return async (dispatch, getState) => {
			const res = await axios.get("https://restcountries.com/v3.1/all");
			dispatch({ type: "GET_COUNTRIES", payload: res.data });
		};
	},
};

export default countriesActions;
