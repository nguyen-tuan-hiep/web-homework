const {SUCCESS, MUST_REQUIRED, NOT_NUMBER} = require("../constants/errors");

const PhoneModel = require("../models/phone.model");
module.exports = validatePhone = (req) => {
    const phone = new PhoneModel(req.body)
    if (!phone.name)
        return {valid: false, statusCode: MUST_REQUIRED.status, message: `${MUST_REQUIRED.message} name`};
    if (!phone.price || isNaN(phone.price))
        return {valid: false, statusCode: NOT_NUMBER.status, message: `${NOT_NUMBER.message} price`};
    if (!phone.storage || isNaN(phone.storage))
        return {valid: false, statusCode: NOT_NUMBER.status, message: `${NOT_NUMBER.message} storage`};
    return {valid: true, statusCode: SUCCESS.status, message: SUCCESS.message};
}
