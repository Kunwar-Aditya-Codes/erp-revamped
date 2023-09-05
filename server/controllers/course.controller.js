const Faculty = require('../model/Faculty');
const Course = require('../model/Course');

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
