const mongoose = require('mongoose');

const recipeSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  description: String,
  youtube_url: String,
  thumbnail: String,
  ingredients: [
    {
      name: String,
      quantity: Number,
      unit: String,
      notes: String
    }
  ],
  steps: [
    {
      instruction: String,
      timer_seconds: Number
    }
  ],
  servings: {
    type: Number,
    default: 1
  },
  difficulty: {
    type: String,
    enum: ['beginner', 'home', 'confident', 'chef'],
    default: 'beginner'
  },
  cuisine: String,
  tags: [String],
  nutrition: {
    calories: Number,
    protein: Number,
    carbs: Number,
    fat: Number
  },
  created_by: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  },
  avg_rating: {
    type: Number,
    default: 0
  },
  ratings_count: {
    type: Number,
    default: 0
  },
  created_at: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Recipe', recipeSchema);
