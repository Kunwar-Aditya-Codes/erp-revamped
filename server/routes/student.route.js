const router = require('express').Router({ mergeParams: true });
const {
  getStudentInfo,
  getStudentMarks,
} = require('../controllers/student.controller');
const verfiyJwt = require('../middleware/verifyJwt.middleware');
const { isStudent } = require('../middleware/isRole.middleware');

router.route('/:studentId').get(verfiyJwt, isStudent, getStudentInfo);

router.route('/marks/:studentId').get(verfiyJwt, isStudent, getStudentMarks);

module.exports = router;
