const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const userSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      required: [true, 'Firstname is missing!'],
    },
    lastName: {
      type: String,
      required: [true, 'Lastname is missing!'],
    },
    age: {
      type: Number,
      required: [true, 'Age is missing!'],
    },
    email: {
      type: String,
      required: [true, 'Email is missing!'],
      trim: true,
      lowercase: true,
      unique: true,
    },
    password: {
      type: String,
      required: [true, 'Password is missing!'],
    },
    role: {
      type: String,
      required: [true, 'Role is missing!'],
    },
    image: {
      type: String,
    },
    urn: {
      type: String,
      required: [true, 'Urn is missing!'],
    },
  },
  {
    timestamps: true,
  }
);

userSchema.pre('save', async function (next) {
  if (this.isModified('password')) {
    this.password = await bcrypt.hash(this.password, 12);
    console.log(this.password);
  }
  next();
});

module.exports = mongoose.model('users', userSchema);
