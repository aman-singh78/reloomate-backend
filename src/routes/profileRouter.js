const express = require("express");
const profileRoute = express.Router();
const registerUser = require("../controllers/user.controller");

profileRoute.post("/user/register", registerUser);

module.exports = profileRoute;
