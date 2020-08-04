exports.plugin = {
	async register(server, options) {
		const Controllers = {
			contacts: {
				contact: require('../controllers/__contact__controllers')
			}
        };
        server.route([
			{
				method: 'POST',
				path: '/create/contact',
				options: Controllers.contacts.contact.createContact 
			},
		]);
	},
	version: require('../../package.json').version,
	name: 'contact_routes'
};
