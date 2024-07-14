const express = require('express');
const passport = require('passport');
const { submitFeedback, getFeedback } = require('./controllers');
const router = express.Router();

// Google OAuth routes
router.get('/auth/google', passport.authenticate('google', {
  scope: ['profile', 'email'],
}));

router.get('/auth/google/callback', passport.authenticate('google'), (req, res) => {
  res.redirect('/'); // Redirect to the frontend after successful login
});

// Feedback routes
router.post('/feedback', submitFeedback);
router.get('/feedback', getFeedback);

module.exports = router;
