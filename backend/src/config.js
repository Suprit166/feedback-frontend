require('dotenv').config();

module.exports = {
  googleClientID: process.env.GOOGLE_CLIENT_ID,
  googleClientSecret: process.env.GOOGLE_CLIENT_SECRET,
  // frillApiKey: process.env.FRILL_API_KEY,
  mongoURI: process.env.MONGO_URI,
};
