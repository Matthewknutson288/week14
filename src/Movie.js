// Movie.js
import React, { useState } from 'react';
import Stars from './Stars';
import ReviewList from './ReviewList';
import ReviewForm from './ReviewForm';

const Movie = ({ movie, addReview }) => {
  const [reviewText, setReviewText] = useState('');
  const [rating, setRating] = useState(1);

  const submitReview = (e) => {
    e.preventDefault();
    addReview(movie.id, reviewText, rating);
    setReviewText('');
    setRating(1);
  };

  return (
    <div>
      <h2>{movie.title}</h2>
      <img src={movie.image} alt={movie.title} />
      <p>{movie.synopsis}</p>
      <Stars rating={movie.rating} />
      <ReviewList reviews={movie.reviews} />
      <ReviewForm reviewText={reviewText} setReviewText={setReviewText} rating={rating} setRating={setRating} submitReview={submitReview} />
    </div>
  );
};

export default Movie;