const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const connectDb = require("./src/config/database");
const profileRoute = require("./src/routes/profileRouter");

dotenv.config();

const app = express();

const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.use("/", profileRoute);

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
