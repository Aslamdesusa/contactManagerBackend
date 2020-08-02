const Mongoose = require('mongoose');
const Glob = require('glob');
Mongoose.Promise = require('bluebird');

require('dotenv').config()


exports.plugin = {
	async register(server, options) {
		try {
			// When the connection is connected
			Mongoose.connection.on('connected', function() {
				console.log()
				server.log([ 'mongoose', 'info' ], 'Mongo Database connected');
			});

			// When the connection is disconnected
			Mongoose.connection.on('disconnected', function() {
				server.log([ 'mongoose', 'info' ], 'Mongo Database disconnected');
			});

			// If the node process ends, close the mongoose connection
			process.on('SIGINT', async () => {
				await Mongoose.connection.close();
				server.log([ 'mongoose', 'info' ], 'Mongo Database disconnected through app termination');
				process.exit(0); 
			});

			// connect to mongodb
			if (process.env.NODE_ENV === 'production') {
                console.log('This is production environment')
				const conn = await Mongoose.connect(options.productionUri, { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, useFindAndModify: false });
				server.decorate('server', 'mongoose', conn);
			}else{
				console.log('This is local environment')
				const conn = await Mongoose.connect(options.uri, { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, useFindAndModify: false });
				server.decorate('server', 'mongoose', conn);
			}

			// Load models
			const models = Glob.sync('app/models/*.js');
			models.forEach(function(model) {
				require('../' + model);
			});
		} catch (e) {
			console.log(e);
			throw e;
		}
	},
	name: 'mongoose_controller',
	version: require('../package.json').version
};