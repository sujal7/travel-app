const express = require('express');
const router = express.Router();

const placesController = require('../controllers/places');
const validatePlaces = require('../middleware/places');
const isAuth = require('../middleware/isAuth');

/**
 * Handles POST request in /signup endpoint.
 */
router.post('/places', isAuth, validatePlaces, placesController.addPlace);

module.exports = router;
