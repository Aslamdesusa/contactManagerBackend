
// Joi for validation
const Joi = require('joi');

// exporting module for contact to validate it's data
module.exports = {
	contactValidate: Joi.object().keys({
        userId: Joi.string().required().trim().description('User Id Who Createing This contact'),
        portal: Joi.string().required().trim().description('company portal Id where this data is saving'),
        contactName: Joi.string().required().trim().description('contact name'),
        title: Joi.string().allow('', null).trim().description('title'),
        companyId: Joi.string().allow('', null).trim().description('companyId'),
        description: Joi.string().allow('', null).trim().description('Description about company'),
        tags: Joi.array().allow('', null).description('Any Tag For search this data'),
        contactInfo: {
            // contact information
            email: Joi.string().allow('', null).trim().description('contact email'),
            mobile: Joi.string().allow('', null).trim().description('contact mobile'),
            workPhone: Joi.string().allow('', null).trim().description('contact work phone'),
            homePhone: Joi.string().allow('', null).trim().description('contact homePhone')
        },
        address: {
            // mailing address
            mailingStreet: Joi.string().allow('', null).trim().description('mailing Street'),
            mailingCity: Joi.string().allow('', null).trim().description('mailing City'),
            mailingState: Joi.string().allow('', null).trim().description('mailing State'),
            mailingCountry: Joi.string().allow('', null).trim().description('mailing Country'),
            mailingZipCode: Joi.string().allow('', null).trim().description('mailing Zip Code')
        },
        avatarUrl: Joi.string().allow('', null).trim().description('Avtar Url'),
    }),

    _id: Joi.object().keys({
		_id: Joi.string().required().trim().description('company id')
    }),

    rolesQuery: Joi.object().keys({
        role: Joi.string().required().trim().description('role'),
        userId: Joi.string().required().trim().description('user Id'),
        portalName: Joi.string().required().trim().description('Portalname')
    }),
    
    tags: Joi.object().keys({
		  tags: Joi.array().description('company tags to filter data')
    }),
};