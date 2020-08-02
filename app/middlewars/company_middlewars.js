//model
const companyModel = require('../models/__compay__model');
//helper
const errorHelper = require('../helpers/error_helper');

//dependencies
const Boom = require('boom');

exports.checkCompanyExistance = async (request, h) => {
	try {
		// if company exist'
		let ifCompanyExist = await companyModel.findOne({companyName: request.payload.companyName});
		if (ifCompanyExist) {
			return Boom.conflict('Company name already exist.');
		}

		return true;
	} catch (err) {
		errorHelper.handleError(err);
	}
};
