const StudentModel = require("../models/student.model");
const { Types } = require("mongoose");

function removeVietnameseSigns(inputString) {
  // Conversion of accented Vietnamese characters
  const ACCENTED_VIETNAMESE_CHARACTERS =
    /[\u00C0\u00C1\u00C3\u00C8\u00C9\u00CC\u00CD\u00D2\u00D3\u00D5\u00D9\u00DA\u00DD\u00E0\u00E1\u00E3\u00E8\u00E9\u00EC\u00ED\u00F2\u00F3\u00F5\u00F9\u00FA\u00FD\u0102\u0103\u0110\u0111\u0128\u0129\u0168\u0169\u01A0\u01A1\u01AF\u01B0]/g;
  const UNACCENTED_VIETNAMESE_CHARACTERS =
    "AAAAEEEIIIOOOOUUUYaaaaeeeiiioooouuuyyAaDdIiUuOo";

  // replace diacritical marks with their plain counterparts
  return inputString.replace(ACCENTED_VIETNAMESE_CHARACTERS, function (match) {
    return UNACCENTED_VIETNAMESE_CHARACTERS.charAt(
      ACCENTED_VIETNAMESE_CHARACTERS.source.indexOf(match)
    );
  });
}

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
      StudentId > 99999999 ||
      StudentId < 19560000
    ) {
      return res
        .status(400)
        .json({ message: "Student ID should be from 19560000 to 99999999" });
    }
    const existingStudent = await StudentModel.findOne({ StudentId });
    if (existingStudent) {
      return res.status(409).json({ message: "Student ID already exists" });
    }
    const nameParts = Fullname.trim().split(" ");
    const lastName = nameParts.pop();
    const initials = nameParts.map((name) => name.charAt(0)).join("");
    const studentIdDigits = StudentId.slice(-6);
    const normalizedLastName = lastName
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "");
    const initialsEng = initials
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "");
    const email =
      `${normalizedLastName}.${initialsEng}${studentIdDigits}@sis.hust.edu.vn`.toLowerCase();
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
  if (isNaN(StudentId) || StudentId > 99999999 || StudentId < 19560000) {
    return res
      .status(401)
      .json({ message: "Student ID should be from 19560000 to 99999999" });
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

  const initialsEng = initials.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
  const email =
    `${normalizedLastName}.${initialsEng}${studentIdDigits}@sis.hust.edu.vn`.toLowerCase();
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
