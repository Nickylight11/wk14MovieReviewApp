import React from "react";
import MovieList from "./Components/MovieList";
import stylesheet from "./App.css";

const moviesData = [
  {
    id: 1,
    title: "Forgetting Sarah Marshall",
    image:
      "https://upload.wikimedia.org/wikipedia/en/7/7c/Forgetting_sarah_marshall_ver2.jpg",
    synopsis:
      "Devastated Peter takes a Hawaiian vacation in order to deal with the recent break-up with his TV star girlfriend, Sarah. Little does he know, Sarah's traveling to the same resort as her ex - and she's bringing along her new boyfriend.",
    rating: "R",
  },
  {
    id: 2,
    title: "(500) Days of Summer",
    image:
      "https://upload.wikimedia.org/wikipedia/en/d/d1/Five_hundred_days_of_summer.jpg",
    synopsis:
      "After being dumped by the girl he believes to be his soulmate, hopeless romantic Tom Hansen reflects on their relationship to try and figure out where things went wrong and how he can win her back.",
    rating: "R",
  },
  {
    id: 3,
    title: "The Proposal",
    image: "https://upload.wikimedia.org/wikipedia/en/0/02/The_Proposal.jpg",
    synopsis:
      "A pushy boss forces her young assistant to marry her in order to keep her visa status in the U.S. and avoid deportation to Canada.",
    rating: "R",
  },
  {
    id: 4,
    title: "My Big Fat Greek Wedding",
    image:
      "https://upload.wikimedia.org/wikipedia/en/3/3b/My_Big_Fat_Greek_Wedding_movie_poster.jpg",
    synopsis:
      "A young Greek woman falls in love with a non-Greek and struggles to get her family to accept him while she comes to terms with her heritage and cultural identity.",
    rating: "R",
  },
  {
    id: 5,
    title: "Bridesmaids",
    image:
      "https://upload.wikimedia.org/wikipedia/en/d/df/BridesmaidsPoster.jpg",
    synopsis:
      "Competition between the maid of honor and a bridesmaid, over who is the bride's best friend, threatens to upend the life of an out-of-work pastry chef.",
    rating: "R",
  },
];

const App = () => {
  return (
    <div style={{ textAlign: "center" }}>
      <h1>Top 5 Romantic Comedies</h1>
      <MovieList movies={moviesData} />
    </div>
  );
};

export default App;
