const Itinerary = require("../models/itinerary");

const itinerariesControllers = {
	getItineraries: async (req, res) => {
		let itineraries;
		let error = null;
		try {
			itineraries = await Itinerary.find().populate("city");
		} catch (err) {
			error = err;
			console.log("Something went wrong");
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
			itineraryName,
			name,
			image,
			price,
			duration,
			hashtags,
			likes,
			city,
		} = req.body.data;
		let itinerary;
		let error = null;
		try {
			itinerary = await new Itinerary({
				itineraryName: itineraryName,
				name: name,
				image: image,
				price: price,
				duration: duration,
				hashtags: hashtags,
				likes: likes,
				city: city,
			}).save();
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
		} catch (err) {
			error = err;
		}
		res.json({
			response: error ? "ERROR" : itinerary,
			success: error ? false : true,
			error: error,
		});
	},

	findItineraryFromCity: async (req, res) => {
		let cityId = req.params.id;
		let itineraries;
		let error = null;
		try {
			itineraries = await Itinerary.find({ city: cityId }).populate("city", {
				name: 1,
			});
		} catch (err) {
			error = err;
		}
		res.json({
			response: error ? "ERROR" : itineraries,
			success: error ? false : true,
			error: error,
		});
	},

	itineraryLikeDislike: async (req, res) => {
		const id = req.params.id; //id del itinerario
		const user = req.user.id;

		await Itinerary.findOne({ _id: id }) //va a encontrar el itinerario que coincida con el id de la ciudad? corroborar
			.then((itinirary) => {
				console.log(itinirary);
				if (itinirary.likes.includes(user)) {
					//este if saca el like
					Itinerary.findOneAndUpdate(
						{ _id: id },
						{ $pull: { likes: user } }, //$pull/saca/elimina metodo de mongo para manejo de datos
						{ new: true } //nueva respuesta
					)
						.then((newItinierary) =>
							res.json({ success: true, response: newItinierary.likes })
						)
						.catch((error) => console.log(error));
				} else {
					Itinerary.findOneAndUpdate(
						{ _id: id },
						{ $push: { likes: user } }, //$push/agrega metodo de mongo para manejo de datos
						{ new: true }
					)
						.then((newItinierary) =>
							res.json({ success: true, response: newItinierary.likes })
						)
						.catch((error) => console.log(error));
				}
			});
	},
};

module.exports = itinerariesControllers;
