// ReviewList component which helped display each of the text reviews

import React from "react";
import Review from "./Review";

const ReviewList = ({ reviews }) => {
  return (
    <div style={{ textAlign: "center" }}>
      {reviews &&
        reviews.map((review, index) => <Review key={index} text={review} />)}
    </div>
  );
};

export default ReviewList;
