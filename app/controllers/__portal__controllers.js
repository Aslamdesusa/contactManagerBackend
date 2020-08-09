const Handlers = require('../handlers/__portal__handler');
const validators = require('../validators/__portal__validators');
const middleware = require('../middlewars/org_middlewars');

// POST Portal Details
exports.createPortal = {
	tags: [ 'api' ],
	notes: 'CREATE portal Data',
	validate: {
		payload: validators.portalValidate
	},
	pre: [ { method: middleware.checkPortalExistance, assign: 'Portals' } ],
	handler: Handlers.createPortal,
};

exports.getPortalById = {
	tags: [ 'api' ],
	notes: 'Portal By Id',
	validate: {
		query: validators.userId
	},
	handler: Handlers.getPortalById
};

exports.inviteUser = {
	tags: [ 'api' ],
	notes: 'Invite User',
	validate: {
		query: validators._id,
		payload: validators.inviteUser
	},
	pre: [ { method: middleware.checkInviteUserExistance, assign: 'InviteUser' } ],
	handler: Handlers.inviteUser
};

exports.removeInvitedUser = {
	tags: [ 'api' ],
	notes: 'removing invited users',
	validate: {
		query: validators._id,
		payload: validators.deleteUser
	},
	handler: Handlers.removeInvitedUser
};