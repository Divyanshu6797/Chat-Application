const jwt = require("jsonwebtoken");

JWT_SECRET = "djwud";

const generateToken = (id) => {
  return jwt.sign({ id }, JWT_SECRET, {
    expiresIn: "30d",
  });
};

module.exports = generateToken;
