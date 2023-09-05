const User = require('../model/User');
const bcrypt = require('bcrypt');
const generateToken = require('../utils/generateToken.utils');
const Faculty = require('../model/Faculty');

/**
 * @description Create user
 * @route POST /auth/sign_up
 */
exports.createUser = async (req, res) => {
  if (req.role !== 'admin') {
    return res.status(401).json('Unauthorized!');
  }

  const { urn, password, firstName, lastName, image, age, email, role } =
    req.body;

  if (!urn || !password || !firstName || !lastName || !age || !email || !role) {
    return res.status(400).json('Missing fields!');
  }

  const foundUser = await User.findOne({ $or: [{ urn }, { email }] });

  if (foundUser) {
    return res.status(400).json('User exists!');
  }

  const newUser = new User({
    firstName,
    lastName,
    password,
    email,
    urn,
    role,
    age,
    image,
  });

  await newUser.save();

  if (role === 'faculty') {
    const newFaculty = new Faculty({
      basicDetails: newUser._id,
      coursesTaught: req.body?.coursesTaught,
    });
    await newFaculty.save();
  }

  // Send invitation link on email

  return res.status(200).json('User created successfully!');
};

/**
 * @description Login user
 * @route POST /auth/sign_in
 */
exports.loginUser = async (req, res) => {
  const { urn, password } = req.body;

  if (!urn || !password) {
    return res.status(400).json('Missing fields!');
  }

  const foundUser = await User.findOne({ urn }).lean().exec();

  if (!foundUser) {
    return res.status(400).json('Invalid credential');
  }

  const checkPassword = await bcrypt.compare(password, foundUser.password);

  if (!checkPassword) {
    return res.status(400).json('Invalid credential');
  }

  const { accessToken, refreshToken } = await generateToken(
    foundUser.urn,
    foundUser.role
  );

  res.cookie('refreshToken', refreshToken, {
    httpOnly: true,
    sameSite: 'none',
    secure: true,
    maxAge: 7 * 24 * 60 * 60 * 1000,
  });

  return res.status(200).json({
    accessToken,
    foundUser,
  });
};

/**
 * @description Refresh Token
 * @route POST /auth/refresh_token
 */
exports.refreshToken = async (req, res) => {};

/**
 * @description Sign Out
 * @route POST /auth/sign_out
 */
exports.signOut = async (req, res) => {};
