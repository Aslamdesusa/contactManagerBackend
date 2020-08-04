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
            {
				method: 'GET',
				path: '/get/contact/by/id',
				options: Controllers.contacts.contact.getContactById
            },
            {
				method: 'PUT',
				path: '/edit/contact/by/id',
				options: Controllers.contacts.contact.editContactById
            },
            {
				method: 'PUT',
				path: '/add/tags',
				options: Controllers.contacts.contact.addMoreTags
            },
            {
				method: 'PUT',
				path: '/delete/tags',
				options: Controllers.contacts.contact.deleteTags
            },
            {
				method: 'DELETE',
				path: '/delete/contact',
				options: Controllers.contacts.contact.deleteContact
			},
		]);
	},
	version: require('../../package.json').version,
	name: 'contact_routes'
};
