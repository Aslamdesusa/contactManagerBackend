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
            {
				method: 'POST',
				path: '/login/user',
				options: Controllers.users.user.login
            },
		]);
	},
	version: require('../../package.json').version,
	name: 'users_routes'
};
