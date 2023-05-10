const {SUCCESS, MUST_REQUIRED, NOT_NUMBER} = require("../constants/errors");

const BookModel = require("../models/book.model");
module.exports = validateBook = (req) => {
    const book = new BookModel(req.body)
    if (!book.title)
        return {valid: false, statusCode: MUST_REQUIRED.status, message: `${MUST_REQUIRED.message} title`};
    if (!book.author)
        return {valid: false, statusCode: MUST_REQUIRED.status, message: `${MUST_REQUIRED.message} author`};
    if (!book.year || isNaN(book.year))
        return {valid: false, statusCode: NOT_NUMBER.status, message: `${NOT_NUMBER.message} year`};
    if (!book.pages || isNaN(book.pages))
        return {valid: false, statusCode: NOT_NUMBER.status, message: `${NOT_NUMBER.message} pages`};
    if (!book.price || isNaN(book.price))
        return {valid: false, statusCode: NOT_NUMBER.status, message: `${NOT_NUMBER.message} price`};
    return {valid: true, statusCode: SUCCESS.status, message: SUCCESS.message};
}
