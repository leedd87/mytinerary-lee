const Itinerary = require("../models/itinerary");

const itinerariesControllers = {
	getItineraries: async (req, res) => {
		let itineraries;
		let error = null;
		try {
			itineraries = await Itinerary.find();
		} catch (err) {
			error = err;
			console.log("PASO ALGO");
		}
		res.json({
			response: error ? "ERROR" : { itineraries },
			success: error ? false : true,
			error: error,
		});
	},

	getOneItinerary: async (req, res) => {
		const id = req.params.id;
		let itinerary;
		let error = null;
		try {
			itinerary = await Itinerary.findOne({ _id: id });
		} catch (err) {
			error = err;
		}
		res.json({
			response: error ? "ERROR" : itinerary,
			success: error ? false : true,
			error: error,
		});
	},

	addItinerary: async (req, res) => {
		const {
			itineraryCity,
			name,
			image,
			price,
			duration,
			hashtags,
			likes,
			activities,
		} = req.body.itinerary;
		let itinerary;
		let error = null;
		try {
			itinerary = await new Itinerary({
				itineraryCity: itineraryCity,
				name: name,
				image: image,
				price: price,
				duration: duration,
				hashtags: hashtags,
				likes: likes,
				activities: activities,
			});
		} catch (err) {
			error = err;
		}
		res.json({
			response: error ? "ERROR" : itinerary,
			success: error ? false : true,
			error: error,
		});
	},

	modifyItinerary: async (req, res) => {
		const id = req.params.id;
		const itinerary = req.body.data;
		let itinerarydb;
		let error = null;
		try {
			itinerarydb = await Itinerary.findOneAndUpdate(
				{ _id: id },
				itinerary,
				{ new: true }
			);
		} catch (err) {
			error = err;
		}
		res.json({
			response: error ? "ERROR" : itinerarydb,
			success: error ? false : true,
			error: error,
		});
	},

	removeItinerary: async (req, res) => {
		const id = req.params.id;
		let itinerary;
		let error = null;
		try {
			itinerary = await Itinerary.findByIdAndDelete({ _id: id });
		} catch {
			error = err;
		}
		res.json({
			response: error ? "ERROR" : itinerary,
			success: error ? false : true,
			error: error,
		});
	},
};

module.exports = itinerariesControllers;
