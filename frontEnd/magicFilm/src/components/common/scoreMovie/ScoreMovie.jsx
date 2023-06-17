import React from "react";
import StarIcon from "@mui/icons-material/Star";
import Typography from "@mui/material/Typography";

const ScoreMovie = () => {
  return (
    <div style={{ display: "flex", flexDirection: "row" }}>
      <StarIcon
        fontSize="string"
        sx={{ color: "#ffd700", fontSize: "60px" }}
      ></StarIcon>

      <Typography
        variant="h3"
        color="initial"
        sx={{ fontSize: "50px", margin: "auto 10px" }}
      >
        4.5
      </Typography>
    </div>
  );
};

export default ScoreMovie;
