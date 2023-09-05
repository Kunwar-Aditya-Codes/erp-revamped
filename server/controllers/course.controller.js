const Faculty = require('../model/Faculty');
const Course = require('../model/Course');
const createCourseCode = require('../utils/createCourseCode.utils');

/**
 * @description Create course
 * @route POST /course/add
 */
exports.createCourse = async (req, res) => {
  const { courseTitle, courseYear, faculty } = req.body;

  if (!courseTitle || !courseYear) {
    return res.status(400).json('Missing fields!');
  }

  const existingCourse = await Course.findOne({ courseTitle }).collation({
    locale: 'en',
    strength: 1,
  });

  if (existingCourse) {
    return res.status(400).json('Course exists in the database!');
  }

  const courseCode = await createCourseCode(courseTitle, courseYear);

  const newCourse = new Course({
    courseTitle,
    courseYear,
    courseCode,
    faculty,
  });

  await newCourse.save();

  if (faculty) {
    const updateFaculty = await Faculty.findByIdAndUpdate(
      faculty,
      {
        $push: {
          coursesTaught: newCourse._id,
        },
      },
      {
        new: true,
      }
    );

    return res.status(200).json({
      message: 'Course created successfully!',
      newCourse,
      updateFaculty,
    });
  }

  return res.status(200).json({
    message: 'Course created successfully!',
    newCourse,
  });
};

/**
 * @description Get course
 * @route GET /course/get
 */
exports.getCourse = async (req, res) => {
  const allCourses = await Course.find()
    .populate({
      path: 'faculty',
      populate: {
        path: 'basicDetails',
      },
    })
    .exec();
  return res.status(200).json({ allCourses });
};

/**
 * @description Delete course
 * @route Delete /course/delete
 */
exports.deleteCourse = async (req, res) => {
  const { courseId } = req.body;

  if (!courseId) {
    return res.status(400).json('No id provided!');
  }

  await Course.findByIdAndDelete(courseId);

  return res.status(200).json('Course deleted successfully!');
};
