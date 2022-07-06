import { combineReducers } from "redux";
import citiesReducer from "./citiesReducer";
import itinerariesReducer from "./itinerariesReducer";
import usersReducer from "./usersReducer";
import activitiesReducer from "./activitiesReducer";

const mainReducer = combineReducers({
	citiesReducer,
	itinerariesReducer,
	usersReducer,
	activitiesReducer,
});

export default mainReducer;
