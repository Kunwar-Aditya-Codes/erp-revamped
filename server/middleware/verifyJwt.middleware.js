const jwt = require('jsonwebtoken');

const verfiyJwt = async (req, res, next) => {
  const authHeader = req.headers['authorization'];

  if (!authHeader) {
    return res.status(401).json('No header!');
  }

  const token = authHeader.split(' ')[1];

  if (!token || token === undefined) {
    return res.status(401).json('No token');
  }

  const decoded = jwt.verify(token, process.env.ACCESS_TOKEN);

  if (!decoded) {
    return res.status(404).json('Unauthorized!');
  }

  const { urn, role } = decoded;

  req.urn = urn;
  req.role = role;

  next();
};

module.exports = verfiyJwt;
