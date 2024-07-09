// controllers/authController.js
const User = require('../models/User');

exports.register = async (req, res) => {
  const { username, password } = req.body;
  const user = new User({ username, password });
  await user.save();
  res.send('User registered');
};

exports.login = async (req, res) => {
  const { username, password } = req.body;
  const user = await User.findOne({ username, password });
  if (user) {
    req.session.userId = user._id;
    res.send('Logged in');
  } else {
    res.status(401).send('Invalid credentials');
  }
};