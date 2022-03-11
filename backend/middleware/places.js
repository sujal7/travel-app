const { body } = require('express-validator');

/**
 * Validates the request body of signup sent by the user.
 */
const validatePlaces = [body('name').isLength(3)];

module.exports = validatePlaces;
