import React from "react";
import Box from "@mui/material/Box"; // Import Box component from Material-UI
import Rating from "@mui/material/Rating"; // Import Rating component from Material-UI

const Stars = () => {
  // Your star rating logic goes here
  return (
    <Box>
      <Rating name="stars" />
    </Box>
  );
};

export default Stars;
