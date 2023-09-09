const router = require('express').Router({ mergeParams: true });
const { getStudentInfo } = require('../controllers/student.controller');
const verfiyJwt = require('../middleware/verifyJwt.middleware');

router.route('/:studentId').get(verfiyJwt, getStudentInfo);

module.exports = router;
