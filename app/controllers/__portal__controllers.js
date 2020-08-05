const Handlers = require('../handlers/__portal__handler');
const validators = require('../validators/__portal__validators');
const middleware = require('../middlewars/user_middlwars');

// POST Portal Details
exports.createPortal = {
	tags: [ 'api' ],
	notes: 'CREATE portal Data',
	validate: {
		payload: validators.portalValidate
	},
	pre: [ { method: middleware.checkUserExistance, assign: 'Portals' } ],
	handler: Handlers.createPortal,
};