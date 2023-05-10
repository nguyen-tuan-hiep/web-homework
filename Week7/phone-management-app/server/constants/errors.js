module.exports = Object.freeze({
    VALIDATION_ERROR: {name: 'ValidationError', status: 400, message: 'Validation Error'},
    CAST_ERROR: {name: 'CastError', status: 400, message: 'Cast Error, Invalid Value'},
    INTERNAL_SERVER_ERROR: {name: 'InternalServerError', status: 500, message: 'Internal Server Error'},
    SUCCESS: {name: 'Success', status: 200, message: 'Successfully'},
    NOT_FOUND: {name: 'NotFound', status: 404, message: 'Not Found'},
    // -- Convention Error
    NOT_NUMBER: {name: 'NotNumber', status: 400, message: 'Must be a number:'},
    MUST_REQUIRED: {name: 'MustRequired', status: 400, message: 'Must require:'}
});

