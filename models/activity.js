const mongoose = require("mongoose");

const activitySchema = new mongoose.Schema({
	itineraryName: { type: String, required: true },
	name: { type: String, required: true },
	image: { type: String, required: true },
	price: { type: Number, required: true },
	duration: { type: Number, required: true },
	hashtags: { type: Array, required: true },
	likes: { type: Number, required: true },
	city: { type: mongoose.Types.ObjectId, ref: "itineraries" },
});

const Activity = mongoose.model("activities", itinerarySchema);
module.exports = Activity;
