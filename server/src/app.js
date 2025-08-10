const express = require("express");
const cors = require("cors");
const exampleRoutes = require("./routes/exampleRoutes");
const greetingRoutes = require("./routes/greetingRoutes");
const errorHandler = require("./middleware/errorHandler");

const app = express();

app.use(cors());
app.use(express.json());

// Routes
app.use("/api/example", exampleRoutes);
app.use("/api/greeting", greetingRoutes);

// Error middleware
app.use(errorHandler);

module.exports = app;