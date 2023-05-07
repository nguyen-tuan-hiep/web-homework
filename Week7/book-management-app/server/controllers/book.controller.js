const BookModel = require("../models/book.model");

exports.getAllBooks = async (req, res, next) => {
	try {
		const books = await BookModel.find();
		res.status(200).json(books);
	} catch (err) {
		console.error(err);
		next(err);
	}
};

exports.getBook = async (req, res, next) => {
	try {
		const { id } = req.params;
		const book = await BookModel.findById(id);
		if (!book) return res.status(404).json({ message: "Book not found" });
		res.status(200).json(book);
	} catch (err) {
		console.error(err);
		next(err);
	}
};

exports.createBook = async (req, res, next) => {
	try {
		const { title, author, year, pages, price } = req.body;
		if (!title || !author)
			return res.status(400).json({ message: "Title and author are required" });
		if (year && isNaN(year))
			return res.status(400).json({ message: "Year must be a number" });
		if (pages && isNaN(pages))
			return res.status(400).json({ message: "Pages must be a number" });
		if (price && isNaN(price))
			return res.status(400).json({ message: "Price must be a number" });
		const book = await BookModel.create(req.body);
		return res.status(200).json(book);
	} catch (error) {
		console.error(error);
		next(error);
	}
};

exports.updateBook = async (req, res, next) => {
	try {
		const { id } = req.params;
		const { title, author, year, pages, price } = req.body;
		if (!title || !author)
			return res.status(400).json({ message: "Title and author are required" });
			if (year && isNaN(year))
			return res.status(400).json({ message: "Year must be a number" });
		if (pages && isNaN(pages))
			return res.status(400).json({ message: "Pages must be a number" });
		if (price && isNaN(price))
			return res.status(400).json({ message: "Price must be a number" });
		const book = await BookModel.findByIdAndUpdate(id, req.body, {
			new: true,
		});
		if (!book) return res.status(404).json({ message: "Book not found" });
		res.status(200).json(book);
	} catch (err) {
		console.error(err);
		next(err);
	}
};

exports.deleteBook = async (req, res, next) => {
	try {
		const { id } = req.params;
		const book = await BookModel.findByIdAndDelete(id);
		if (!book) return res.status(404).json({ message: "Book not found" });
		res.status(200).json({ message: "Book deleted successfully" });
	} catch (err) {
		console.error(err);
		next(err);
	}
};
