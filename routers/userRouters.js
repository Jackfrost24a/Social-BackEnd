const express = require("express");
const routers = express.Router();
const userController = require("../controllers/users");

routers.post("/login", userController.login);

module.exports = routers;
