const Handlers = require('../handlers/__company__handler');
const validators = require('../validators/__company_validators');
const middleware = require('../middlewars/company_middlewars')

// POST Company Details
exports.createCompay = {
	tags: [ 'api' ],
	notes: 'CREATE Company Data',
	validate: {
		payload: validators.companyValidate
	},
	pre: [ { method: middleware.checkCompanyExistance, assign: 'Company' } ],
	handler: Handlers.createCompay,
};

exports.getCompanies = {
	tags: [ 'api' ],
	notes: 'GET Companies Data',
	handler: Handlers.getCompanies,
};

exports.companiesByUserRoles = {
	tags: [ 'api' ],
	notes: 'GET Companies Data by user roles',
	validate:{
		query: validators.rolesQuery
	},
	handler: Handlers.companiesByUserRoles,
};

exports.getCompanyById = {
	tags: [ 'api' ],
	notes: 'GET company Data by id',
	validate:{
		query: validators._id
	},
	handler: Handlers.getCompanyById,
};

exports.editCompanyById = {
	tags: [ 'api' ],
	notes: 'EDIT company Data by id',
	validate: {
		query: validators._id,
		payload: validators.companyValidate
	},
	handler: Handlers.editCompanyById,
};

exports.addMoreTags = {
	tags: [ 'api' ],
	notes: 'ADD company Data by id',
	validate: {
		query: validators._id,
		payload: validators.tags
	},
	handler: Handlers.addMoreTags,
};

exports.deleteTags = {
	tags: [ 'api' ],
	notes: 'DELETE company TAGS by id',
	validate: {
		query: validators._id,
		payload: validators.tags
	},
	handler: Handlers.deleteTags,
};

exports.deleteCompany = {
	tags: [ 'api' ],
	notes: 'DELETE company and its data by id',
	validate: {
		query: validators._id,
	},
	handler: Handlers.deleteCompany,
};

