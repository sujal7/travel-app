const { validationResult } = require('express-validator');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

const User = require('../models/user');

require('dotenv').config();

/**
 *
 * Stores credentials of a new user in the database.
 * @param {Object} req - The request sent by the user.
 * @param {Object} res - The response sent to the user.
 * @returns A response with status code and message along with userId.
 */
exports.signUp = (req, res) => {
  // Checks if the request body is validated from the middleware.
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    // Unprocessable entity.
    return res.status(422).json({
      message: 'Validation Failed, entered data is incorrect.',
      errors: errors.array(),
    });
  }

  const email = req.body.email;
  const password = req.body.password;
  const username = req.body.username;
  // Hashes the password.
  bcrypt
    .hash(password, 12)
    .then((hashedPassword) => {
      // Creates a new user object with the entered data from the user.
      const user = new User({
        email: email,
        password: hashedPassword,
        username: username,
      });
      return user.save();
    })
    .then((result) => {
      return res
        .status(200)
        .json({ message: 'User has been created.', userId: result._id });
    })
    .catch((err) => {
      console.log(err);
    });
};

/**
 *
 * Authenticates the user and returns a JWT token.
 * @param {Object} req - The request sent by the user.
 * @param {Object} res - The response sent to the user.
 * @param {Object} next - The next middleware to be executed.
 * @returns A JWT token along with userId.
 */
exports.signIn = (req, res, next) => {
  const email = req.body.email;
  const password = req.body.password;
  let loadedUser;

  // Finds the user from the database with email.
  User.findOne({ email: email })
    .then((user) => {
      // If the user is not found, return an error.
      if (!user) {
        const error = new Error('The email doesnt match with any user.');
        error.statusCode = 401;
        throw error;
      }
      loadedUser = user;

      // Compares the password with the hashed password in the database.
      return bcrypt.compare(password, user.password);
    })
    .then((isEqual) => {
      // If the password is incorrect, return an error.
      if (!isEqual) {
        const error = new Error('The password you entered is incorrect.');
        error.statusCode = 401;
        throw error;
      }

      // If the password is correct, return a JWT token.
      const token = jwt.sign(
        {
          email: loadedUser.email,
          userId: loadedUser._id.toString(),
        },
        // The secret key is stored in the .env file.
        process.env.SECRET,

        // The token expires in 20 minutes.
        {
          expiresIn: '1200s',
        }
      );
      res.status(200).json({ token: token, userID: loadedUser._id.toString() });
    })
    .catch((err) => {
      if (!err.statusCode) {
        err.statusCode = 500;
      }
      next(err);
    });
};
