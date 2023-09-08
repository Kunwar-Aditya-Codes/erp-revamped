const Marks = require('../model/Marks');
const Student = require('../model/Student');

/**
 * @description Add student marks
 * @route POST /faculty/add_marks/:studentId
 * @access private - faculty
 */
exports.addMarks = async (req, res) => {
  if (req.role !== 'faculty') {
    return res.status(401).json({
      error: 'Unauthorized',
    });
  }

  const { studentId } = req.params;
  const { courseId, marks } = req.body;

  if (!courseId || !marks) {
    return res.status(400).json({
      error: 'Missing fields!',
    });
  }

  const foundStudent = await Student.findById(studentId);

  if (!foundStudent.courseEnrolled.includes(courseId)) {
    return res.status(400).json({
      error: 'Student is not enrolled in this course',
    });
  }

  const existingDocument = await Marks.findOne({ student: studentId });

  if (!existingDocument) {
    const newMarks = new Marks({
      student: studentId,
      courseMarks: [{ course: courseId, marks }],
    });
    const savedMarks = await newMarks.save();
    res.status(201).json({
      message: 'Marks Saved!',
      savedMarks,
    });
  } else {
    const courseMark = existingDocument.courseMarks.filter(
      (item) => item.course.toString() === courseId
    );

    if (courseMark.length > 0) {
      courseMark[0].marks = marks;
    } else {
      existingDocument.courseMarks.push({ course: courseId, marks });
    }

    const updatedDocument = await existingDocument.save();

    res.status(200).json({
      message: 'Marks Saved!',
      updatedDocument,
    });
  }
};

/**
 * @description Get students marks
 * @route GET /faculty/get_marks
 * @access private - faculty
 */
exports.getAllStudentMarks = async (req, res) => {
  const allMarks = await Marks.find(); // Retrieve all marks

  res.status(200).json(allMarks);
};

/**
 * @description Get student marks
 * @route GET /faculty/get_marks/:studentId
 * @access public
 */
exports.getStudentMarks = async (req, res) => {
  const { studentId } = req.params;

  const studentMarks = await Marks.findOne({ student: studentId });

  if (!studentMarks) {
    return res.status(404).json({ error: 'Marks not found for this student' });
  }

  res.status(200).json(studentMarks);
};
