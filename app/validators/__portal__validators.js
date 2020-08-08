
// Joi for validation
const Joi = require('joi');

// exporting module for contact to validate it's data
module.exports = {
	portalValidate: Joi.object().keys({
        portalName: Joi.string().required().trim().description('portal name'),
        portalUsers: Joi.array().description('portal users array'),
        createdBy: {
            userId: Joi.string().required().trim().description('userId'),
            profile: Joi.string().required().trim().description('profile'),
            rols: Joi.string().required().trim().description('rols'),
            status: Joi.string().required().trim().description('status'),
        },
    }),

    _id: Joi.object().keys({
		_id: Joi.string().required().trim().description('user _id')
    }),

    inviteUser: Joi.object().keys({
        userId: Joi.string().required().trim().description('userId'),
        profile: Joi.string().required().trim().description('profile'),
        rols: Joi.string().required().trim().description('roles'),
    }),

    userId: Joi.object().keys({
		userId: Joi.string().required().trim().description('user _id')
    }),
};