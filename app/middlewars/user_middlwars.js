//model
const userModel = require('../models/__user__model');
//helper
const errorHelper = require('../helpers/error_helper');


//dependencies
const Boom = require('boom');

exports.checkUserExistance = async (request, h) => {
	try {
		// if company exist'
		let ifUserExist = await userModel.findOne({email: request.payload.email});
		if (ifUserExist) {
			return Boom.conflict('User already exist.');
		}

		return true;
	} catch (err) {
		errorHelper.handleError(err);
	}
};
