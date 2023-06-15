import React from "react";
import Box from "@mui/material/Box";
import Rating from "@mui/material/Rating";
import Typography from "@mui/material/Typography";

const RatingMovie = (props) => {
  const { value, setValue } = props;
  return (
    <Box
      sx={{
        "& > legend": { mt: 2 },
      }}
    >
      <Typography component="legend" variant="h4" color="secundary">
        Calificación
      </Typography>
      <Rating
        style={{ fontSize: "40px", color: "#00C9C8", width: "200px" }}
        precision={1}
        name="simple-controlled"
        value={value}
        size="string"
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      />
    </Box>
  );
};

export default RatingMovie;
