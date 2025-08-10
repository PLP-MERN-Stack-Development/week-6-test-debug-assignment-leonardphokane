// JWT authentication middleware

const jwt = require("jsonwebtoken");
const { log } = require("../utils/logger");
const { JWT_SECRET } = require("../utils/config");

const auth = (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return res.status(401).json({ error: "Unauthorized: No token provided" });
  }

  const token = authHeader.split(" ")[1];

  try {
    const decoded = jwt.verify(token, JWT_SECRET);
    req.user = decoded; // Attach user info to request
    next();
  } catch (err) {
    log("❌ Invalid token");
    return res.status(401).json({ error: "Unauthorized: Invalid token" });
  }
};

module.exports = auth;