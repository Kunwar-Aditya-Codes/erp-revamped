const router = require('express').Router();
const { createUser, loginUser } = require('../controllers/auth.controller');

router.route('/sign_up').post(createUser);

router.route('/sign_in').post(loginUser);

module.exports = router;
