const Handlers = require('../handlers/__contact__handler');
const validators = require('../validators/__contact_validators');

// POST Contact Details
exports.createContact = {
	tags: [ 'api' ],
	notes: 'CREATE contact Data',
	validate: {
		payload: validators.contactValidate
	},
	handler: Handlers.createContact,
};

// exports.getContact = {
// 	tags: [ 'api' ],
// 	notes: 'GET Companies Data',
// 	handler: Handlers.getCompanies,
// };