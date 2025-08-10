// Handles business logic for example routes

const getExample = (req, res) => {
  res.status(200).json({ message: "Example data retrieved successfully" });
};

module.exports = {
  getExample,
};