// Movie component where i was able to show the movie image, title and some styling. This also hosted review data
import { useState } from "react";
import Stars from "./Stars";
import ReviewList from "./ReviewList";
import ReviewForm from "./ReviewForm";

const Movie = ({ movie }) => {
  const [reviews, setReviews] = useState([]);
  function hostReviews(newReview) {
    setReviews([reviews, newReview]);
    console.log("hosting data to the reviews array");
  }
  return (
    <div
      style={{
        textAlign: "center",
        border: "5px solid black",
        padding: "10px",
        margin: "10px",
      }}
    >
      <img
        src={movie.image}
        alt={movie.title}
        style={{ maxWidth: "100%", height: "auto" }}
      />
      <h2 style={{ margin: "10px 0" }}>{movie.title}</h2>
      <p style={{ border: "5px solid black", padding: "10px" }}>
        {movie.synopsis}
      </p>
      <p style={{ border: "5px solid black", padding: "10px" }}>
        {movie.rating}
      </p>
      <Stars />
      <ReviewList reviews={reviews} />
      <ReviewForm movie={movie} hostReviews={hostReviews} />
    </div>
  );
};

export default Movie;
