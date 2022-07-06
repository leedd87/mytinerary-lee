const Router = require("express").Router();
const citiesControllers = require("../controllers/citiesControllers");
const itinerariesControllers = require("../controllers/itinerariesControllers");
const usersControllers = require("../controllers/usersControllers");
const activitiesControllers = require("../controllers/activitiesControllers");
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
	itineraryLikeDislike,
} = itinerariesControllers;

const { signUpUser, signInUser, getUsers, verifyMail, verifyToken } =
	usersControllers;

const {
	getActivities,
	addActivity,
	modifyActivity,
	removeActivity,
	findActivityFromItinerary,
} = activitiesControllers;

//RUTAS
//CITIES
Router.route("/cities").get(getCities).post(addCity);

Router.route("/cities/:id").delete(removeCity).put(modifyCity).get(getOneCity);

//ITINERARIES
Router.route("/itineraries").get(getItineraries).post(addItinerary);

Router.route("/itineraries/:id")
	.get(getOneItinerary)
	.put(modifyItinerary)
	.delete(removeItinerary);

Router.route("/itineraries/cities/:id").get(findItineraryFromCity);

//ACTIVITIES
Router.route("/activities").get(getActivities).post(addActivity);

Router.route("/activities/:id").put(modifyActivity).delete(removeActivity);

Router.route("/activities/itineraries/:id").get(findActivityFromItinerary);

//LIKES-DISLIKES
Router.route("/itineraries/likes/:id").put(
	passport.authenticate("jwt", { session: false }),
	itineraryLikeDislike
);

//USERS
Router.route("/users/signup").post(validator, signUpUser); //ACA SE USA EL VALIDATOR PARA EL SIGNUP

Router.route("/users/signin").post(signInUser);

Router.route("/users").get(getUsers);

Router.route("/verify/:string").get(verifyMail);

Router.route("/users/signintoken").get(
	passport.authenticate("jwt", { session: false }),
	verifyToken
);

module.exports = Router;
