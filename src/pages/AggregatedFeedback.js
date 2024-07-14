import React, { useEffect, useState } from 'react';
import { getFeedback } from '../services/api';

const AggregatedFeedback = () => {
  const [feedbacks, setFeedbacks] = useState([]);

  useEffect(() => {
    (async () => {
      const { data } = await getFeedback();
      setFeedbacks(data);
    })();
  }, []);

  return (
    <div>
      <h1>Aggregated Feedback</h1>
      {feedbacks.map((feedback, index) => (
        <div key={index}>
          <h2>{feedback._id}</h2>
          <p>Average Rating: {feedback.averageRating}</p>
          <ul>
            {feedback.comments.map((comment, i) => (
              <li key={i}>{comment}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default AggregatedFeedback;