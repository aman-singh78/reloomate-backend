const express = require("express");
const profileRoute = express.Router();
const { registerUser, loginUser } = require("../controllers/user.controller");

profileRoute.post("/user/register", registerUser);
profileRoute.post("/user/login", loginUser);

module.exports = profileRoute;
