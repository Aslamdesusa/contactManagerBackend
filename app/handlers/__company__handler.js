// ** requiring company model **
const companyModel = require('../models/__compay__model');

const Boom = require('boom');

// Creating Company Details 
exports.createCompay = async (request, h) => {
	let pr = async (resolve, reject) => {
		let new_company = new companyModel(request.payload);
		new_company.save(async function(err, doc) {
			if (err) {
				return reject(Boom.forbidden(err));
			} else {
				return resolve(h.response({ status: 'ok', companyId: doc._id }).code(201));
			}
		});
	};
	return new Promise(pr);
};


exports.getCompanies = async (request, h) => {
	return new Promise((resolve, reject) =>{
		companyModel.find(async function(err, doc){
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
		companyModel.findOne({_id: request.query._id}, async function(err, doc){
			if (err) {
				return reject(Boom.forbidden(err))
			}else{
				return resolve(h.response({status: 'ok', documents: doc}))
			}
		})
	})
};

exports.editCompanyById = async (request, h) => {
	return new Promise((resolve, reject) =>{
		let updateCompany = { 
            $set : request.payload
		};
		companyModel.findOneAndUpdate({_id: request.query._id},updateCompany, async function(err, doc){
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
		companyModel.findOneAndUpdate({_id: request.query._id},{$push: {tags: request.payload.tags}}, async function(err, doc){
			if (err) {
				return reject(Boom.forbidden(err))
			}else{
				return resolve(h.response({status: 'ok', documents: doc}))
			}
		})
	})
};


