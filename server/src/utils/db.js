// MongoDB connection logic with logging

const mongoose = require("mongoose");
const { MONGO_URI } = require("./config");
const { log } = require("./logger");

const connectDB = async () => {
  try {
    await mongoose.connect(MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    log("✅ MongoDB connected successfully");
  } catch (error) {
    log("❌ MongoDB connection failed");
    console.error(error.message);
    process.exit(1); // Exit process if DB fails
  }
};

module.exports = connectDB;