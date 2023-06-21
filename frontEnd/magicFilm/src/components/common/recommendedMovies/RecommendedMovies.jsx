import React from "react";
import InfoMovie from "../infoMovie/InfoMovie";

const recommendedMovies = (props) => {
  const { dataMovies } = props;
  const limitedMovies = dataMovies.slice(0, 5); // Limitar a 5 películas

  return (
    <div className="container-home-card">
      {limitedMovies.map((movie) => (
        <InfoMovie key={movie.id} movie={movie} />
      ))}
    </div>
  );
};

export default recommendedMovies;
