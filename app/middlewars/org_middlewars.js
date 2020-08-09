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


exports.checkInviteUserExistance = async (request, h) => {
	try {
		let inviteObject = {
			userId: request.payload.userId,
			profile: request.payload.profile,
			rols: request.payload.rols,
			status: 'Active',
		}

		let checkInviteUser = await portalModel.findOne({_id: request.query._id, portalUsers: {$in: [inviteObject]}});

		if (checkInviteUser) {
			return Boom.conflict('user invitation already sent');
		}	
		return true;
	} catch (error) {
		errorHelper.handleError(err);
	}
};