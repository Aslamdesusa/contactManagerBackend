// ** requiring company model **
const userModel = require('../models/__user__model');

const Boom = require('boom');
const JWT = require('jsonwebtoken');

// Creating Company Details 
exports.createUser = async (request, h) => {
	
	let pr = async (resolve, reject) => {
		let new_user = new userModel(request.payload);
		new_user.save(async function(err, doc) {
			if (err) {
				return reject(Boom.forbidden(err));
			} else {
				return resolve(h.response({ status: 'ok', user_id: doc._id }).code(201));
			}
		});
	};
	return new Promise(pr);
};

exports.login = async (request, h) => {
	return new Promise((resolve, reject) => {
		userModel.checkValidPassword(request.payload.email, request.payload.password)
			.then((result) => {
                if (result) {
                    const token = JWT.sign(
                        { exp: Math.floor(Date.now() / 1000) + 604800, data: result['_id'].toJSON() },
                        process.env.SECRET_KEY
                    );
                    return resolve(h.response({ token: token, result }).code(201));   
                }
			})
			.catch((error) => {
				return reject(Boom.badGateway(error));
			});
	});
};