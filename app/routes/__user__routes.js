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
			{
				method: 'GET',
				path: '/user/single/user',
				options: Controllers.users.user.getUserById
			},
		]);
	},
	version: require('../../package.json').version,
	name: 'users_routes'
};
