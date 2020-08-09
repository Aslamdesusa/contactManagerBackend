exports.plugin = {
	async register(server, options) {
		const Controllers = {
			portals: {
				portal: require('../controllers/__portal__controllers')
			}
        };
        server.route([
			{
				method: 'POST',
				path: '/create/portal',
				options: Controllers.portals.portal.createPortal
			},
			{
				method: 'GET',
				path: '/get/portal/by/user-id',
				options: Controllers.portals.portal.getPortalById
			},
			{
				method: 'PUT',
				path: '/invite/user',
				options: Controllers.portals.portal.inviteUser
			},
		]);
	},
	version: require('../../package.json').version,
	name: 'portal_routes'
};
