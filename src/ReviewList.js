// ReviewList.js
import React from 'react';
import Review from './Review';

const ReviewList = ({ reviews }) => {
  return reviews.map((review, index) => <Review key={index} review={review} />);
};

export default ReviewList;