const Handlers = require('../handlers/__company__handler');
const validators = require('../validators/__contact_validators');

// POST Contact Details
exports.createContact = {
	tags: [ 'api' ],
	notes: 'CREATE Contact Data',
	validate: {
		payload: validators.contactValidate
	},
	handler: Handlers.createContact,
};
