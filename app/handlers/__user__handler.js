// ** requiring company model **
const userModel = require('../models/__user__model');

const Boom = require('boom');

// Creating Company Details 
exports.createUser = async (request, h) => {
	
	let pr = async (resolve, reject) => {
		let new_user = new userModel(request.payload);
		new_user.save(async function(err, doc) {
			if (err) {
				return reject(Boom.forbidden(err));
			} else {
				return resolve(h.response({ status: 'ok', contactId: doc._id }).code(201));
			}
		});
	};
	return new Promise(pr);
};