
// ** requiring company model **
const portalModel = require('../models/__portal__model')

const Boom = require('boom');

// Creating Company Details 
exports.createPortal = async (request, h) => {
	
	let pr = async (resolve, reject) => {
		let new_portal = new portalModel(request.payload);
        // saving new user with portal data
        new_portal.save(async function(err, doc){
            if (err) {
                return reject(Boom.forbidden(err));
            }else{
                return resolve(h.response({ status: 'ok', doc_id: doc._id }).code(201));
            }
        })
	};
	return new Promise(pr);
};