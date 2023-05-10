const StudentModel = require("../models/student.model");
const { Types } = require("mongoose");

exports.getAllStudents = async (req, res) => {
  try {
    const students = await StudentModel.find({});
    res.json(students);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

exports.createStudent = async (req, res) => {
  try {
    const { Fullname, StudentId, DateOfBirth } = req.body;
    if (!Fullname) {
      return res.status(400).json({ message: "Fullname is required" });
    }
    if (
      StudentId.length !== 8 ||
      isNaN(StudentId) ||
      parseInt(StudentId.slice(0, 4)) < 1956
    ) {
      return res.status(400).json({ message: "Invalid Student ID" });
    }
    const existingStudent = await StudentModel.findOne({ StudentId });
    if (existingStudent) {
      return res.status(409).json({ message: "Student ID already exists" });
    }
    const nameParts = Fullname.trim().split(" ");
    const lastName = nameParts.pop();
    const initials = nameParts
      .map((name) => name.charAt(0))
      .join("")
    const studentIdDigits = StudentId.slice(-6);
    const normalizedLastName = lastName
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "");
    const initialsEng = initials
      .replace(/[đĐ]/g, "D")
      .replace(/[ăâắằẵẳấầẫẩậĂÂẮẰẴẲẤẦẪẨẬ]/g, "A")
      .replace(/[êếềễểệÊẾỀỄỂỆ]/g, "E");
    const email = `${normalizedLastName}.${initialsEng}${studentIdDigits}@sis.hust.edu.vn`.toLowerCase();
    const cohort = parseInt(StudentId.slice(0, 4)) - 1956 + 1;
    const adjustedTime = new Date(DateOfBirth);
    adjustedTime.setHours(adjustedTime.getDay() + 1);

    const newStudent = new StudentModel({
      ...req.body,
      Email: email,
      Cohort: cohort,
      DateOfBirth: adjustedTime,
    });

    await newStudent.save();
    res.json(newStudent);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

exports.getStudentById = async (req, res) => {
  try {
    if (req.params.student_id.length !== 24)
      return res.status(404).json({
        message: "Student not found",
      });
    const student = await StudentModel.findById(req.params.student_id);
    if (!student) throw new Error("Student not found.");
    res.json(student);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

exports.updateStudent = async (req, res) => {
  const { student_id } = req.params;
  if (!student_id || !Types.ObjectId.isValid(student_id)) {
    res.json({ message: "Invalid input" });
    return;
  }
  const { Fullname, StudentId, DateOfBirth } = req.body;
  if (!Fullname) {
    return res.status(401).json({ message: "Fullname is required" });
  }
  if (
    StudentId.length !== 8 ||
    isNaN(StudentId) ||
    parseInt(StudentId.slice(0, 4)) < 1956
  ) {
    return res.status(401).json({ message: "Invalid Student ID" });
  }

  const existingStudent = await StudentModel.findOne({
    StudentId,
    _id: { $ne: student_id },
  });
  if (existingStudent) {
    return res.status(409).json({ message: "Student ID already exists" });
  }

  const nameParts = Fullname.trim().split(" ");
  const lastName = nameParts.pop();
  const initials = nameParts
    .map((name) => name.charAt(0).toUpperCase())
    .join("");
  const studentIdDigits = StudentId.slice(-6);
  const normalizedLastName = lastName
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");

  const initialsEng = initials
    .replace(/[đĐ]/g, "D")
    .replace(/[ăâắằẵẳấầẫẩậĂÂẮẰẴẲẤẦẪẨẬ]/g, "A")
    .replace(/[êếềễểệÊẾỀỄỂỆ]/g, "E");
  const email = `${normalizedLastName}.${initialsEng}${studentIdDigits}@sis.hust.edu.vn`.toLowerCase();
  const cohort = parseInt(StudentId.slice(0, 4)) - 1956 + 1;
  const adjustedTime = new Date(DateOfBirth);
  adjustedTime.setHours(adjustedTime.getDay() + 1);

  const student = await StudentModel.findByIdAndUpdate(
    student_id,
    {
      ...req.body,
      Email: email,
      Cohort: cohort,
      DateOfBirth: adjustedTime,
    },
    {
      new: true,
    }
  );

  if (!student) {
    res.json({ message: "Not found student" });
    return;
  }
  res.json(student);
};

exports.deleteStudentById = async (req, res) => {
  try {
    if (req.params.student_id.length !== 24)
      return res.json({
        message: "Student not found",
      });
    const deletedBlog = await StudentModel.deleteOne({
      _id: req.params.student_id,
    });
    if (deletedBlog.deletedCount === 0) {
      return res.json({
        message: "Student not found",
      });
    }
    return res.json({
      message: "Student successfully deleted",
      _id: req.params.student_id,
    });
  } catch (err) {
    res.send(err.message);
  }
};
