//model
const userModel = require('../models/__user__model');
// const portalModel = require('../models/__portal__model')
//helper
const errorHelper = require('../helpers/error_helper');


//dependencies
const Boom = require('boom');

exports.checkUserExistance = async (request, h) => {
	try {
		// if company exist'
		let ifUserExist = await userModel.findOne({email: request.payload.email});
		// let ifPortalExist = await portalModel.findOne({portalName: request.payload.portalName});

		if (ifUserExist) {
			return Boom.conflict('User already exist.');
		}

		// if (ifPortalExist) {
		// 	return Boom.conflict('Portal already exist.');
		// }
		return true;
	} catch (err) {
		errorHelper.handleError(err);
	}
};
