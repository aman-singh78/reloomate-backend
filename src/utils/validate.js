const validator = require("validator");

const validate = (req) => {
  const { name, email, password } = req;

  if (!name || !email || !password) {
    throw new Error("All fields (name, email, password) are required");
  }

  if (!validator.isEmail(email)) {
    throw new Error("Invalid email format");
  }

  if (
    !validator.isStrongPassword(password, {
      minLength: 6,
      maxLength: 20,
      minLowercase: 1,
      minUppercase: 1,
      minNumbers: 1,
      minSymbols: 1,
    })
  ) {
    throw new Error(
      "Password must be 6–20 characters long and include uppercase, lowercase, number, and symbol"
    );
  }
};

module.exports = validate;
