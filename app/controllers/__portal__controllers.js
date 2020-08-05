const Handlers = require('../handlers/__portal__handler');
const validators = require('../validators/__portal__validators');
const middleware = require('../middlewars/portal_middlewars');

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