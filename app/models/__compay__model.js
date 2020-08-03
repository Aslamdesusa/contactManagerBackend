const mongoose = require('mongoose');
require('mongoose-type-url');
const timestamps = require('mongoose-timestamp');
const { string } = require('joi');

// data model of company
const schema = new mongoose.Schema(
	{
        userId: { type: String, trim: true },
        companyName: { type: String, trim: true },
        website: { type: String, trim: true },
        description: { type: String, trim: true },
        phone: { type: String, trim: true },
        fax: { type: String, trim: true },
        tags: {type: Array},
        address: {
            // Billing Address
            billingAddress:{
                billingStreet: {type: String, trim: true},
                billingCity: {type: String, trim: true},
                billingState: {type: String, trim: true},
                billingCountry: {type: String, trim: true},
                billingZipCode: {type: String, trim: true}
            },
            // Shipping Address
            shippingAddress:{
                shippingStreet: {type: String, trim: true},
                shippingCity: {type: String, trim: true},
                shippingState: {type: String, trim: true},
                shippingCountry: {type: String, trim: true},
                shippingZipCode: {type: String, trim: true}
            }
        },
        avatarUrl: {type: String, trim: true},
        customFields: {type: Array}
	},
	{ collection: 'companies' }
);

//The companies model will now have createdAt and updatedAt properties, which get automatically generated and updated when you save your document.
schema.plugin(timestamps);

const Company = mongoose.model('company', schema);
module.exports = Company;