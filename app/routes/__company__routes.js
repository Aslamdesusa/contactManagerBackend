exports.plugin = {
	async register(server, options) {
		const Controllers = {
			compnay: {
				companies: require('../controllers/__company_controllers')
			}
        };
        server.route([
			{
				method: 'POST',
				path: '/create/company',
				options: Controllers.compnay.companies.createCompay
			},
			{
				method: 'GET',
				path: '/get/companies',
				options: Controllers.compnay.companies.getCompanies
			},
		]);
	},
	version: require('../../package.json').version,
	name: 'company_routes'
};
