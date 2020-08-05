const mongoose = require('mongoose');
require('mongoose-type-url');
const timestamps = require('mongoose-timestamp');

// data model of company
const schema = new mongoose.Schema(
	{
        portalName: {type: String, trim: true},
        portalUsers: {type: Array},
        createdBy: {
            userId: {type: String},
            profile: {type: String, enum: ['administrator', 'data_administator', 'standard'], default: 'administrator'},
            rols: {type: String, trim: true, default: 'CEO'},
            status: {type: String, enum: ['Active', 'Inactive'], default: 'Active'}
        }
	},
	{ collection: 'portals' }
);

//The companies model will now have createdAt and updatedAt properties, which get automatically generated and updated when you save your document.
schema.plugin(timestamps);

const Portal = mongoose.model('Portal', schema);
module.exports = Portal;