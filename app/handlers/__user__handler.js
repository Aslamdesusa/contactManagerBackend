// ** requiring company model **
const userModel = require('../models/__user__model');
const portalModel = require('../models/__portal__model');
const config = require('config');
const Config = JSON.parse(JSON.stringify(config));

const Boom = require('boom');
const JWT = require('jsonwebtoken');
const { conflict } = require('boom');

// Creating Company Details 
exports.createUser = async (request, h) => {

	let pr = async (resolve, reject) => {
		portalModel.findOne({portalName: request.payload.portalName}).then(res=>{
			if (res) {
				return reject(Boom.conflict('Portal already exist'));
			}else{
				let new_user = new userModel(request.payload);
				new_user.save(async function(err, doc) {
					if (err) {
						return reject(Boom.forbidden(err));
					} else {
						const token = JWT.sign(
							{ exp: Math.floor(Date.now() / 1000) + 604800, data: doc._id.toJSON() },
							Config.SECRET_KEY
						);
						return resolve(h.response({ status: 'ok', doc, token: token}).code(201));
					}
				});
			}
		})
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
                        Config.SECRET_KEY
                    );
                    return resolve(h.response({ token: token, result }).code(201));   
                }
			})
			.catch((error) => {
				return reject(Boom.badGateway(error));
			});
	});
};

exports.getUserById = async (request, h) => {
	return new Promise((resolve, reject) => {
		userModel.findOne({_id: request.query._id}, async function(err, doc){
			if (err) {
				return reject(Boom.forbidden(err))
			}else{
				return resolve(h.response({status: 'ok', documents: doc}))
			}
		})
	});
};