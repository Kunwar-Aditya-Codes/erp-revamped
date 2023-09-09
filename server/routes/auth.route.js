const router = require('express').Router();
const { createUser, loginUser } = require('../controllers/auth.controller');
const verfiyJwt = require('../middleware/verifyJwt.middleware');
const { isAdmin } = require('../middleware/isRole.middleware');

router.route('/sign_up').post(verfiyJwt, isAdmin, createUser);

router.route('/sign_in').post(loginUser);

module.exports = router;
