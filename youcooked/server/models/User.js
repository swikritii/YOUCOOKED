const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true
  },
  password_hash: {
    type: String,
    required: true
  },
  skill_level: {
    type: String,
    enum: ['beginner', 'home', 'confident', 'chef'],
    default: 'beginner'
  },
  streak_count: {
    type: Number,
    default: 0
  },
  last_cooked_date: Date,
  xp: {
    type: Number,
    default: 0
  },
  badges: [String],
  calorie_goal: {
    type: Number,
    default: 2000
  },
  unit_preference: {
    type: String,
    enum: ['metric', 'imperial'],
    default: 'metric'
  },
  created_at: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('User', userSchema);
