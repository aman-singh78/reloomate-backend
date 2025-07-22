const express = require("express");
const profileRoute = express.Router();
const userAuth = require("../middlewares/userAuth");
const {
  registerUser,
  loginUser,
  getUserProfile,
  getOnboardingContent,
} = require("../controllers/user.controller");

profileRoute.post("/api/register", registerUser);
profileRoute.post("/api/login", loginUser);

profileRoute.get("/api/profile", userAuth, getUserProfile);
profileRoute.get("/api/onBoarding", getOnboardingContent);

module.exports = profileRoute;
