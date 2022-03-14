const express = require('express');
const router = express.Router();

const reviewsController = require('../controllers/reviews');
const validateReviews = require('../middleware/reviews');
const isAuth = require('../middleware/isAuth');
// const validatePlaces = require('../middleware/places');

/**
 * Handles POST request in /reviews endpoint.
 */
router.post('/reviews', isAuth, validateReviews, reviewsController.addReviews);

/**
 * Handles GET request in /places/:id endpoint.
 */
router.get('/places/:id', isAuth, reviewsController.displayReviews);

module.exports = router;
