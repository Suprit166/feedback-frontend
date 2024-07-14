import React, { useState } from 'react';
import { submitFeedback } from '../services/api';

const FeedbackForm = () => {
  const [category, setCategory] = useState('Product Features');
  const [rating, setRating] = useState(5);
  const [comments, setComments] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    await submitFeedback({ category, rating, comments });
    alert('Feedback submitted successfully');
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Category:
        <select value={category} onChange={(e) => setCategory(e.target.value)}>
          <option value="Product Features">Product Features</option>
          <option value="Product Pricing">Product Pricing</option>
          <option value="Product Usability">Product Usability</option>
        </select>
      </label>
      <label>
        Rating:
        <input type="number" value={rating} onChange={(e) => setRating(e.target.value)} min="1" max="10" />
      </label>
      <label>
        Comments:
        <textarea value={comments} onChange={(e) => setComments(e.target.value)} />
      </label>
      <button type="submit">Submit Feedback</button>
    </form>
  );
};

export default FeedbackForm;
