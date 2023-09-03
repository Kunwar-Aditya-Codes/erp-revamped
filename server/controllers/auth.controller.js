const User = require('../model/User');
const bcrypt = require('bcrypt');
const generateToken = require('../utils/generateToken.utils');

/**
 * @description Create user
 * @route POST /auth/sign_up
 */
exports.createUser = async (req, res) => {
  const { urn, password, firstName, lastName, image, age, email, role } =
    req.body;

  const foundUser = await User.findOne({ urn, email }).lean().exec();

  if (foundUser) {
    return res.status(400).json('User exists!');
  }

  const user = new User({
    firstName,
    lastName,
    password,
    email,
    urn,
    role,
    age,
    image,
  });

  await user.save();

  return res.status(200).json('User created successfully!');
};

/**
 * @description Login user
 * @route POST /auth/sign_in
 */
exports.loginUser = async (req, res) => {
  const { urn, password } = req.body;

  const foundUser = await User.findOne({ urn }).lean().exec();

  if (!foundUser) {
    return res.status(400).json('Invalid credential');
  }

  const checkPassword = await bcrypt.compare(foundUser.password, password);

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
