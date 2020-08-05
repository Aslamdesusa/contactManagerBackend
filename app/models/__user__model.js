const mongoose = require('mongoose');
require('mongoose-type-url');
const bcrypt = require('bcrypt');
const timestamps = require('mongoose-timestamp');
const SALT_WORK_FACTOR = 10;
const Email = require('mongoose-type-mail');


const schema = new mongoose.Schema(
	{
        email: {type: String, trim: true, required: true},
        password: { type: String, trim: true, required: true },
        portals: {
            type: Array, 
            default: {
                portal: { type: String, trim: true, required: true },
                access: {
                    profile: {type: String, enum: ['administrator', 'data_administator', 'standard'], default: 'administrator'},
                    rols: {type: String, trim: true},
                    status: {type: String, enum: ['Active', 'Inactive'], default: 'Active'}
                }
            },
        },
	},
	{ collection: 'users' }
);

//The User model will now have createdAt and updatedAt properties, which get automatically generated and updated when you save your document.
schema.plugin(timestamps);

/**
 * checkValidPassword user with given information
 * @param email
 * @param password
 */
schema.statics.checkValidPassword = async function(email, password) {
	return new Promise(async (resolve, reject) => {
		let user = await this.find({ email: email }).exec();
		if (user.length == 0) return reject('user does not exist');
		const doesMatch = await bcrypt.compare(password, user[0].password);
		if (doesMatch) return resolve({ _id: user[0]['_id'], username: user[0]['username'], userRole: user[0]['rols'] });
		return reject('Invalid Password');
	});
};

schema.pre('save', function(next) {
	let user = this;

	// generate a salt
	bcrypt.genSalt(SALT_WORK_FACTOR, function(err, salt) {
		if (err) return reject(err);
		// hash the password along with our new salt
		bcrypt.hash(user.password, salt, function(err, hash) {
			if (err) next(err);
			// return resolve(hash);
			user.password = hash;
			next(null);
		});
	});
});

schema.pre('updateOne', function(next) {
	let user = this;
	bcrypt.genSalt(SALT_WORK_FACTOR, function(err, salt) {
		if (err) return reject(err);
		// hash the password along with our new salt
		bcrypt.hash(user._update.$set.password, salt, function(err, hash){
			if (err) next(err);
			// return resolve(hash);
			user._update.$set.password = hash
			next(null);
		})
	})
});

schema.statics.encryptPassword = async (password) => {};

const User = mongoose.model('User', schema);
module.exports = User;