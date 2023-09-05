const router = require('express').Router();
const { createCourse } = require('../controllers/course.controller');
const verfiyJwt = require('../middleware/verifyJwt.middleware');
const isAdmin = require('../middleware/isAdmin.middleware');

router.route('/add').post(verfiyJwt, isAdmin, createCourse);

module.exports = router;
