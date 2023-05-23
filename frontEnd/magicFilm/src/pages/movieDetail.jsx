import React, { useEffect, useState } from "react";
import Layout from "../components/layout/Layout";
import "./movieDetail.css";
import { useParams } from "react-router-dom";
import films from "../../films.json";

const MovieDetail = () => {
  const { id } = useParams();
  const [url, setUrl] = useState(null);

  const [film, setFilm] = useState(null);
  useEffect(() => {
    console.log(
      "id",
      id,
      films.find((film) => film.id === parseInt(id, 10))
    );
    setFilm(films.find((film) => film.id === parseInt(id, 10)));
    setUrl(
      obtenerIdVideoYoutube(
        films.find((film) => film.id === parseInt(id, 10)).trailer
      )
    );
  }, [id]);

  function obtenerIdVideoYoutube(url) {
    const regex =
      /^(?:https?:\/\/)?(?:www\.)?youtube\.com\/watch\?v=([^&]+)(?:&.*)?$/;
    const match = url.match(regex);

    if (match && match[1]) {
      return `https://www.youtube.com/embed/${match[1]}`;
    } else {
      return url;
    }
  }

  return (
    <Layout>
      <div className="container">
        {film && (
          <>
            <div className="container-details">
              <img src={film.image} alt="" className="img-detail-movies" />
              <div className="movie-details">
                <h3>Detalle de la película</h3>
                <p>
                  <b>Título: </b>
                  {film.name}
                </p>
                <p>
                  <b>Fecha de estreno: </b>
                  {film.release_date}
                </p>
                <p>
                  <b>Género: </b>
                  {film.gender}
                </p>
              </div>
              <div>
                {url && (
                  <iframe
                    width="560"
                    height="315"
                    src={url}
                    title="YouTube video player"
                    frameborder="0"
                    allow=" autoplay; fullscreen; picture-in-picture"
                    allowFullScreen="allowFullScreen"
                  ></iframe>
                )}
              </div>
            </div>
            <div className="detail-summary">
              <p>
                <b>Resumen:</b>
                {film.summary}
              </p>
            </div>
          </>
        )}
      </div>
    </Layout>
  );
};

export default MovieDetail;
