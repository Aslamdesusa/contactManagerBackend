const Handlers = require('../handlers/__contact__handler');
const validators = require('../validators/__contact_validators');
const middleware = require('../middlewars/contact_middlewars')

var options = {
	swaggerOptions: {
	  authAction :{ JWT: {name: "JWT", schema: {type: "apiKey", in: "header", name: "Authorization", description: ""}, value: "Bearer <JWT>"} }
	}
  };

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
	auth: 'jwt',
	tags: [ 'api' ],
	notes: 'GET contacts Data',
	handler: Handlers.getContacts,
};

exports.contactsByUserRoles = {
	tags: [ 'api' ],
	notes: 'GET contacts Data by user roles',
	validate:{
		query: validators.rolesQuery
	},
	handler: Handlers.contactsByUserRoles,
};

exports.getContactById = {
	tags: [ 'api' ],
	notes: 'GET contact Data by id',
	validate:{
		query: validators._id
	},
	handler: Handlers.getContactById,
};

exports.editContactById = {
	tags: [ 'api' ],
	notes: 'EDIT contact Data by id',
	validate: {
		query: validators._id,
		payload: validators.contactValidate
	},
	handler: Handlers.editContactById,
};

exports.addMoreTags = {
	tags: [ 'api' ],
	notes: 'ADD contact Data by id',
	validate: {
		query: validators._id,
		payload: validators.tags
	},
	handler: Handlers.addMoreTags,
};

exports.deleteTags = {
	tags: [ 'api' ],
	notes: 'DELETE contact TAGS by id',
	validate: {
		query: validators._id,
		payload: validators.tags
	},
	handler: Handlers.deleteTags,
};

exports.deleteContact = {
	tags: [ 'api' ],
	notes: 'DELETE contact and its data by id',
	validate: {
		query: validators._id,
	},
	handler: Handlers.deleteContact,
};