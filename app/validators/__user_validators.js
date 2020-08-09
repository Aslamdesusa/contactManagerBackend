
// Joi for validation
const Joi = require('joi');

// exporting module for contact to validate it's data
module.exports = {
	userValidate: Joi.object().keys({
        portalName: Joi.string().required().trim().description('portal name'),
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

    acceptInvitation: Joi.object().keys({
      portal_id: Joi.string().required().trim().description('portal _id'),
      email: Joi.string().required().trim().description('user email'),
    })
};