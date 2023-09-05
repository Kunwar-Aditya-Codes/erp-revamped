module.exports = async (courseTitle, courseYear) => {
  const titleAbbreviation = courseTitle.substring(0, 3).toUpperCase();

  const maxRandomDigits =
    6 - titleAbbreviation.length - courseYear.toString().length;

  const randomCode = Math.floor(Math.random() * Math.pow(10, maxRandomDigits));

  const courseCode = `${titleAbbreviation}${courseYear}${randomCode}`;

  if (courseCode.length > 6) {
    return courseCode.substring(0, 6);
  }

  return courseCode;
};
