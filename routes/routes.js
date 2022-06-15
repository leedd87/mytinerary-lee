const Router = require("express").Router();

const citiesControllores = require("../controllers/citiesControllers");
const { getCities, getOneCity, addCity, modifyCity, removeCity } =
	citiesControllores;

Router.route("/cities").get(getCities).post(addCity);

Router.route("/cities/:id").delete(removeCity).put(modifyCity).get(getOneCity);

module.exports = Router;
