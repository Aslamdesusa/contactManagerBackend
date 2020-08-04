const Handlers = require('../handlers/__contact__handler');
const validators = require('../validators/__contact_validators');
const middleware = require('../middlewars/contact_middlewars')

// POST Contact Details
exports.createContact = {
	tags: [ 'api' ],
	notes: 'CREATE contact Data',
	validate: {
		payload: validators.contactValidate
    },
    pre: [ { method: middleware.checkContactExistance, assign: 'Contact' } ],
	handler: Handlers.createContact,
};

exports.getContacts = {
	tags: [ 'api' ],
	notes: 'GET contacts Data',
	handler: Handlers.getContacts,
};