const router = require('express').Router();
const {
  getAllFaculty,
  getAllStudents,
} = require('../controllers/admin.controller');
const verfiyJwt = require('../middleware/verifyJwt.middleware');
const { isAdmin } = require('../middleware/isRole.middleware');

router.route('/all_students').get(verfiyJwt, isAdmin, getAllStudents);

router.route('/all_faculty').get(verfiyJwt, isAdmin, getAllFaculty);

module.exports = router;
