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
	findItineraryFromCity,
} = itinerariesControllers;

Router.route("/cities").get(getCities).post(addCity);

Router.route("/cities/:id").delete(removeCity).put(modifyCity).get(getOneCity);

Router.route("/itineraries").get(getItineraries).post(addItinerary);

Router.route("/itineraries/cities/:id").get(findItineraryFromCity);

module.exports = Router;
