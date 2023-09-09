const User = require('../model/User');

/**
 * @description Get all students
 * @route GET /admin/all_students
 * @access private - admin
 */
exports.getAllStudents = async (req, res) => {
  const allStudents = await User.find({ role: 'student' })
    .select('-password')
    .lean();
  return res.status(200).json({ allStudents });
};

/**
 * @description Get all faculty
 * @route GET /admin/all_faculty
 * @access private - admin
 */
exports.getAllFaculty = async (req, res) => {
  const allFaculty = await User.find({ role: 'faculty' }).lean();
  return res.status(200).json({ allFaculty });
};
