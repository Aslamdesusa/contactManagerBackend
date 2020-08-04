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
            {
				method: 'GET',
				path: '/get/contacts',
				options: Controllers.contacts.contact.getContacts
			},
		]);
	},
	version: require('../../package.json').version,
	name: 'contact_routes'
};
