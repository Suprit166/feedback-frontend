const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  googleId: String,
  displayName: String,
});

const feedbackSchema = new mongoose.Schema({
  userId: mongoose.Schema.Types.ObjectId,
  category: String,
  rating: Number,
  comments: String,
  date: { type: Date, default: Date.now },
});

// mongoose.model('User', userSchema);
mongoose.model('Feedback', feedbackSchema);


module.exports = Feedback;