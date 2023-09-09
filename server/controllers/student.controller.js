const Marks = require('../model/Marks');
const Student = require('../model/Student');

/**
 * @description Get student details
 * @route GET /student/:studentId
 * @access private - student
 */
exports.getStudentInfo = async (req, res) => {
  const { studentId } = req.params;

  const foundStudent = await Student.findOne({
    basicDetails: studentId,
  })
    .populate('basicDetails', '-password')
    .exec();

  return res.status(200).json({
    foundStudent,
  });
};

/**
 * @description Get marks
 * @route GET /student/marks/:studentId
 * @access private - student
 */
exports.getStudentMarks = async (req, res) => {
  const { studentId } = req.params;

  const foundStudent = await Marks.findOne({
    student: studentId,
  });

  return res.status(200).json({
    foundStudent,
  });
};


