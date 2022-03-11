const express = require('express');
const router = express.Router();

const placesController = require('../controllers/places');
const validatePlaces = require('../middleware/places');

/**
 * Handles POST request in /signup endpoint.
 */
router.post('/places', placesController.addPlace);

module.exports = router;
