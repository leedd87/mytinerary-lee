const joi = require("joi"); //se instala en el backend

const validator = (req, res, next) => {
	const schema = joi.object({
		email: joi.string().email({ minDomainSegments: 2 }).required().messages({
			//primera parte del dominio @ segunda parte del dominio
			"string.email": '"mail": incorrect format',
		}),
		password: joi
			.string()
			.min(8)
			.max(40)
			.pattern(new RegExp("[a-zA-Z0-9]"))
			.required()
			.messages({
				//para poder agregar mensajes
				"string.min": '"password": min 8 characters',
				"string.max": '"password": max 30 characters',
			}),
		// role: joi.string().required(),
		from: joi.string().required(),
		country: joi.string().required(),
		userName: joi.string().required(),
		userLastName: joi.string(),
		userPhoto: joi.string().required(),
	});
	const validation = schema.validate(req.body.userData, { abortEarly: false });
	if (validation.error) {
		return res.json({
			success: false,
			from: "validator",
			message: validation.error.details,
			test: validation,
		});
	}
	next();
};

module.exports = validator;
