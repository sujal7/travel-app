const { validationResult } = require('express-validator');
const { default: mongoose } = require('mongoose');

const Places = require('../models/places');

require('dotenv').config();

/**
 *
 * Stores credentials of a new user in the database.
 * @param {Object} req - The request sent by the user.
 * @param {Object} res - The response sent to the user.
 * @returns A response with status code and message along with userId.
 */
exports.addReviews = (req, res) => {
  // Checks if the request body is validated from the middleware.
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    // Unprocessable entity.
    return res.status(422).json({
      message: 'Validation Failed, entered data is incorrect.',
      errors: errors.array(),
    });
  }

  // TODO: Add userId to the reviews payload.

  // console.log(req.body.heritages);
  // console.log(req.body.placesToVisit);

  let reviewId = req.body.userId;
  reviewId = mongoose.Types.ObjectId(reviewId);

  Places.updateOne(
    { name: req.body.name },
    {
      $push: {
        reviews: {
          reviewId: reviewId,
          ratings: req.body.ratings,
          heritages: req.body.heritages,
          placesToVisit: req.body.placesToVisit,
          comment: req.body.comment,
          cost: req.body.cost,
          safety: req.body.safety,
        },
      },
    }
  )
    .then(() => {
      return res.status(200).send('Review has been added.');
    })
    .catch((err) => {
      console.log(err);
    });
};

exports.displayReviews = (req, res) => {
  let placeId = req.params.id;
  placeId = mongoose.Types.ObjectId(placeId);

  Places.find({ _id: placeId })
    .then((places) => {
      return res.status(200).json(places);
    })
    .catch((err) => {
      console.log(err);
    });
};
