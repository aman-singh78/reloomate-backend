const mongoose = require("mongoose");

const connectDb = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
  } catch (err) {
    console.error("MongoDB connection error:", err.message);
    process.exit(1);
  }
};

module.exports = connectDb;
