const mongoose = require('mongoose');

const marksSchema = new mongoose.Schema({
  student: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'students',
  },

  courseMarks: [
    {
      course: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'courses',
      },
      marks: {
        type: Number,
        required: true,
      },
    },
  ],
});

module.exports = mongoose.model('marks', marksSchema);
