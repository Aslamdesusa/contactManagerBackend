const mongoose = require('mongoose');
require('mongoose-type-url');
const timestamps = require('mongoose-timestamp');

// data model of company
const schema = new mongoose.Schema(
	{
        userId: { type: String, trim: true },
        companyName: { type: String, trim: true },
        website: { type: String, trim: true },
        description: { type: String, trim: true },
        phone: { type: Number, trim: true },
        fax: { type: Number, trim: true },
        tags: {type: String, trim: true},
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
            ShippingAddress:{
                ShippingStreet: {type: String, trim: true},
                ShippingCity: {type: String, trim: true},
                ShippingState: {type: String, trim: true},
                ShippingCountry: {type: String, trim: true},
                ShippingZipCode: {type: String, trim: true}
            }
        },
        AvatarUrl: {type: String, trim: true},
        CustomFields: {type: Array}
	},
	{ collection: 'companies' }
);

//The companies model will now have createdAt and updatedAt properties, which get automatically generated and updated when you save your document.
schema.plugin(timestamps);

const Company = mongoose.model('company', schema);
module.exports = Company;