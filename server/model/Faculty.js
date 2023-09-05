const mongoose = require('mongoose');

const facultySchema = new mongoose.Schema(
  {
    basicDetails: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'users',
    },

    coursesTaught: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'courses',
        default: [],
      },
    ],
  },
  { timestamps: true }
);

module.exports = mongoose.model('faculties', facultySchema);
