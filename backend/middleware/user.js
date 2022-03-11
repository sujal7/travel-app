const { body } = require('express-validator');

/**
 * Validates the request body of signup sent by the user.
 */
const validateUser = [
  body('email')
    .isEmail()
    .withMessage('Please enter a valid email address.')
    .normalizeEmail(),
  body('password').trim().isLength({ min: 5 }),
  body('username').isLength({ min: 3 }),
];

module.exports = validateUser;
