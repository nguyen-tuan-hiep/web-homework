const mongoose = require("mongoose");
const { Schema } = mongoose;

const studentInfo = new Schema(
  {
    Fullname: String,
    StudentId: String,
    DateOfBirth: Date,
    Email: String,
    Class: String,
    Cohort: Number,
    createdAt: {
      type: Date,
      default: Date.now,
    },
  }
);

module.exports = mongoose.model("Student", studentInfo);
