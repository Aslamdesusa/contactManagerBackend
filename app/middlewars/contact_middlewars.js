//model
const contactModel = require('../models/__contact__model');
//helper
const errorHelper = require('../helpers/error_helper');

//dependencies
const Boom = require('boom');

exports.checkContactExistance = async (request, h) => {
	try {
		// if company exist'
		let ifContactExist = await contactModel.findOne({contactName: request.payload.contactName});
		if (ifContactExist) {
			return Boom.conflict('Contact name already exist.');
		}

		return true;
	} catch (err) {
		errorHelper.handleError(err);
	}
};
