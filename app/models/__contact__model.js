const mongoose = require('mongoose');
require('mongoose-type-url');
const timestamps = require('mongoose-timestamp');

// data model of company
const schema = new mongoose.Schema(
	{
        userId: { type: String, trim: true },
        contactName: { type: String, trim: true },
        title: { type: String, trim: true },
        companyId: { type: String, trim: true },
        description: { type: String, trim: true },
        tags: {type: Array},
        contactInfo: {
            // contact information
            email: {type: String, trim: true},
            mobile: {type: String, trim: true},
            workPhone: {type: String, trim: true},
            homePhone: {type: String, trim: true},
        },
        address: {
            // Address information
            mailingStreet: {type: String, trim: true},
            mailingCity: {type: String, trim: true},
            mailingState: {type: String, trim: true},
            mailingCountry: {type: String, trim: true},
            mailingZipCode: {type: String, trim: true},
        },
        avatarUrl: {type: String, trim: true},
	},
	{ collection: 'contacts' }
);

//The companies model will now have createdAt and updatedAt properties, which get automatically generated and updated when you save your document.
schema.plugin(timestamps);

const Contacts = mongoose.model('Contacts', schema);
module.exports = Contacts;