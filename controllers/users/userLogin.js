const { db } = require("../../database");
const crypto = require("crypto");
const createToken = require("../../utils/createToken");
const res = require("express/lib/response");

const loginUser = (request, response) => {
  // const passwordUser = crypto
  //   .createHmac("sha1", "test123")
  //   .update(request.body.password)
  //   .digest("hex");
  const credential = {
    email: request.body.email,
    password: request.body.password,
  };
  const loginQuery = `Select * from user where email like ${db.escape(
    credential.email
  )} and password like ${db.escape(credential.password)}`;
  db.query(loginQuery, (error, results) => {
    if (error) {
      response.status(500).send({ message: `something went wrong ${error}` });
    } else {
      console.log(results);
      response.status(200).send({ message: `Succes!${results[0]}` });
    }
  });
};

module.exports = loginUser;
