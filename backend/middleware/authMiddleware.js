// middleware/authMiddleware.js
const User = require('../models/User');

exports.isAuthenticated = async (req, res, next) => {
  if (req.session.userId) {
    const user = await User.findById(req.session.userId);
    if (user) {
      next();
    } else {
      res.status(401).send('Unauthorized');
    }
  } else {
    res.status(401).send('Unauthorized');
  }
};