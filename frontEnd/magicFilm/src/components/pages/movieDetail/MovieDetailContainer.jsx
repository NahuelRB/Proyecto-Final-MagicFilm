import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./movieDetail.css"
import MovieDetail from "./MovieDetail";
import { getMovieById } from "../../../service/productServices";

const MovieDetailContainer = () => {

  const { id } = useParams();

  const [dataMovie, setDataMovie] = useState({});
  console.log(id)

  useEffect(() => {
    const movieById = getMovieById(id);
    movieById
      .then((res) => setDataMovie(res.data))
      .catch((error) => console.log(error));
    
  }, [id]);

  return (
    <div>
      <h2 className="titleRecommendedMovies">Detalle Pelicula</h2>
       <MovieDetail 
       dataMovie={dataMovie}/>
    </div>
  );
};

export default MovieDetailContainer;
