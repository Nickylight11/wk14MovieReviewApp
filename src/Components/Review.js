// Review component which displayed the content of the specific review

import React from "react";

const Review = ({ author, content, text }) => {
  console.log(text);
  return (
    <div className="review">
      <h4>{author}</h4>
      <p>{text.text}</p>
    </div>
  );
};

export default Review;
