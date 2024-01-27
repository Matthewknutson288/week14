// App.js
import React, { useState } from 'react';
import MovieList from './MovieList';
import './App.css';

const App = () => {
  const [movies, setMovies] = useState([
    { id: 1, title: 'Dune', image: 'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQPqS6UaUbAFXbexufzQLa9PrCxjjw5MFTsEjsDC0ppVOhBcrmw', synopsis: 'A noble family becomes embroiled in a war for control over the galaxys most valuable asset while its heir becomes troubled by visions of a dark future', rating: 4, reviews: [] },
    { id: 2, title: 'Ready Player One', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0Rpzz9KYHkeefCLdnM3vU8CHHTHq0eAPSKY0OyIpFVca-D4E-', synopsis: 'In 2045 the planet is on the brink of chaos and collapse, but people find salvation in the OASIS: an expansive virtual reality universe created by eccentric James Halliday. When Halliday dies, he promises his immense fortune to the first person to discover a digital Easter egg thats hidden somewhere in the OASIS. When young Wade Watts joins the contest, he finds himself becoming an unlikely hero in a reality-bending treasure hunt through a fantastical world of mystery, discovery and danger.', rating: 4, reviews: [] },
    { id: 3, title: 'The Butterfly Effect', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZFwRRMC3g0sGvlasPtRSZzDWWoOYy243cc-HXdosyIMdWBe4W', synopsis: 'Evan Treborn suffers blackouts during significant events of his life. As he grows up, he finds a way to remember these lost memories and a supernatural way to alter his life by reading his journal.', rating: 4, reviews: [] },
  ]);

  const addReview = (movieId, reviewText, rating) => {
    setMovies(movies.map(movie => movie.id === movieId ? { ...movie, reviews: [...movie.reviews, { text: reviewText, rating }] } : movie));
  };

  return <MovieList movies={movies} addReview={addReview} />;
};

export default App;