const router = require('express').Router();
const {
  addMarks,
  getAllStudentMarks,
  getStudentMarks,
} = require('../controllers/faculty.controller');
const verifyJwt = require('../middleware/verifyJwt.middleware');

router.route('/add_marks/:studentId').post(verifyJwt, addMarks);
router.route('/get_marks').get(verifyJwt, getAllStudentMarks);
router.route('/get_marks/:studentId').get(verifyJwt, getStudentMarks);

module.exports = router;
