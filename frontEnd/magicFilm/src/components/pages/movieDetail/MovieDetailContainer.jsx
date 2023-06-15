import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./movieDetail.css";
import MovieDetail from "./MovieDetail";
import { getMovieById } from "../../../service/productServices";
import { AuthContext } from "../../../context/AuthContext";
import { Troubleshoot } from "@mui/icons-material";

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
  const[login, setLogin]= useState(true)
  const { user } = useContext(AuthContext);


  const { id } = useParams();

  const [dataMovie, setDataMovie] = useState({});


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

  return <MovieDetail dataMovie={dataMovie} user={user} login={login} setLogin={setLogin}/>;
};

export default MovieDetailContainer;
