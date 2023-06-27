import React, { useState } from "react";
import RatingMovie from "./RatingMovie";
import { createScore } from "../../../service/rating";
const RatingMovieContainer = (props) => {
  const { dataMovie, user, value, setValue } = props;
  const handleRating = (newValue) => {
    const ratingData = {
      score: newValue,
      movie_id: dataMovie.id,
      user_id: parseInt(user.id),
    };
    createScore(ratingData);
    setValue(newValue);
    
  };

  return <RatingMovie value={value} setValue={handleRating} />;
};

export default RatingMovieContainer;
