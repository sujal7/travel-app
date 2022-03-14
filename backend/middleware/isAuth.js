const jwt = require('jsonwebtoken');

/**
 *
 * @param {Object} req - The request sent by the user.
 * @param {Object} res - The response sent to the user.
 * @param {Object} next - The next middleware to be executed.
 */
module.exports = (req, res, next) => {
  const authHeader = req.get('Authorization');

  // If there is no Authorization header, return an error.
  if (!authHeader) {
    console.log('error');
    res.status(401).json({ message: 'No token, authorization denied' });
  }

  // Gets the token from authorization header which is in the form of Bearer <token>.
  const token = authHeader.split(' ')[1];

  let decodedToken;

  // If the token is not valid, return an error.
  try {
    decodedToken = jwt.verify(token, process.env.SECRET);
  } catch (err) {
    console.log(err);
    res.status(401).json({ message: 'Token is not valid' });
  }
  if (!decodedToken) {
    console.log('error');
    res.status(401).json({ message: 'Token is not valid' });
  }
  next();
};
