// Movie.js
import React from "react";
import Stars from "./Stars";
import ReviewList from "./ReviewList";
import ReviewForm from "./ReviewForm";

const Movie = ({ movie }) => {
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
      <p style={{ border: "5px solid #ccc", padding: "10px" }}>
        {movie.synopsis}
      </p>
      <p style={{ border: "5px solid #ccc", padding: "10px" }}>
        {movie.rating}
      </p>
      <Stars />
      <ReviewList />
      <ReviewForm />
    </div>
  );
};

export default Movie;
