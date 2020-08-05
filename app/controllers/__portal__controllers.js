const Handlers = require('../handlers/__portal__handler');
const validators = require('../validators/__portal__validators');
// const middleware = require('../middlewars/')

// POST Contact Details
exports.createPortal = {
	tags: [ 'api' ],
	notes: 'CREATE portal Data',
	validate: {
		payload: validators.portalValidate
    },
	handler: Handlers.createPortal,
};