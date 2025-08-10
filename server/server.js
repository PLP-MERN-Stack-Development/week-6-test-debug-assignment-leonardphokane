const app = require("./src/app");
const { PORT } = require("./src/utils/config");
const connectDB = require("./src/utils/db");

// Connect to MongoDB
connectDB();

// Root route
app.get('/', (req, res) => {
  res.send('🚀 Server is up and running!');
});

// Sample API route
app.get('/api/greeting', (req, res) => {
  res.json({ message: 'Hello from the backend 👋' });
});

// Start the server
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});