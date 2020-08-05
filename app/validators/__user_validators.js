
// Joi for validation
const Joi = require('joi');

// exporting module for contact to validate it's data
module.exports = {
	userValidate: Joi.object().keys({
        email: Joi.string().required().trim().description('email addres of user'),
        password: Joi.string().required().trim().description('pass of user'),
    }),

    login: Joi.object().keys({
		email: Joi.string().required().trim().description('email addres of user'),
        password: Joi.string().required().trim().description('pass of user'),
    }),

    _id: Joi.object().keys({
		_id: Joi.string().required().trim().description('user _id')
    }),
};