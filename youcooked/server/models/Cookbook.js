const mongoose = require('mongoose');

const cookbookSchema = new mongoose.Schema({
  user_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  recipe_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Recipe',
    required: true
  },
  personal_notes: String,
  times_cooked: {
    type: Number,
    default: 0
  },
  last_cooked: Date,
  user_rating: Number,
  saved_at: {
    type: Date,
    default: Date.now
  }
});

// Compound index to prevent duplicates
cookbookSchema.index({ user_id: 1, recipe_id: 1 }, { unique: true });

module.exports = mongoose.model('Cookbook', cookbookSchema);
