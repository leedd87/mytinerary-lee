const joi = require("joi"); //se instala en el backend

const validator = (req, res, next) => {
	const schema = joi.object({
		//creamos la estructura de nuestro validador con el metodo object()
		email: joi.string().email({ minDomainSegments: 2 }).required().messages({
			"string.email": "The mail has an incorrect format",
		}),
		password: joi
			.string()
			.min(8)
			.max(40)
			.pattern(new RegExp("[a-zA-Z0-9]"))
			.required()
			.messages({
				//para poder agregar mensajes
				"string.min": "Password must have more than 8 characters",
				"string.max": "Password must have less than 40 characters",
			}),
		// role: joi.string().required(),
		from: joi.string().required(),
		country: joi.string().required(),
		userName: joi.string().required().min(5).messages({
			//para poder agregar mensajes
			"string.min": "First name must have more than 5 characters",
		}),
		userLastName: joi.string().min(2).message({
			"string.min": "Last name must have more than 2 characters",
		}),
		userPhoto: joi.string().required().min(10).message({
			"string.min": "There is something wrong with your photo URL",
		}),
	});

	const validation = schema.validate(req.body.userData, { abortEarly: false }); //valida la el cuerpo del userData y el abortEarly realiza todas las validaciones
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
