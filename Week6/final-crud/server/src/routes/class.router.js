const classController = require("../controllers/class.controller");

module.exports = (app) => {
  // Routes for all classes
  app
    .route("/class")
    .get(classController.getAllClasses) // get all classes
    .post(classController.createClass); // create a new class

  // Routes for a specific class
  app
    .route("/class/:classID")
    .get(classController.getOneClass) // get a specific class
    .put(classController.updateClass) // update a specific class
    .delete(classController.deleteClass); // delete a specific class
};
