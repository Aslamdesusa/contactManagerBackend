
// Joi for validation
const Joi = require('joi');

// exporting module for contact to validate it's data
module.exports = {
	userValidate: Joi.object().keys({
        email: Joi.email().required().trim().description('email addres of user'),
        password: Joi.string().required().trim().description('pass of user'),
        portals: [
            {
                portal: Joi.string().required().trim().description('portal name'),
                access: {
                    profile: Joi.string().required().trim().description('user profile'),
                    status: Joi.string().required().trim().description('status is active or inactive'),
                }
            },
        ],
    }),

    _id: Joi.object().keys({
		_id: Joi.string().required().trim().description('user _id')
    }),
};