const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema(
  {
    basicDetails: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'users',
    },

    dateOfBirth: {
      type: Date,
    },

    gender: {
      type: String,
    },

    department: {
      type: String,
      required: true,
    },

    courseEnrolled: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "courses"
      },
    ],
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model('students', studentSchema);
