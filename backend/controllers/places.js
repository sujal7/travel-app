const { validationResult } = require('express-validator');

const Places = require('../models/places');

require('dotenv').config();

/**
 *
 * Add a new place into the database.
 * @param {Object} req - The request sent by the user.
 * @param {Object} res - The response sent to the user.
 * @returns A response with status code and message.
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

/**
 *
 * Display places from the database.
 * @param {Object} req - The request sent by the user.
 * @param {Object} res - The response sent to the user.
 * @returns A response with status code and JSON object of places.
 */
exports.displayContact = (req, res) => {
  Places.aggregate([
    {
      $lookup: {
        from: 'users',
        localField: 'reviews.reviewId',
        foreignField: '_id',
        as: 'reviewData',
      },
    },
  ])
    .then((places) => {
      return res.status(200).json(places);
    })
    .catch((err) => {
      console.log(err);
    });
};
