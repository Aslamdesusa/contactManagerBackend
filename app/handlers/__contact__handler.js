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

exports.contactsByUserRoles = async (request, h) => {
	return new Promise((resolve, reject) =>{
		if (request.query.role === 'administrator' || request.query.role === 'data_administator') {
			contactModel.find({portal: request.query.portalName}, async function(err, doc){
				if (err) {
					return reject(Boom.forbidden(err))
				}else{
					return resolve(h.response({status: 'ok', documents: doc}))
				}
			})
		}else if (request.query.role === 'standard') {
			contactModel.find({userId: request.query.userId}, async function(err, contacts){
				if (err) {
					return reject(Boom.forbidden(err))
				}else{
					return resolve(h.response({status: 'ok', documents: contacts}))
				}
			})
		}
	})
};


exports.getContactById = async (request, h) => {
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

exports.editContactById = async (request, h) => {
	return new Promise((resolve, reject) =>{
		let updateContact = { 
            $set : request.payload
		};
		contactModel.updateOne({_id: request.query._id},updateContact, async function(err, doc){
			if (err) {
				return reject(Boom.forbidden(err))
			}else{
				return resolve(h.response({status: 'ok', documents: doc}))
			}
		})
	})
};

exports.addMoreTags = async (request, h) => {
	return new Promise((resolve, reject) =>{
		contactModel.findOneAndUpdate({_id: request.query._id},{$push: {tags: request.payload.tags}}, async function(err, doc){
			if (err) {
				return reject(Boom.forbidden(err))
			}else{
				return resolve(h.response({status: 'ok', documents: doc}))
			}
		})
	})
};

exports.deleteTags = async (request, h) => {
	return new Promise((resolve, reject) =>{
		contactModel.updateOne({_id: request.query._id},{$pull: {tags: {$in: request.payload.tags}}}, async function(err, doc){
			if (err) {
				return reject(Boom.forbidden(err))
			}else{
				return resolve(h.response({status: 'ok', documents: doc}))
			}
		})
	})
};

exports.deleteContact = async (request, h) => {
	return new Promise((resolve, reject) =>{
		contactModel.deleteOne({_id: request.query._id}, async function(err, doc){
			if (err) {
				return reject(Boom.forbidden(err))
			}else{
				return resolve(h.response({status: 'ok', documents: doc}))
			}
		})
	})
};
