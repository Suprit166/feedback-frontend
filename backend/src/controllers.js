const mongoose = require('mongoose');
const axios = require('axios');
const Feedback = mongoose.model('Feedback');

module.exports = {
  submitFeedback: async (req, res) => {
    const { userId, category, rating, comments } = req.body;
    const feedback = new Feedback({ userId, category, rating, comments });
    await feedback.save();

    // Send feedback to Frill.co
    // await axios.post('https://api.frill.co/v1/feedback', {
    //   category,
    //   rating,
    //   comments,
    // }, {
    //   headers: { 'Authorization': `Bearer ${process.env.FRILL_API_KEY}` },
    // });

    res.status(200).send({ message: 'Feedback submitted successfully' });
  },
  getFeedback: async (req, res) => {
    const feedbacks = await Feedback.aggregate([
      { $group: { _id: "$category", averageRating: { $avg: "$rating" }, comments: { $push: "$comments" } } },
    ]);
    res.status(200).send(feedbacks);
  },
};
