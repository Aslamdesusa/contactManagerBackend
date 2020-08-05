const Handlers = require('../handlers/__user__handler');
const validators = require('../validators/__user_validators');

// POST Contact Details
exports.createUser = {
	tags: [ 'api' ],
	notes: 'CREATE user Data and it portal',
	validate: {
		payload: validators.userValidate
    },
	handler: Handlers.createUser,
};