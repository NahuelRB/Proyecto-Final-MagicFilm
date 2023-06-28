import React from "react";
import StarIcon from "@mui/icons-material/Star";
import "./ScoreMovie.css";
const ScoreMovie = ({ value }) => {
  return (
    <div
      style={{ display: "flex", flexDirection: "row", alignItems: "center" }}
    >
      <h3>
        Valoracion Promedio:
        <span className="span">
          <StarIcon
            fontSize="string"
            sx={{ color: "#ffd700", fontSize: "30px" }}
          />
          {value}
        </span>
      </h3>
    </div>
  );
};

export default ScoreMovie;
