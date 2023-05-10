const express = require("express");

const bookController = require("../controllers/book.controller");
const bookRouter = express.Router();

bookRouter.get("/", bookController.getAllBooks);
bookRouter.get("/:id", bookController.getBookById);
bookRouter.post("/", bookController.createBook);
bookRouter.patch("/:id", bookController.updateBookById);
bookRouter.delete("/:id", bookController.deleteBook);

module.exports = bookRouter;
