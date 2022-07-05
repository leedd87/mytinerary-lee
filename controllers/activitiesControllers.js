const Activity = require("../models/activity");

const activitiesControllers = {
	getActivities: async (req, res) => {
		let activities;
		let error = null;

		try {
			activities = await Activity.find().populate("itinerary", {
				itineraryName: 1,
			});
		} catch (err) {
			error = err;
			console.log("Something went wrong");
		}
		res.json({
			response: error ? "ERROR" : { activities },
			success: error ? false : true,
			error: error,
		});
	},

	addActivity: async (req, res) => {
		const { name, image, itinerary } = req.body.data;
	},
};
