const mongoose = require('mongoose');

const userSchema = new mongoose.Schema(
  {
    firstName: {},
    lastName: {},
    age: {},
    email: {},
    password: {},
    role: {},
    image: {},
    urn: {},
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model('users', userSchema);
