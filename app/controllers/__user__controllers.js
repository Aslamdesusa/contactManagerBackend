const Handlers = require('../handlers/__user__handler');
const validators = require('../validators/__user_validators');
const middleware = require('../middlewars/user_middlwars')

// POST Contact Details
exports.createUser = {
	tags: [ 'api' ],
	notes: 'CREATE user Data and it portal',
	validate: {
		payload: validators.userValidate
    },
    pre: [ { method: middleware.checkUserExistance, assign: 'User' } ],
	handler: Handlers.createUser,
};