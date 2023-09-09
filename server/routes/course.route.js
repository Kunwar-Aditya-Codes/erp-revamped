const router = require('express').Router();
const {
  createCourse,
  getCourse,
  deleteCourse,
} = require('../controllers/course.controller');
const verfiyJwt = require('../middleware/verifyJwt.middleware');
const { isAdmin } = require('../middleware/isRole.middleware');

router.route('/add').post(verfiyJwt, isAdmin, createCourse);
router.route('/get').get(verfiyJwt, getCourse);
router.route('/delete').delete(verfiyJwt, isAdmin, deleteCourse);

module.exports = router;
