const User = require("../models/user.model");
const validate = require("../utils/validate");

const registerUser = async (req, res) => {
  try {
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

module.exports = registerUser;
