const jwt = require("jsonwebtoken");

const createToken = (payload) => {
  return jwt.sign(payload, "Key123", {
    expiresIn: "10h",
  });
};

module.exports = createToken;
