const mongoose = require("mongoose");
const { Schema } = mongoose;

const bookSchema = new Schema({
  title: { type: String, required: true },
  description: { type: String },
  author: { type: String, required: true },
  genre: { type: String},
  year: { type: Number},
  pages: { type: Number},
  publisher: { type: String},
  image_url: { type: String},
  category: { type: String},
  price: { type: Number},
});

module.exports = mongoose.model("Book", bookSchema);