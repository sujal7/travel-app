const express = require('express');
const router = express.Router();

const userController = require('../controllers/user');
const validateUser = require('../middleware/user');

/**
 * Handles POST request in /signup endpoint.
 */
router.post('/signup', validateUser, userController.signUp);

/**
 * Handles POST request in /signin endpoint.
 */
router.post('/signin', userController.signIn);

/**
 * Handles POST request in /signin endpoint.
 */
// router.post('/signin', userController.signIn);

module.exports = router;
