const router = require('express').Router();
const { createCourse, getCourse } = require('../controllers/course.controller');
const verfiyJwt = require('../middleware/verifyJwt.middleware');
const isAdmin = require('../middleware/isAdmin.middleware');

router.route('/add').post(verfiyJwt, isAdmin, createCourse);

router.route('/get').get(verfiyJwt, getCourse);

module.exports = router;
