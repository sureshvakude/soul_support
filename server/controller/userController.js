const User = require('../models/User');
const jwt = require('jsonwebtoken');
const asyncHandler = require('express-async-handler');
const validator = require('validator');

// @desc Register a new user
// @route POST /api/auth/register
const registerUser = asyncHandler(async (req, res) => {
  const { name, email, password } = req.body;

  // Validate input
  if (!name || !email || !password) {
    res.status(400);
    throw new Error('All fields are required');
  }

  if (!validator.isEmail(email)) {
    res.status(400);
    throw new Error('Invalid email format');
  }

  if (password.length < 8) {
    res.status(400);
    throw new Error('Password must be at least 8 characters long');
  }

  // Check if user already exists
  const userExists = await User.findOne({ email });
  if (userExists) {
    res.status(400);
    throw new Error('User already exists');
  }

  // Create new user (password is hashed in the model's pre-save hook)
  const newUser = await User.create({ name, email, password });

  // Generate JWT token
  const token = generateToken(newUser._id);

  // Send response
  res.status(201).json({
    id: newUser._id,
    name: newUser.name,
    email: newUser.email,
    token,
  });
});

// @desc Login user
// @route POST /api/auth/login
const loginUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  // Validate input
  if (!email || !password) {
    res.status(400);
    throw new Error('All fields are required');
  }

  if (!validator.isEmail(email)) {
    res.status(400);
    throw new Error('Invalid email format');
  }

  // Check if user exists and is active
  const user = await User.findOne({ email });
  if (!user) {
    res.status(404);
    throw new Error('User not found');
  }

  if (!user.isActive) {
    res.status(403);
    throw new Error('User account is deactivated. Please contact support.');
  }

  // Verify password
  const isMatch = await user.isValidPassword(password);
  if (!isMatch) {
    res.status(400);
    throw new Error('Invalid credentials');
  }

  // Generate JWT token
  const token = generateToken(user._id);

  // Send response
  res.status(200).json({
    id: user._id,
    name: user.name,
    email: user.email,
    token,
  });
});

// Helper function to generate JWT
const generateToken = (userId) => {
  return jwt.sign({ id: userId }, process.env.JWT_SECRET, { expiresIn: '30d' });
};

module.exports = { registerUser, loginUser };