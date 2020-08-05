//model
const portalModel = require('../models/__portal__model');
//helper
const errorHelper = require('../helpers/error_helper');

//dependencies
const Boom = require('boom');

exports.checkPortalExistance = async (request, h) => {
	try {
		// if company exist'
		let ifContactExist = await portalModel.findOne({portalName: request.payload.portalName});
		if (ifContactExist) {
			return Boom.conflict('Portal already exist.');
		}

		return true;
	} catch (err) {
		errorHelper.handleError(err);
	}
};
