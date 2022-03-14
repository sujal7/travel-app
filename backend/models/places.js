const mongoose = require('mongoose');
const Schema = mongoose.Schema;

/**
 * Schema for different type of phone numbers i.e. mobile, work and home.
 */
const reviewsSchema = new Schema({
  reviewId: {
    type: Schema.Types.ObjectId,
    required: true,
  },
  ratings: {
    type: Number,
    required: true,
  },
  comment: {
    type: String,
    required: true,
  },
  cost: {
    type: Number,
    required: true,
  },
  heritages: {
    type: [String],
    required: true,
  },
  placesToVisit: {
    type: [String],
    required: true,
  },
  safety: {
    type: String,
    required: true,
  },
});

/**
 * Schema for contacts.
 */
const placesSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  reviews: {
    type: [reviewsSchema],
    required: false,
  },
});

module.exports = mongoose.model('Places', placesSchema);
