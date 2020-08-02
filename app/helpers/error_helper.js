'use strict';
let Boom = require('boom');

exports.handleError = (err) => {
	console.log(err, 'new error');
	if (err.isBoom) {
		throw err;
	} else {
		console.log(err);
		throw Boom.badImplementation(err);
	}
};