const mongoose = require("mongoose");
const classModel = mongoose.model("class");

exports.getAllClasses = (req, res) => {
	classModel
		.find({})
		.then(classes => {
			res.json(classes);
		})
		.catch(err => {
			res.send(err);
		});
};

exports.createClass = async (req, res) => {
	try {
		const newClass = new classModel(req.body);
		const savedClass = await newClass.save();
		res.json(savedClass);
	} catch (err) {
		res.send(err);
	}
};

exports.GetOneClass = async (req, res) => {
	try {
		const clazz = await classModel.findById(req.params.classID);
		res.json(clazz);
	} catch (err) {
		res.send(err);
	}
};

exports.updateClass = (req, res) => {
	classModel
		.findOneAndUpdate({ _id: req.params.classID }, req.body, { new: true })
		.then(updatedClass => {
			res.json(updatedClass);
		})
		.catch(err => {
			res.send(err);
		});
};

exports.deleteClass = (req, res) => {
	classModel
		.deleteOne({ _id: req.params.classID })
		.then(result => {
			res.json({
				message: "Class successfully deleted",
				_id: req.params.classID,
			});
		})
		.catch(err => {
			res.send(err);
		});
};
