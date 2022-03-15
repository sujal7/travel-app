const { validationResult } = require('express-validator');
const { default: mongoose } = require('mongoose');
const jwt_decode = require('jwt-decode');

const Places = require('../models/places');
const { decode } = require('jsonwebtoken');

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

  const authHeader = req.get('Authorization');

  // Gets the token from authorization header which is in the form of Bearer <token>.
  const token = authHeader.split(' ')[1];

  const decoded = jwt_decode(token);

  let placeId = req.params.id;
  placeId = mongoose.Types.ObjectId(placeId);
  // TODO: Add userId to the reviews payload.

  // console.log(req.body.heritages);
  // console.log(req.body.placesToVisit);

  let reviewId = decoded.userId;
  reviewId = mongoose.Types.ObjectId(reviewId);

  Places.updateOne(
    { _id: placeId },
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

  Places.aggregate([
    { $match: { _id: placeId } },
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

  // Places.find({ _id: placeId })
  //   .then((places) => {
  //     return res.status(200).json(places);
  //   })
  //   .catch((err) => {
  //     console.log(err);
  //   });
};
