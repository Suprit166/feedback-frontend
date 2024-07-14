const express = require('express');
const mongoose = require('mongoose');
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const keys = require('./config');
const routes = require('./routes');
require('../models');

mongoose.connect(keys.mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
.then(() => {
  console.log('MongoDB connected');
  const app = express();




app.use(express.json());
app.use(passport.initialize());

passport.use(new GoogleStrategy({
  clientID: keys.googleClientID,
  clientSecret: keys.googleClientSecret,
  callbackURL: '/auth/google/callback',
}, (token, tokenSecret, profile, done) => {
  const User = mongoose.model('User');
  User.findOne({ googleId: profile.id }).then(existingUser => {
    if (existingUser) {
      done(null, existingUser);
    } else {
      new User({ googleId: profile.id, displayName: profile.displayName }).save().then(user => done(null, user));
    }
  });
}));

app.use(routes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

})
.catch(err => console.log(err));