
// Joi for validation
const Joi = require('joi');

// exporting module
module.exports = {
	companyValidate: Joi.object().keys({
        userId: Joi.string().required().trim().description('User Id Who Createing This Company '),
        companyName: Joi.string().required().trim().description('Company Name'),
        website: Joi.string().allow('', null).trim().description('Website Url'),
        description: Joi.string().allow('', null).trim().description('Description about company'),
        phone: Joi.number().allow('', null).description('Phone'),
        fax: Joi.number().allow('', null).description('fax id'),
        tags: Joi.string().allow('', null).trim().description('Any Tag For search this data'),
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
    })
};