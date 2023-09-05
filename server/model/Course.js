const mongoose = require('mongoose');

const courseSchema = new mongoose.Schema(
  {
    courseTitle: {
      type: String,
      required: true,
    },

    courseYear: {
      type: Number,
      required: true,
    },

    courseCode: {
      type: String,
      required: true,
    },

    faculty: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'faculties',
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model('courses', courseSchema);
