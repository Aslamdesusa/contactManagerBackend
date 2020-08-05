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

exports.login = {
	tags: [ 'api' ],
	notes: 'Log In',
	validate: {
		payload: validators.login
	},
	handler: Handlers.login
};

exports.getUserById = {
	tags: [ 'api' ],
	notes: 'getting user data by uniq id',
	validate: {
		query: validators._id
	},
	handler: Handlers.getUserById
};