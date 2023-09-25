const User = require('../model/User');
const bcrypt = require('bcrypt');
const generateToken = require('../utils/generateToken.utils');
const Faculty = require('../model/Faculty');
const Student = require('../model/Student');
const Marks = require('../model/Marks');
const jwt = require('jsonwebtoken');

/**
 * @description Create user
 * @route POST /auth/sign_up
 * @access private - admin
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

  let newProfile;

  if (role === 'faculty') {
    newProfile = new Faculty({
      basicDetails: newUser._id,
      coursesTaught: req.body?.coursesTaught,
    });
  } else if (role === 'student') {
    newProfile = new Student({
      basicDetails: newUser._id,
      dateOfBirth: req.body?.dateOfBirth,
      department: req.body?.department,
      gender: req.body?.gender,
      courseEnrolled: req.body?.courseEnrolled,
    });
  }

  if (newProfile) {
    await newProfile.save();

    if (role === 'student' && req.body?.courseEnrolled) {
      const courseMarks = req.body?.courseEnrolled.map((courseId) => ({
        course: courseId,
        marks: 0,
      }));

      const marks = new Marks({
        student: newProfile._id,
        courseMarks,
      });

      await marks.save();
    }
  }

  // Send invitation link on email

  return res.status(200).json('User created successfully!');
};

/**
 * @description Login user
 * @route POST /auth/sign_in
 * @access public
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
 * @access public
 */
exports.refreshToken = async (req, res) => {
  const { refreshToken } = req.cookies;

  if (!refreshToken) {
    return res.status(401).json('Please login!');
  }

  const decoded = jwt.verify(refreshToken, process.env.REFRESH_TOKEN);

  const { role, urn } = decoded;

  const findUser = await User.findOne({ urn, role });

  if (!findUser) {
    return res.status(401).json('No user!');
  }

  const { accessToken, refreshToken: newRefreshToken } = await generateToken(
    urn,
    role
  );

  res.cookie('refreshToken', newRefreshToken, {
    httpOnly: true,
    sameSite: 'none',
    secure: true,
    maxAge: 7 * 24 * 60 * 60 * 1000,
  });

  return res.status(200).json({ accessToken });
};

/**
 * @description Sign Out
 * @route POST /auth/sign_out
 * @access public
 */
exports.signOut = async (req, res) => {
  
};

/**
 * @description Signed In Profile
 * @route GET /auth/profile
 * @access private
 */
exports.getProfile = async (req, res) => {
  const { role, urn } = req;

  if (!role || !urn) {
    return res.status(401).json('Unauthorized!');
  }

  const foundUser = await User.findOne({ urn, urn }).select('-password').lean();

  if (!foundUser) return res.status(401).json('No user!');

  return res.status(200).json({ foundUser });
};
