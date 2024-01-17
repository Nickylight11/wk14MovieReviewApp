// Movie list component where i was able to display each movie
import React from "react";
import Movie from "./Movie";

const MovieList = ({ movies }) => {
  return (
    <div>
      {movies.map((movie, index) => (
        <Movie key={index} movie={movie} />
      ))}
    </div>
  );
};

export default MovieList;
