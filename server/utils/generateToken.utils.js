const jwt = require('jsonwebtoken');

const generateToken = async (urn, role) => {
  const accessToken = await jwt.sign({ urn, role }, process.env.ACCESS_TOKEN, {
    expiresIn: '1h',
  });

  const refreshToken = await jwt.sign({ urn, role }, process.env.REFRESH_TOKEN);

  return { accessToken, refreshToken };
};

module.exports = generateToken;
