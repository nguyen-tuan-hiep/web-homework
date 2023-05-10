const mongoose = require("mongoose");
const { Schema } = mongoose;

const classSchema = new Schema(
  {
    name: {
      type: String,
      required: "Class name cannot be blank",
    },
  },
  {
    collection: "class",
    versionKey: false,
  }
);

module.exports = mongoose.model("Class", classSchema);
