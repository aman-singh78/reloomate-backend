const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");

dotenv.config();

const app = express();

const connectDb = require("./src/config/database");
const PORT = process.env.PORT || 5000;

app.use(cors());

app.get("/", (req, res) => {
  res.send("✅ RelooMate Backend is running!");
});

connectDb()
  .then(() => {
    console.log("Database connected successfully..");
    app.listen(PORT, () => {
      console.log(`Server is running at ${PORT}`);
    });
  })
  .catch((err) => {
    console.error(" Failed to connect to DB:", err.message);
    process.exit(1);
  });
