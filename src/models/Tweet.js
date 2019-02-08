const mongoose = require('mongoose');

const TweetSchema = new mongoose.Schema({
  author: String,
  content: String,
  likes: {
    type: Number,
    default: 0,
  },
  createdAt: {
    type: Date,
    dafault: Date.now,
  },
});

module.exports = mongoose.model('Tweet', TweetSchema);
