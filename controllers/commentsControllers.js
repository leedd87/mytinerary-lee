const Itinerary = require("../models/itinerary");

const commentsControllers = {
	addComment: async (req, res) => {
		const { itinerary, comment } = req.body.comment;
		const user = req.user._id;
		try {
			const newComment = await Itinerary.findOneAndUpdate(
				{ _id: itinerary },
				{ $push: { comments: { comment, userId: user } } },
				{ new: true }
			).populate("comments.userId"); //aca populo para tener la info del usuario
			//.populate("comments.userId", { userName: 1, userLastName: 1 }); //aca populo para tener la info del usuario
			res.json({
				success: true,
				response: { newComment },
				message: "Thank your for commenting",
			});
		} catch (error) {
			console.log(error);
			res.json({
				success: false,
				message: "Something went wrong, please try later.",
			});
		}
	},

	modifyComment: async (req, res) => {
		const { comment } = req.body.comment;
		const id = req.params.id;

		console.log(req.body);
		// console.log(id);

		const user = req.user._id;
		try {
			const newComment = await Itinerary.findOneAndUpdate(
				{ "comments._id": id },
				{
					$set: {
						"comments.$.comment": comment,
						"comments.$.date": Date.now(),
					},
				},
				{ new: true }
			);
			console.log(newComment);
			res.json({
				success: true,
				response: { newComment },
				message: "Your message has change",
			});
		} catch (error) {
			console.log(error);
			res.json({
				success: true,
				message: "Something went wrong",
			});
		}
	},

	deleteComment: async (req, res) => {
		const id = req.params.id;

		try {
			const deleteComment = await Itinerary.findOneAndUpdate(
				{ "comments._id": id },
				{ $pull: { comments: { _id: id } } },
				{ new: true }
			);
			console.log(deleteComment);
			res.json({
				success: true,
			});
		} catch (error) {
			console.log(error);
		}
	},
};

module.exports = commentsControllers;
