const StudentController = require("../controllers/student.controller");

module.exports = (app) => {
  // Routes for all Students
  app
    .route("/api/Students")
    .get(StudentController.getAllStudents) // get all Students
    .post(StudentController.createStudent); // create a new Student

  // Routes for a specific Student
  app
    .route("/api/Students/:student_id")
    .get(StudentController.getStudentById) // get a specific Student
    .patch(StudentController.updateStudent) // update a specific Student
    .delete(StudentController.deleteStudentById); // delete a specific Student
};
