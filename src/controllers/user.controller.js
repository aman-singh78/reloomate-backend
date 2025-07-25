const User = require("../models/user.model");
const validate = require("../utils/validate");
const validator = require("validator");

const registerUser = async (req, res) => {
  try {
    const allowedFields = ["name", "email", "password"];
    const extraFields = Object.keys(req.body).filter(
      (key) => !allowedFields.includes(key)
    );
    if (extraFields.length > 0) {
      return res.status(400).json({
        message: `Extra fields are not allowed: ${extraFields.join(", ")}`,
      });
    }
    validate(req.body);
    const { name, email, password } = req.body;

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(409).json({ message: "User already exists" });
    }

    const newUser = new User({ name, email, password });
    await newUser.save();
    res.status(201).json({ message: "User created successfully" });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!validator.isEmail(email)) {
      return res.status(400).json({ message: "Invalid email format" });
    }

    const isUserExist = await User.findOne({ email });
    if (!isUserExist) {
      return res.status(404).json({ message: "User not found" });
    }

    const isPasswordMatched = await isUserExist.validatePassword(password);
    if (!isPasswordMatched) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    const token = isUserExist.getJwt();
    res.cookie("token", token);
    res.status(200).json({ message: "Login successfull" });
  } catch (err) {
    res.status(500).json({ message: "Internal server error" + err.message });
  }
};

const getUserProfile = async (req, res) => {
  try {
    const user = req.user;
    res.status(200).json({
      message: "User Profile Fetched successfully",
      data: {
        name: user.name,
        email: user.email,
      },
    });
  } catch (err) {
    res.status(500).json({ message: "Internal server error" });
  }
};

const getOnboardingContent = (req, res) => {
  const onboardingSteps = [
    {
      title: "Find your ideal roommate",
      description:
        "Browse and connect with like-minded students near your campus.",
      imageUrl: "https://yourcdn.com/images/find-roommate.png",
    },
    {
      title: "Explore verified listings",
      description:
        "Get access to trusted PGs, hostels, and apartments in your area.",
      imageUrl: "https://yourcdn.com/images/explore-listings.png",
    },
    {
      title: "Move in with ease",
      description:
        "Make moving simple with RelooMate’s roommate chat and checklist.",
      imageUrl: "https://yourcdn.com/images/move-in.png",
    },
  ];

  res.status(200).json({ steps: onboardingSteps });
};

module.exports = {
  registerUser,
  loginUser,
  getUserProfile,
  getOnboardingContent,
};
