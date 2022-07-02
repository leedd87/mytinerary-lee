const Router = require("express").Router();
const citiesControllers = require("../controllers/citiesControllers");
const itinerariesControllers = require("../controllers/itinerariesControllers");
const usersControllers = require("../controllers/usersControllers");
const validator = require("../config/validator");
const passport = require("../config/passport");
//CONTROLADORES
const { getCities, getOneCity, addCity, modifyCity, removeCity } =
	citiesControllers;

const {
	getItineraries,
	getOneItinerary,
	addItinerary,
	modifyItinerary,
	removeItinerary,
	findItineraryFromCity,
} = itinerariesControllers;

const { signUpUser, signInUser, getUsers, verifyMail, verifyToken } =
	usersControllers;

//RUTAS
Router.route("/cities").get(getCities).post(addCity);

Router.route("/cities/:id").delete(removeCity).put(modifyCity).get(getOneCity);

Router.route("/itineraries").get(getItineraries).post(addItinerary);

Router.route("/itineraries/:id")
	.get(getOneItinerary)
	.put(modifyItinerary)
	.delete(removeItinerary);

Router.route("/itineraries/cities/:id").get(findItineraryFromCity);

Router.route("/users/signup").post(validator, signUpUser);

Router.route("/users/signin").post(signInUser);

Router.route("/users").get(getUsers);

Router.route("/verify/:string").get(verifyMail);

Router.route("/users/signintoken").get(
	passport.authenticate("jwt", { session: false }),
	verifyToken
);

module.exports = Router;
