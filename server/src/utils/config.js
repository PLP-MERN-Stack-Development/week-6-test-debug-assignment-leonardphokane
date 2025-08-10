// Loads environment variables and validates required keys
require("dotenv").config();

const requiredVars = ["PORT", "MONGO_URI", "JWT_SECRET"];

requiredVars.forEach((key) => {
  if (!process.env[key]) {
    throw new Error(`❌ Missing required environment variable: ${key}`);
  }
});

const config = {
  PORT: process.env.PORT || 5000,
  NODE_ENV: process.env.NODE_ENV || "development",
  MONGO_URI: process.env.MONGO_URI,
  JWT_SECRET: process.env.JWT_SECRET,
  JWT_EXPIRES_IN: process.env.JWT_EXPIRES_IN || "1h", // Optional with default
};

module.exports = config;