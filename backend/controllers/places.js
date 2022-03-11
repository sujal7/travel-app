const { validationResult } = require('express-validator');

const Places = require('../models/places');

require('dotenv').config();

/**
 *
 * Stores credentials of a new user in the database.
 * @param {Object} req - The request sent by the user.
 * @param {Object} res - The response sent to the user.
 * @returns A response with status code and message along with userId.
 */
exports.addPlace = (req, res) => {
  // Checks if the request body is validated from the middleware.
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    // Unprocessable entity.
    return res.status(422).json({
      message: 'Validation Failed, entered data is incorrect.',
      errors: errors.array(),
    });
  }

  const places = new Places({
    name: req.body.name,
  });

  // Saves the places object to the database.
  places
    .save()
    .then(() => {
      return res.status(200).send('Place has been succsessfully created.');
    })
    .catch((err) => {
      console.log(err);
    });
};
