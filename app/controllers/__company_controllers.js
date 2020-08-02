const Handlers = require('../handlers/__company__handler');
const validators = require('../validators/__company_validators');

// POST Company Details
exports.createCompay = {
	tags: [ 'api' ],
	notes: 'CREATE Company Data',
	validate: {
		payload: validators.companyValidate
	},
	handler: Handlers.createCompay
};
