import React from "react";
import MovieDetailContainer from "../../pages/movieDetail/MovieDetailContainer";
import SearchMoviesContainer from "../searchMovies/SearchMoviesContainer";
import "./deleteMovie.css";

const DeleteMovie = () => {
  return (
    <div>
      <form action="submit" className="formulario-delete-movie">
        <div className="titulo-delete-movie">Eliminar película</div>

        <SearchMoviesContainer />

        <MovieDetailContainer/>

        <button className="button-delete-movie">Eliminar película</button>
      </form>
    </div>
  );
};

export default DeleteMovie;
