import React from "react";

const MovieDetail = (props) => {
  const { dataMovie } = props;
  console.log(dataMovie);
  return (
    <div className="container">
      <div className="container-details">
        <img src={dataMovie.image} alt="" className="img-detail-movies" />
        <div className="movie-details">
          <h3>Detalle de la película</h3>
          <p>
            <b>Título: </b>
            {dataMovie.title}
          </p>
          <p>
            <b>Fecha de estreno: </b>
            {dataMovie.release_date}
          </p>
          <p>
            <b>Género: </b>
            {dataMovie.gender}
          </p>
        </div>
        <div>
          {dataMovie.trailer && (
            <iframe
              width="560"
              height="315"
              src={dataMovie.trailer}
              title="YouTube video player"
              frameBorder="0"
              allow=" autoplay; fullscreen; picture-in-picture"
              allowFullScreen="allowFullScreen"
            ></iframe>
          )}
        </div>
      </div>
      <div className="detail-summary">
        <p>
          <b>Resumen:</b>
          {dataMovie.summary}
        </p>
      </div>
    </div>
  );
};

export default MovieDetail;
