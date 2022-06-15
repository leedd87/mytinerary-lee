const City = require("../models/city");

const citiesControllers = {
	getCities: async (req, res) => {
		let cities;
		let error = null;
		try {
			cities = await City.find();
		} catch (err) {
			error = err;
		}
		res.json({
			response: error ? "ERROR" : { cities },
			success: error ? false : true,
			error: error,
		});
	},

	getOneCity: async (req, res) => {
		const id = req.params.id;
		let city;
		let error = null;
		try {
			city = await City.findOne({ _id: id });
		} catch (err) {
			error = err;
			console.log(error);
		}
		res.json({
			response: error ? "ERROR" : city,
			success: error ? false : true,
			error: error,
		});
	},

	addCity: async (req, res) => {
		const { name, country, description, image } = req.body.data;
		let city;
		let error = null;
		try {
			//el metodo va a intentar crear la ciudad si no puede va a tirar el catch(error) y me lo muestre para poder repararlo
			city = await new City({
				//nuevo modelo
				name: name,
				country: country,
				image: image,
				description: description,
			}).save();
		} catch (err) {
			error = err;
		}
		res.json({
			response: error ? "ERROR" : city,
			success: error ? false : true,
			error: error,
		});
	},

	modifyCity: async (req, res) => {
		const id = req.params.id;
		const city = req.body.data; //=>
		let citydb;
		let error = null;
		try {
			citydb = await City.findOneAndUpdate({ _id: id }, city, {
				new: true,
			});
		} catch (err) {
			error = err;
		}
		res.json({
			response: error ? "ERROR" : citydb,
			success: error ? false : true,
			error: error,
		});
	},

	removeCity: async (req, res) => {
		const id = req.params.id;
		let city;
		let error = null;
		try {
			city = await City.findByIdAndDelete({ _id: id });
		} catch (err) {
			error = err;
		}
		res.json({
			response: error ? "ERROR" : city,
			success: error ? false : true,
			error: error,
		});
	},
};

module.exports = citiesControllers;
