const express = require('express');
const router = express.Router();
const Greeting = require('../models/Greeting');

// GET /api/greeting?name=Leonard — Personalized greeting
router.get('/', (req, res) => {
  const name = req.query.name || 'Guest';
  res.json({ message: `Hello, ${name}! 👋` });
});

// POST /api/greeting — Save greeting to DB
router.post('/', async (req, res) => {
  const { name } = req.body;

  if (!name) {
    return res.status(400).json({ error: 'Name is required' });
  }

  try {
    const greeting = new Greeting({ name });
    await greeting.save();
    res.json({ message: `Hello, ${name}! 👋 (via POST)`, id: greeting._id });
  } catch (err) {
    console.error('❌ Error saving greeting:', err.message);
    res.status(500).json({ error: 'Failed to save greeting' });
  }
});

// GET /api/greeting/all — List all greetings
router.get('/all', async (req, res) => {
  try {
    const greetings = await Greeting.find().sort({ createdAt: -1 });
    res.json(greetings);
  } catch (err) {
    console.error('❌ Error fetching greetings:', err.message);
    res.status(500).json({ error: 'Failed to fetch greetings' });
  }
});

// DELETE /api/greeting/:id — Delete greeting by ID
router.delete('/:id', async (req, res) => {
  try {
    const deleted = await Greeting.findByIdAndDelete(req.params.id);
    if (!deleted) {
      return res.status(404).json({ error: 'Greeting not found' });
    }
    res.json({ message: `Deleted greeting for ${deleted.name}` });
  } catch (err) {
    console.error('❌ Error deleting greeting:', err.message);
    res.status(500).json({ error: 'Failed to delete greeting' });
  }
});

// PUT /api/greeting/:id — Update greeting name
router.put('/:id', async (req, res) => {
  const { name } = req.body;

  if (!name) {
    return res.status(400).json({ error: 'Name is required for update' });
  }

  try {
    const updated = await Greeting.findByIdAndUpdate(
      req.params.id,
      { name },
      { new: true }
    );

    if (!updated) {
      return res.status(404).json({ error: 'Greeting not found' });
    }

    res.json({ message: `Updated greeting to ${updated.name}`, data: updated });
  } catch (err) {
    console.error('❌ Error updating greeting:', err.message);
    res.status(500).json({ error: 'Failed to update greeting' });
  }
});

module.exports = router;