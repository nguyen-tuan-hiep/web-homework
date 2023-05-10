const classController = require("../controllers/class.controller");

module.exports = app => {
	app.route("/class")
		.get(classController.getAllClasses)
		.post(classController.createClass);

	app.route("/class/:classID")
		.get(classController.GetOneClass)
		.put(classController.updateClass)
		.delete(classController.deleteClass);
};
