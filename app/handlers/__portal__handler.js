
// ** requiring company model **
const portalModel = require('../models/__portal__model')

const Boom = require('boom');

// mail module
const mail = require('../../lib/mailer')


// Creating Company Details 
exports.createPortal = async (request, h) => {
	
	let pr = async (resolve, reject) => {
		let new_portal = new portalModel(request.payload);
        // saving new user with portal data
        new_portal.save(async function(err, doc){
            if (err) {
                return reject(Boom.forbidden(err));
            }else{
                return resolve(h.response({ status: 'ok', doc }).code(201));
            }
        })
	};
	return new Promise(pr);
};

// Creating Company Details 
exports.getPortalById = async (request, h) => {
	
	let pr = async (resolve, reject) => {
        portalModel.findOne({'createdBy.userId': request.query.userId}, async function(err, doc){
            if (err) {
                return reject(Boom.forbidden(err));
            }else{
                if (doc) {
                    return resolve(h.response({ status: 'ok', doc }).code(201));
                }else{
                    portalModel.findOne({portalUsers: { $elemMatch: { userId: request.query.userId } } }, async function(err, res){
                        if (err) {
                            return reject(Boom.forbidden(err));
                        }else{
                            return resolve(h.response({ status: 'ok', res }).code(201));
                        }
                    })
                }
            }
        })
	};
	return new Promise(pr);
};

// inviting users
exports.inviteUser = async (request, h) => {

	let pr = async (resolve, reject) => {
        let userRole = {
            userId: request.payload.userId,
            profile: request.payload.profile,
            rols: request.payload.rols,
            status: 'Active',
            invitation: 'pending'
        }
        portalModel.findOneAndUpdate({_id: request.query._id}, {$push: {portalUsers: userRole}}, async function(err, doc){
            if (err) {
                return reject(Boom.forbidden(err));
            }else{
                mail(request.payload.userId, "Hey there! You've got an invite to join Zoho ContactManager", 'invite', (doc._id).toString())
                return resolve(h.response({ status: 'ok', doc }).code(201));
            }
        })
	};
	return new Promise(pr);
};

exports.removeInvitedUser = async (request, h) => {
	return new Promise((resolve, reject) =>{
        let userRole = {
            userId: request.payload.userId,
            profile: request.payload.profile,
            rols: request.payload.rols,
            status: request.payload.status,
            invitation: request.payload.invitation
        }
		portalModel.updateOne({_id: request.query._id},{$pull: {portalUsers: {$in: [userRole]}}}, async function(err, doc){
			if (err) {
				return reject(Boom.forbidden(err))
			}else{
				return resolve(h.response({status: 'ok', documents: doc}))
			}
		})
	})
};
