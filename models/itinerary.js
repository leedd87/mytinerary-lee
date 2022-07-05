const mongoose = require("mongoose");

const itineraryScheme = new mongoose.Schema({
	itineraryName: { type: String, required: true },
	name: { type: String, required: true },
	image: { type: String, required: true },
	price: { type: Number, required: true },
	duration: { type: Number, required: true },
	hashtags: { type: Array, required: true },
	likes: { type: Array, required: true }, //corroborar si es array
	comments: [
		{
			comment: { type: String },
			userId: { type: mongoose.Types.ObjectId, ref: "users" },
		},
	], //corroborar si es array
	city: { type: mongoose.Types.ObjectId, ref: "cities" },
});

const Itinerary = mongoose.model("itineraries", itineraryScheme);
module.exports = Itinerary;
