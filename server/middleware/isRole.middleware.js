exports.isAdmin = (req, res, next) => {
  if (req.role !== 'admin') {
    return res.status(401).json('Unauthorized!');
  }
  next();
};
exports.isStudent = (req, res, next) => {
  if (req.role !== 'student') {
    return res.status(401).json('Unauthorized!');
  }
  next();
};
exports.isFaculty = (req, res, next) => {
  if (req.role !== 'faculty') {
    return res.status(401).json('Unauthorized!');
  }
  next();
};
