const config = require('config');
const Config = JSON.parse(JSON.stringify(config));
const Pack = require('../package.json');

const plugins = [
    {
		plugin: '../lib/mongoose',
		options: {
			uri: Config.mongo,
			productionUri: Config.productionMongoDB
		}
	},
	{
		plugin: '@hapi/inert',
	},
	{
		plugin: '@hapi/vision',
	},
	{
        plugin: 'hapi-swagger',
        options: {
			info: {
				title: 'API Documentation',
				version: '1'
			}
		}
    },
	{
		plugin: '../app/routes/__company__routes',
		routes: {
			prefix: '/company/api/v1'
		}
	},
];

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
		port: process.env.PORT || Config.port
	},
	register: {
		plugins
	}
};