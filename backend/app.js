const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const userRoute = require('./routes/user');
const placesRoute = require('./routes/places');

const port = process.env.PORT || 5000;
require('dotenv').config();

/**
 *
 * Allows header so that we can pass token for authorization and send request from the client.
 * @param {Object} req - The request sent by the user.
 * @param {Object} res - The response sent to the user.
 * @param {Object} next - The next middleware to be executed.
 */
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader(
    'Access-Control-Allow-Methods',
    'OPTIONS, GET, POST, PUT, PATCH, DELETE'
  );
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  next();
});

// To use JSON data in the request body.
app.use(bodyParser.json());

// Use the default path for the user and places routes.
app.use('/', userRoute);
app.use('/', placesRoute);

/**
 * Connects to Mongoose cloud database and starts the server.
 */
mongoose
  .connect(process.env.DB_CREDENTIAL)
  .then((result) => {
    app.listen(port, () => {
      console.log('Server ready at ' + port);
    });
  })
  .catch((err) => console.log(err));
