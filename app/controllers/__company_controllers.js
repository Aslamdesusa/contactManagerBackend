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
