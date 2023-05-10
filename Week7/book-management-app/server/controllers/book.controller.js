const BookModel = require("../models/book.model");
const validateBook = require("../validate/validateBook");
const {NOT_FOUND, SUCCESS} = require("../constants/errors");

exports.getAllBooks = async (req, res, next) => {
    try {
        const books = await BookModel.find();
        res.status(SUCCESS.status).json(books);
    } catch (err) {
        console.error(err);
        next(err);
    }
};

exports.getBookById = async (req, res, next) => {
    try {
        const {id} = req.params;
        const book = await BookModel.findById(id);
        if (!book) return res.status(NOT_FOUND.status).json({message: NOT_FOUND.message});
        res.status(SUCCESS.status).json(book);
    } catch (err) {
        console.error(err);
        next(err);
    }
};

exports.createBook = async (req, res, next) => {
    try {
        const validate = validateBook(req);
        if (!validate.valid) return res.status(validate.statusCode).json({message: validate.message});
        const book = await BookModel.create(req.body);
        return res.status(SUCCESS.status).json(book);
    } catch (error) {
        console.error(error);
        next(error);
    }
};

exports.updateBookById = async (req, res, next) => {
    try {
        const validate = validateBook(req);
        if (!validate.valid) return res.status(validate.statusCode).json({message: validate.message});
        const book = await BookModel.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
        });
        if (!book) return res.status(NOT_FOUND.status).json({message: NOT_FOUND.message});
        res.status(SUCCESS.status).json(book);
    } catch (err) {
        console.error(err);
        next(err);
    }
};

exports.deleteBook = async (req, res, next) => {
    try {
        const {id} = req.params;
        const book = await BookModel.findByIdAndDelete(id);
        if (!book) return res.status(NOT_FOUND.status).json({message: NOT_FOUND.message});
        res.status(SUCCESS.status).json({message: SUCCESS.message});
    } catch (err) {
        console.error(err);
        next(err);
    }
};
