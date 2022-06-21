const Router = require("express").Router();

const citiesControllers = require("../controllers/citiesControllers");
const { getCities, getOneCity, addCity, modifyCity, removeCity } =
	citiesControllers;

const itinerariesControllers = require("../controllers/itinerariesControllers");

const {
	getItineraries,
	getOneItinerary,
	addItinerary,
	modifyItinerary,
	removeItinerary,
} = itinerariesControllers;

Router.route("/cities").get(getCities).post(addCity);

Router.route("/cities/:id").delete(removeCity).put(modifyCity).get(getOneCity);

Router.route("/itineraries").get(getItineraries);

module.exports = Router;
