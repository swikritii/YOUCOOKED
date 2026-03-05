const mongoose = require('mongoose');

const timerMessageSchema = new mongoose.Schema({
  dish_tag: {
    type: String,
    required: true,
    unique: true
  },
  messages: [String]
});

module.exports = mongoose.model('TimerMessage', timerMessageSchema);
