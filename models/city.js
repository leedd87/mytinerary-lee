const mongoose = require("mongoose");

const cityScheme = new mongoose.Schema({
	name: { type: String, required: true },
	country: { type: String, required: true },
	image: { type: String, required: true },
	description: { type: String, required: true },
	// itineraries: { type: mongoose.Types.ObjectId, ref: "itineraries" },
});

const City = mongoose.model("cities", cityScheme);
module.exports = City;
