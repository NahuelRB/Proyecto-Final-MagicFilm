import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./movieDetail.css";
import MovieDetail from "./MovieDetail";
import { getMovieById } from "../../../service/productServices";

const obtenerIdVideoYoutube = (url) => {
  const regex =
    /^(?:https?:\/\/)?(?:www\.)?youtube\.com\/watch\?v=([^&]+)(?:&.*)?$/;
  const match = url.match(regex);

  if (match && match[1]) {
    return `https://www.youtube.com/embed/${match[1]}`;
  } else {
    return url;
  }
};

const MovieDetailContainer = () => {
  const { id } = useParams();

  const [dataMovie, setDataMovie] = useState({});
  console.log(id);

  useEffect(() => {
    const movieById = getMovieById(id);
    movieById
      .then((res) => {
        const data = res.data;
        data.trailer = obtenerIdVideoYoutube(data.trailer);
        setDataMovie(data);
      })
      .catch((error) => console.log(error));
  }, [id]);

  return (
    <div>
      <h2 className="titleRecommendedMovies">Detalle Pelicula</h2>
      <MovieDetail dataMovie={dataMovie} />
    </div>
  );
};

export default MovieDetailContainer;
