// server/routes/itemRoutes.js
const express = require('express');
const router = express.Router();
const Item = require('../models/Item');
const authMiddleware = require('../middleware/auth');

router.post('/create', authMiddleware, async (req, res) => {
  const { type, content } = req.body;

  if (!type || !content) {
    return res.status(400).json({ message: 'Missing type or content' });
  }

  try {
    const newItem = await Item.create({
      type,
      content,
      user: req.userId
    });

    res.status(201).json(newItem);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
