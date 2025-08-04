const express = require('express');
const router = express.Router();
const Moodboard = require('../models/Moodboard');
const Item = require('../models/Item');
const authMiddleware = require('../middleware/auth');

router.post('/create', authMiddleware, async (req, res) => {
  const { title, items } = req.body;
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const existing = await Moodboard.findOne({
    user: req.userId,
    createdAt: { $gte: today }
  });

  if (existing) return res.status(400).json({ message: 'You have already created a moodboard today.' });

  try {
    const savedItems = await Item.insertMany(items.map(item => ({ ...item, user: req.userId })));
    const newBoard = await Moodboard.create({
      title,
      user: req.userId,
      items: savedItems.map(item => item._id)
    });
    res.status(201).json(newBoard);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

router.get('/myboards', authMiddleware, async (req, res) => {
  try {
    const boards = await Moodboard.find({ user: req.userId }).populate('items');
    res.json(boards);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
