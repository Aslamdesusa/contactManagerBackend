
// Joi for validation
const Joi = require('joi');

// exporting module
module.exports = {
	companyValidate: Joi.object().keys({
        userId: Joi.string().required().trim().description('User Id Who Createing This Company'),
        portal: Joi.string().required().trim().description('company portal Id where this data is saving'),
        companyName: Joi.string().required().trim().description('Company Name'),
        website: Joi.string().allow('', null).trim().description('Website Url'),
        description: Joi.string().allow('', null).trim().description('Description about company'),
        phone: Joi.string().allow('', null).description('Phone'),
        fax: Joi.string().allow('', null).description('fax id'),
        tags: Joi.array().allow('', null).description('Any Tag For search this data'),
        address: {
            // Billing Address
            billingAddress:{
                billingStreet: Joi.string().allow('', null).trim().description('Billing Street'),
                billingCity: Joi.string().allow('', null).trim().description('Billing City'),
                billingState: Joi.string().allow('', null).trim().description('Billing State'),
                billingCountry: Joi.string().allow('', null).trim().description('Billing Country'),
                billingZipCode: Joi.string().allow('', null).trim().description('Billing Zip Code'),
            },
            // Shipping Address
            shippingAddress:{
                shippingStreet: Joi.string().allow('', null).trim().description('Shipping Street'),
                shippingCity: Joi.string().allow('', null).trim().description('Shipping City'),
                shippingState: Joi.string().allow('', null).trim().description('Shipping State'),
                shippingCountry: Joi.string().allow('', null).trim().description('Shipping Country'),
                shippingZipCode: Joi.string().allow('', null).trim().description('Shipping Zip Code'),
            },
        },
        avatarUrl: Joi.string().allow('', null).trim().description('Avtar Url'),
    }),

    _id: Joi.object().keys({
		_id: Joi.string().required().trim().description('company id')
    }),

    tags: Joi.object().keys({
		  tags: Joi.array().description('company tags to filter data')
    }),
};