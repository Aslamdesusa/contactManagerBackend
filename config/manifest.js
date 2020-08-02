const config = require('config');
const Config = JSON.parse(JSON.stringify(config));
const Pack = require('../package.json');

// const plugins = [
// 	{
//         plugin: 'hapi-swagger',
//         options: {
// 			info: {
// 				title: 'API Documentation',
// 				version: '1'
// 			}
// 		}
//     },
// ];

exports.manifest = {
	server: {
		routes: {
			security: {
				hsts: false,
				xss: true,
				noOpen: true,
				noSniff: true,
				xframe: false
			},
			cors: true,
			jsonp: 'callback'
		},
		debug: Config.debug,
		port: Config.port
	},
	// register: {
	// 	plugins
	// }
};