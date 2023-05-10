const mongoose = require("mongoose");
const ClassModel = require("../models/class.model");

exports.getAllClasses = async (req, res) => {
  try {
    const classes = await ClassModel.find({});
    res.json(classes);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

exports.createClass = async (req, res) => {
  try {
    const newClass = await new ClassModel(req.body).save();
    res.json(newClass);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

exports.getOneClass = async (req, res) => {
  try {
    const clazz = await ClassModel.findById(req.params.classID);
    if (!clazz) throw new Error("Class not found.");
    res.json(clazz);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

exports.updateClass = async (req, res) => {
  try {
    const updatedClass = await ClassModel.findOneAndUpdate(
      { _id: req.params.classID },
      req.body,
      { new: true }
    );
    if (!updatedClass)
      return res.status(404).json({
        message: "Class not found",
      });
    res.json(updatedClass);
  } catch (err) {
    res.send(err.message);
  }
};

exports.deleteClass = async (req, res) => {
  try {
    const deletedClass = await ClassModel.deleteOne({
      _id: req.params.classID,
    });
    if (deletedClass.deletedCount === 0) {
      return res.status(404).json({
        message: "Class not found",
      });
    }
    res.json({
      message: "Class successfully deleted",
      _id: req.params.classID,
    });
  } catch (err) {
    // console.log(err);
    res.send(err.message);
  }
};
