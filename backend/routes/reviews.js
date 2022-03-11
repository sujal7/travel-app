const express = require('express');
const router = express.Router();

const reviewsController = require('../controllers/reviews');
// const validatePlaces = require('../middleware/places');

/**
 * Handles POST request in /signup endpoint.
 */
router.post('/reviews', reviewsController.addReviews);

module.exports = router;
