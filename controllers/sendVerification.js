const nodemailer = require("nodemailer");
const { google } = require("googleapis"); //esto se instala npm i googleapis
const OAuth2 = google.auth.OAuth2;
// require("dotenv").config();

const sendVerification = async (email, string) => {
	const myOAuth2Client = new OAuth2(
		process.env.GOOGLE_CLIENT_ID,
		process.env.GOOGLE_CLIENT_SECRET,
		"https://developers.google.com/oauthplayground"
	);

	myOAuth2Client.setCredentials({
		refresh_token: process.env.GOOGLE_CLIENT_REFRESH_TOKEN,
	});

	const accessToken = myOAuth2Client.getAccessToken();

	const transporter = nodemailer.createTransport({
		// service: "gmail",
		service: "gmail",

		//secure: true,
		auth: {
			user: "leedav.dev2011@gmail.com",
			// pass: "nfbizmomkbggdbla",
			type: "OAuth2",
			clientId: process.env.GOOGLE_CLIENT_ID,
			clientSecret: process.env.GOOGLE_CLIENT_SECRET,
			refreshToken: process.env.GOOGLE_CLIENT_REFRESH_TOKEN,
			accessToken: accessToken,
		},
		tls: {
			rejectUnauthorized: false,
		},
	});

	let mailOptions = {
		from: process.env.USER,
		to: email,
		subject: "verify account MyTinerary",
		html: `
      <a href=http://localhost:4000/api/verify/${string}>Click me</a>
      <h3>to confirm!</h3>
      `,
	};

	await transporter.sendMail(mailOptions, function (error, response) {
		if (error) {
			console.log(error);
		} else {
			console.log(`check ${email} to confirm your account`);
		}
	});
};

module.exports = sendVerification;
