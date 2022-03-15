const { body } = require('express-validator');

/**
 * Validates the request body of signup sent by the user.
 */
const validateReviews = [
  body('ratings').exists(),
  body('placesToVisit').exists(),
  body('comment').exists(),
  body('cost').exists(),
  body('heritages').exists(),
  body('safety').exists(),
];

module.exports = validateReviews;
