const {NOT_FOUND} = require("../constants/errors");
module.exports = function (request, response, next) {
    response.status(NOT_FOUND.status).send(NOT_FOUND.message);
    next();
};
