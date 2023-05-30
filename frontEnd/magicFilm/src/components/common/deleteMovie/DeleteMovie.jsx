import React, { useState } from "react";
import MovieDetailContainer from "../../pages/movieDetail/MovieDetailContainer";
import SearchMoviesContainer from "../searchMovies/SearchMoviesContainer";
import { getMovie, deleteMovie } from "../../../services/movieServices";
import "./deleteMovie.css";

const DeleteMovie = () => {
  const [dataSearch, setDataSearch] = useState("");
  const [data, setData] = useState(null);

  const handleSearch = async (e) => {
    setData(await getMovie(e));
  };

  console.log(data?.data[0].id);

  return (
    <div>
      <form action="submit" className="formulario-delete-movie">
        <div className="titulo-delete-movie">Eliminar película</div>

        <SearchMoviesContainer
          setDataSearch={setDataSearch}
          dataSearch={dataSearch}
          handleSearch={handleSearch}
        />

        <MovieDetailContainer />

        <button
          onClick={(e) => {
            deleteMovie(data?.data[0].id);
            e.preventDefault();
          }}
          className="button-delete-movie"
        >
          Eliminar película
        </button>
      </form>
    </div>
  );
};

export default DeleteMovie;
