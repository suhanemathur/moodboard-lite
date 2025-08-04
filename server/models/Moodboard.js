// models/Moodboard.js
const mongoose = require('mongoose');

const moodboardSchema = new mongoose.Schema({
  title: { type: String, required: true },
  items: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Item' }],
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
}, { timestamps: true });

module.exports = mongoose.model('Moodboard', moodboardSchema);
