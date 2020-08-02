'use strict';
const Glue = require('glue');
const serverConfig = require('../config/manifest'); 

// this is the line we mention in manifest.js
// relativeTo parameter should be defined here
const options = { relativeTo: __dirname };

const startServer = async function() {
	try {
		const server = await Glue.compose(serverConfig.manifest, options);

		server.route({
			method: 'GET',
			path: '/',
			handler: (request, h) => {
	
				return 'Hello World!';
			}
		});

		await server.start();

		console.log(`Server listening on ${server.info.uri}`);
	} catch (err) {
		console.error(err);
		process.exit(1);
	}
};

startServer();