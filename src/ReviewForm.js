// ReviewForm.js
import React from 'react';
import Stars from './Stars';

const ReviewForm = ({ reviewText, setReviewText, rating, setRating, submitReview }) => {
  return (
    <form onSubmit={submitReview}>
      <textarea value={reviewText} onChange={(e) => setReviewText(e.target.value)} />
      <button type="submit">Submit Review</button>
    </form>
  );
};

export default ReviewForm;