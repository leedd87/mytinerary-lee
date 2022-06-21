const mongoose = require("mongoose");

const itineraryScheme = new mongoose.Schema({
	name: { type: String, required: true },
	country: { type: String, required: true },
	image: { type: String, required: true },
	description: { type: String, required: true },
});

const City = mongoose.model("cities", cityScheme);
module.exports = City;
