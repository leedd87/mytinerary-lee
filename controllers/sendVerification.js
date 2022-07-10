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
		service: "gmail",

		//secure: true,
		auth: {
			user: "leedav.dev2011@gmail.com",
			//process.env.USER_MAIL, //probar si anda

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
		html: `<!DOCTYPE HTML PUBLIC "-//W3C//DTD XHTML 1.0 Transitional //EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
		<html xmlns="http://www.w3.org/1999/xhtml" xmlns:v="urn:schemas-microsoft-com:vml" xmlns:o="urn:schemas-microsoft-com:office:office">
		<head>
		<!--[if gte mso 9]>
		<xml>
		  <o:OfficeDocumentSettings>
			 <o:AllowPNG/>
			 <o:PixelsPerInch>96</o:PixelsPerInch>
		  </o:OfficeDocumentSettings>
		</xml>
		<![endif]-->
		  <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
		  <meta name="viewport" content="width=device-width, initial-scale=1.0">
		  <meta name="x-apple-disable-message-reformatting">
		  <!--[if !mso]><!--><meta http-equiv="X-UA-Compatible" content="IE=edge"><!--<![endif]-->
		  <title></title>
		  
			 <style type="text/css">
				@media only screen and (min-width: 620px) {
		  .u-row {
			 width: 600px !important;
		  }
		  .u-row .u-col {
			 vertical-align: top;
		  }
		
		  .u-row .u-col-100 {
			 width: 600px !important;
		  }
		
		}
		
		@media (max-width: 620px) {
		  .u-row-container {
			 max-width: 100% !important;
			 padding-left: 0px !important;
			 padding-right: 0px !important;
		  }
		  .u-row .u-col {
			 min-width: 320px !important;
			 max-width: 100% !important;
			 display: block !important;
		  }
		  .u-row {
			 width: calc(100% - 40px) !important;
		  }
		  .u-col {
			 width: 100% !important;
		  }
		  .u-col > div {
			 margin: 0 auto;
		  }
		}
		body {
		  margin: 0;
		  padding: 0;
		}
		
		table,
		tr,
		td {
		  vertical-align: top;
		  border-collapse: collapse;
		}
		
		p {
		  margin: 0;
		}
		
		.ie-container table,
		.mso-container table {
		  table-layout: fixed;
		}
		
		* {
		  line-height: inherit;
		}
		
		a[x-apple-data-detectors='true'] {
		  color: inherit !important;
		  text-decoration: none !important;
		}
		
		table, td { color: #000000; } a { color: #0000ee; text-decoration: underline; }
			 </style>
		  
		  
		
		<!--[if !mso]><!--><link href="https://fonts.googleapis.com/css?family=Cabin:400,700&display=swap" rel="stylesheet" type="text/css"><!--<![endif]-->
		
		</head>
		
		<body class="clean-body u_body" style="margin: 0;padding: 0;-webkit-text-size-adjust: 100%;background-color: transparent;color: #000000">
		  <!--[if IE]><div class="ie-container"><![endif]-->
		  <!--[if mso]><div class="mso-container"><![endif]-->
		  <table style="border-collapse: collapse;table-layout: fixed;border-spacing: 0;mso-table-lspace: 0pt;mso-table-rspace: 0pt;vertical-align: top;min-width: 320px;Margin: 0 auto;background-color: transparent;width:100%" cellpadding="0" cellspacing="0">
		  <tbody>
		  <tr style="vertical-align: top">
			 <td style="word-break: break-word;border-collapse: collapse !important;vertical-align: top">
			 <!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td align="center" style="background-color: transparent;"><![endif]-->
			 
		
		<div class="u-row-container" style="padding: 0px;background-color: transparent">
		  <div class="u-row" style="Margin: 0 auto;min-width: 320px;max-width: 600px;overflow-wrap: break-word;word-wrap: break-word;word-break: break-word;background-color: transparent;">
			 <div style="border-collapse: collapse;display: table;width: 100%;background-color: transparent;">
				<!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding: 0px;background-color: transparent;" align="center"><table cellpadding="0" cellspacing="0" border="0" style="width:600px;"><tr style="background-color: transparent;"><![endif]-->
				
		<!--[if (mso)|(IE)]><td align="center" width="600" style="background-color: #f05454;width: 600px;padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;" valign="top"><![endif]-->
		<div class="u-col u-col-100" style="max-width: 320px;min-width: 600px;display: table-cell;vertical-align: top;">
		  <div style="background-color: #f05454;width: 100% !important;">
		  <!--[if (!mso)&(!IE)]><!--><div style="padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;"><!--<![endif]-->
		  
		<table style="font-family:arial,helvetica,sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
		  <tbody>
			 <tr>
				<td style="overflow-wrap:break-word;word-break:break-word;padding:10px;font-family:arial,helvetica,sans-serif;" align="left">
				  
		  <div style="color: #f5f5f5; line-height: 140%; text-align: left; word-wrap: break-word;">
			 <p style="font-size: 14px; line-height: 140%; text-align: center;">DISCOVER KOREA WITH US</p>
		  </div>
		
				</td>
			 </tr>
		  </tbody>
		</table>
		
		  <!--[if (!mso)&(!IE)]><!--></div><!--<![endif]-->
		  </div>
		</div>
		<!--[if (mso)|(IE)]></td><![endif]-->
				<!--[if (mso)|(IE)]></tr></table></td></tr></table><![endif]-->
			 </div>
		  </div>
		</div>
		
		
		
		<div class="u-row-container" style="padding: 0px;background-color: transparent">
		  <div class="u-row" style="Margin: 0 auto;min-width: 320px;max-width: 600px;overflow-wrap: break-word;word-wrap: break-word;word-break: break-word;background-color: transparent;">
			 <div style="border-collapse: collapse;display: table;width: 100%;background-color: transparent;">
				<!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding: 0px;background-color: transparent;" align="center"><table cellpadding="0" cellspacing="0" border="0" style="width:600px;"><tr style="background-color: transparent;"><![endif]-->
				
		<!--[if (mso)|(IE)]><td align="center" width="600" style="background-color: #f05454;width: 600px;padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;" valign="top"><![endif]-->
		<div class="u-col u-col-100" style="max-width: 320px;min-width: 600px;display: table-cell;vertical-align: top;">
		  <div style="background-color: #f05454;width: 100% !important;">
		  <!--[if (!mso)&(!IE)]><!--><div style="padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;"><!--<![endif]-->
		  
		<table style="font-family:arial,helvetica,sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
		  <tbody>
			 <tr>
				<td style="overflow-wrap:break-word;word-break:break-word;padding:0px;font-family:arial,helvetica,sans-serif;" align="left">
				  
		<table width="100%" cellpadding="0" cellspacing="0" border="0">
		  <tr>
			 <td style="padding-right: 0px;padding-left: 0px;" align="center">
				<a href="" target="_blank">
				<img align="center" border="0" src="https://dailytravelpill.com/wp-content/uploads/2020/07/explore-south-korea-page-cover-1440x480.jpg" alt="Hero Image" title="Hero Image" style="outline: none;text-decoration: none;-ms-interpolation-mode: bicubic;clear: both;display: inline-block !important;border: none;height: auto;float: none;width: 100%;max-width: 600px;" width="600"/>
				</a>
			 </td>
		  </tr>
		</table>
		
				</td>
			 </tr>
		  </tbody>
		</table>
		
		  <!--[if (!mso)&(!IE)]><!--></div><!--<![endif]-->
		  </div>
		</div>
		<!--[if (mso)|(IE)]></td><![endif]-->
				<!--[if (mso)|(IE)]></tr></table></td></tr></table><![endif]-->
			 </div>
		  </div>
		</div>
		
		
		
		<div class="u-row-container" style="padding: 0px;background-color: transparent">
		  <div class="u-row" style="Margin: 0 auto;min-width: 320px;max-width: 600px;overflow-wrap: break-word;word-wrap: break-word;word-break: break-word;background-color: #ffffff;">
			 <div style="border-collapse: collapse;display: table;width: 100%;background-color: transparent;">
				<!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding: 0px;background-color: transparent;" align="center"><table cellpadding="0" cellspacing="0" border="0" style="width:600px;"><tr style="background-color: #ffffff;"><![endif]-->
				
		<!--[if (mso)|(IE)]><td align="center" width="600" style="background-color: #f05454;width: 600px;padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;" valign="top"><![endif]-->
		<div class="u-col u-col-100" style="max-width: 320px;min-width: 600px;display: table-cell;vertical-align: top;">
		  <div style="background-color: #f05454;width: 100% !important;">
		  <!--[if (!mso)&(!IE)]><!--><div style="padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;"><!--<![endif]-->
		  
		<table style="font-family:arial,helvetica,sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
		  <tbody>
			 <tr>
				<td style="overflow-wrap:break-word;word-break:break-word;padding:25px 10px 10px;font-family:arial,helvetica,sans-serif;" align="left">
				  
		  <div style="color: #f5f5f5; line-height: 140%; text-align: center; word-wrap: break-word;">
			 <p style="font-size: 14px; line-height: 140%;"><span style="font-family: Cabin, sans-serif; font-size: 26px; line-height: 36.4px;"><strong>MyTinerary</strong></span></p>
		  </div>
		
				</td>
			 </tr>
		  </tbody>
		</table>
		
		<table style="font-family:arial,helvetica,sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
		  <tbody>
			 <tr>
				<td style="overflow-wrap:break-word;word-break:break-word;padding:10px 40px;font-family:arial,helvetica,sans-serif;" align="left">
				  
		  <div style="color: #f5f5f5; line-height: 160%; text-align: center; word-wrap: break-word;">
			 <p style="font-size: 14px; line-height: 160%;">Find your perfect trip, designed by insiders who know and love their cities!</p>
		  </div>
		
				</td>
			 </tr>
		  </tbody>
		</table>
		
		  <!--[if (!mso)&(!IE)]><!--></div><!--<![endif]-->
		  </div>
		</div>
		<!--[if (mso)|(IE)]></td><![endif]-->
				<!--[if (mso)|(IE)]></tr></table></td></tr></table><![endif]-->
			 </div>
		  </div>
		</div>
		
		
		
		<div class="u-row-container" style="padding: 0px;background-color: transparent">
		  <div class="u-row" style="Margin: 0 auto;min-width: 320px;max-width: 600px;overflow-wrap: break-word;word-wrap: break-word;word-break: break-word;background-color: transparent;">
			 <div style="border-collapse: collapse;display: table;width: 100%;background-color: transparent;">
				<!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding: 0px;background-color: transparent;" align="center"><table cellpadding="0" cellspacing="0" border="0" style="width:600px;"><tr style="background-color: transparent;"><![endif]-->
				
		<!--[if (mso)|(IE)]><td align="center" width="600" style="background-color: #f05454;width: 600px;padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;border-radius: 0px;-webkit-border-radius: 0px; -moz-border-radius: 0px;" valign="top"><![endif]-->
		<div class="u-col u-col-100" style="max-width: 320px;min-width: 600px;display: table-cell;vertical-align: top;">
		  <div style="background-color: #f05454;width: 100% !important;border-radius: 0px;-webkit-border-radius: 0px; -moz-border-radius: 0px;">
		  <!--[if (!mso)&(!IE)]><!--><div style="padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;border-radius: 0px;-webkit-border-radius: 0px; -moz-border-radius: 0px;"><!--<![endif]-->
		  
		<table style="font-family:arial,helvetica,sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
		  <tbody>
			 <tr>
				<td style="overflow-wrap:break-word;word-break:break-word;padding:10px;font-family:arial,helvetica,sans-serif;" align="left">
				  
		<div align="center">
		  <!--[if mso]><table width="100%" cellpadding="0" cellspacing="0" border="0" style="border-spacing: 0; border-collapse: collapse; mso-table-lspace:0pt; mso-table-rspace:0pt;font-family:arial,helvetica,sans-serif;"><tr><td style="font-family:arial,helvetica,sans-serif;" align="center"><v:roundrect xmlns:v="urn:schemas-microsoft-com:vml" xmlns:w="urn:schemas-microsoft-com:office:word" href="" style="height:37px; v-text-anchor:middle; width:98px;" arcsize="11%" stroke="f" fillcolor="#f5f5f5"><w:anchorlock/><center style="color:#000000;font-family:arial,helvetica,sans-serif;"><![endif]-->
			 <a href="https://mytinerary-lee-backend.herokuapp.com/api/verify/${string}" target="_blank" style="box-sizing: border-box;display: inline-block;font-family:arial,helvetica,sans-serif;text-decoration: none;-webkit-text-size-adjust: none;text-align: center;color: #000000; background-color: #f5f5f5; border-radius: 4px;-webkit-border-radius: 4px; -moz-border-radius: 4px; width:auto; max-width:100%; overflow-wrap: break-word; word-break: break-word; word-wrap:break-word; mso-border-alt: none;">
				<span style="display:block;padding:10px 20px;line-height:120%;"><span style="font-size: 14px; line-height: 16.8px;">Click me!</span></span>
			 </a>
		  <!--[if mso]></center></v:roundrect></td></tr></table><![endif]-->
		</div>
		
				</td>
			 </tr>
		  </tbody>
		</table>
		
		  <!--[if (!mso)&(!IE)]><!--></div><!--<![endif]-->
		  </div>
		</div>
		<!--[if (mso)|(IE)]></td><![endif]-->
				<!--[if (mso)|(IE)]></tr></table></td></tr></table><![endif]-->
			 </div>
		  </div>
		</div>
		
		
			 <!--[if (mso)|(IE)]></td></tr></table><![endif]-->
			 </td>
		  </tr>
		  </tbody>
		  </table>
		  <!--[if mso]></div><![endif]-->
		  <!--[if IE]></div><![endif]-->
		</body>
		
		</html>
		
		


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
