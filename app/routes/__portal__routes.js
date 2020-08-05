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
		]);
	},
	version: require('../../package.json').version,
	name: 'portal_routes'
};
