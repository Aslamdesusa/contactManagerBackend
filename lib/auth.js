const config = require('config');
const Config = JSON.parse(JSON.stringify(config));

exports.plugin = {
	async register(server, options) {
		try {
			// validation function
			const validate = async (user, decoded, request) => {
				return new Promise((resolve, reject)=>{
					if (!user) {
						return reject({isValid: false})
					}else{
						return resolve({isValid: true})
					}
				})
            };
			//normal jwt authentication plugin
			await server.register(require('hapi-auth-jwt2'));

			server.auth.strategy('jwt', 'jwt', {
				key: Config.SECRET_KEY,
				validate: validate,
				verifyOptions: { algorithms: [ 'HS256' ] }
			});
		} catch (e) {
			console.log(e);
			throw e;
		}
	},
	name: 'auth',
	version: require('../package.json').version
};