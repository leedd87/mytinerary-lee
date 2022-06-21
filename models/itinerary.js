const mongoose = require("mongoose");

const itineraryScheme = new mongoose.Schema({
	itineraryCity: { type: String, required: true },
	name: { type: String, required: true },
	image: { type: String, required: true },
	price: { type: String, required: true },
	duration: { type: String, required: true },
	hashtags: [{ type: String, required: true }],
	likes: { type: String, required: true },
	activities: [{ type: String, required: true }],
});

const Itinerary = mongoose.model("itineraries", itineraryScheme);
module.exports = Itinerary;
