// Stars component where the stars rating was designed to have a separate rating compared to the text review.

import React, { useState } from "react";
import Box from "@mui/material/Box";
import Rating from "@mui/material/Rating";

const Stars = () => {
  const [rating, setRating] = useState(0);
  const [reviewSubmitted, setReviewSubmitted] = useState(false);

  const handleRatingChange = (event, newValue) => {
    setRating(newValue);
  };

  const handleSubmitReview = () => {
    setReviewSubmitted(true);
  };

  return (
    <Box>
      {reviewSubmitted ? (
        <p>Thank you for your review! Rated: {rating}</p>
      ) : (
        <div>
          <Rating
            name="stars"
            value={rating}
            onChange={handleRatingChange}
            precision={0.5}
          />
          <button onClick={handleSubmitReview}>Submit Review</button>
        </div>
      )}
    </Box>
  );
};

export default Stars;
