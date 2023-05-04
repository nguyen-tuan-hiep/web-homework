const mongoose = require("mongoose");
const { Schema } = mongoose;

const blogSchema = new Schema(
  {
    title: String,
    body: String,
    image: String,
    createdAt: {
      type: Date,
      default: Date.now,
    },
  }
  // {
  //   versionKey: false,
  // }
);

module.exports = mongoose.model("Blog", blogSchema);
