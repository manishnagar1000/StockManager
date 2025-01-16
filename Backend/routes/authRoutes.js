const express = require('express');
const { login } = require('../controllers/authController');
const { signup } = require('../controllers/signupController');
const router = express.Router();

// Login route
router.post('/login', login);
router.post('/signup', signup);

module.exports = router;
