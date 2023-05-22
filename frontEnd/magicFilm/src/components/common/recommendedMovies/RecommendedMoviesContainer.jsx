import React, { useState } from "react";
import RecommendedMovies from "./recommendedMovies";
import film from "../../../../films";
import "./recommendedMovies.css";

const RecommendedMoviesContainer = () => {
  const [dataMovies, setDataMovies] = useState(film);

  console.log(dataMovies);

  return (
    <div>
      <h2 className="titleRecommendedMovies">Películas Recomendadas</h2>
      <RecommendedMovies dataMovies={dataMovies} />
    </div>
  );
};

export default RecommendedMoviesContainer;
