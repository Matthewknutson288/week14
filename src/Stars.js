import React, { useState } from 'react';

const Stars = () => {
  const [selectedStars, setSelectedStars] = useState(0);

  return (
    <div>
      {[...Array(5)].map((star, i) => {
        const starValue = i + 1;

        return (
          <span
            key={i}
            className={starValue <= selectedStars ? 'star filled' : 'star'}
            onClick={() => setSelectedStars(starValue)}
          >
            ★
          </span>
        );
      })}
    </div>
  );
};

export default Stars;