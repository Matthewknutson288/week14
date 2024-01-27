// Review.js
import React from 'react';
import Stars from './Stars';

const Review = ({ review }) => {
  return (
    <div>
      <p>{review.text}</p>
      <Stars rating={review.rating} />
    </div>
  );
};

export default Review;