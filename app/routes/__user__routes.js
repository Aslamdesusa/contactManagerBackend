exports.plugin = {
	async register(server, options) {
		const Controllers = {
			users: {
				user: require('../controllers/__user__controllers')
			}
        };
        server.route([
			{
				method: 'POST',
				path: '/create/user',
				options: Controllers.users.user.createUser
            },
		]);
	},
	version: require('../../package.json').version,
	name: 'users_routes'
};