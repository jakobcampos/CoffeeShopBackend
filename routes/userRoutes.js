// routes/userRoutes.js
const express = require('express');
const User = require('../models/user');  // Import User model
const router = express.Router();

// Get all users
router.get('/users', async (req, res) => {
  const users = await User.find({});
  res.send(users);
});

// Add a new user
router.post('/users', async (req, res) => {
  const newUser = new User(req.body);
  await newUser.save();
  res.send(newUser);
});

module.exports = router;