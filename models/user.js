const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
	userName: { type: String, required: true },
	userLastName: { type: String, required: true },
	email: { type: String, required: true },
	userPhoto: { type: String, required: true },
	country: { type: String, required: true },
	password: [{ type: String, required: true }],
	from: { type: Array, required: true }, //de donde proviene la info
	uniqueString: { type: String, required: true }, //clave unica y aletoria
	verification: { type: Boolean, required: true },
});

const User = mongoose.model("users", userSchema);

module.exports = User;
