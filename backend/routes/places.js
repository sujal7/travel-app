const express = require('express');
const router = express.Router();

const placesController = require('../controllers/places');
const validatePlaces = require('../middleware/places');
const isAuth = require('../middleware/isAuth');

/**
 * Handles POST request in /signup endpoint.
 */
router.post('/places', isAuth, validatePlaces, placesController.addPlace);

/**
 * Handles GET request in /places endpoint.
 */
router.get('/places', isAuth, placesController.displayContact);

module.exports = router;
