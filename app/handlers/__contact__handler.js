// ** requiring company model **
const contactModel = require('../models/__contact__model');

const Boom = require('boom');

// Creating Company Details 
exports.createContact = async (request, h) => {
	let pr = async (resolve, reject) => {
		let new_contact = new contactModel(request.payload);
		new_contact.save(async function(err, doc) {
			if (err) {
				return reject(Boom.forbidden(err));
			} else {
				return resolve(h.response({ status: 'ok', contactId: doc._id }).code(201));
			}
		});
	};
	return new Promise(pr);
};

exports.getContacts = async (request, h) => {
	return new Promise((resolve, reject) =>{
		contactModel.find(async function(err, doc){
			if (err) {
				return reject(Boom.forbidden(err))
			}else{
				return resolve(h.response({status: 'ok', documents: doc}))
			}
		})
	})
};

exports.getCompanyById = async (request, h) => {
	return new Promise((resolve, reject) =>{
		contactModel.findOne({_id: request.query._id}, async function(err, doc){
			if (err) {
				return reject(Boom.forbidden(err))
			}else{
				return resolve(h.response({status: 'ok', documents: doc}))
			}
		})
	})
};