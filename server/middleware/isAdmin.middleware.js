module.exports = (req, res, next) => {
  if (req.role !== 'admin') {
    return res.status(401).json('Unauthorized!');
  }
  next();
};
