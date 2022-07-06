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
			).populate("comments.userId", { userName: 1, userLastName: 1 });
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
		const { commentId, comment } = req.body.comment;
		const user = req.user._id; //revisar
		try {
			const newComment = await Itinerary.findOneAndUpdate(
				{
					"comments._id": commentId,
				},
				{ $set: { "comments.$.comment": comment } },
				{ new: true }
			);
			console.log(newComment);
			res.json({
				success: true,
				response: { newComment },
				message: "Your comment had change",
			});
		} catch (error) {
			console.log(error);
			res.json({
				success: true,
				message: "Somethig went wrong, please try later",
			});
		}
	},

	deleteComment: async (req, res) => {
		const id = req.params.id;
		const user = req.user._id; //revisar
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
