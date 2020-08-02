// ** requiring company model **
const companyModel = require('../models/__compay__model');

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


