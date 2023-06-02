import { React } from "react";
import "./movieDetail.css";
import { Link } from "react-router-dom";
import visual from "../../../assets/icon/visual.svg";
import parking from "../../../assets/icon/parking.svg";
import snak from "../../../assets/icon/snak.svg";
import sound from "../../../assets/icon/sound.svg";
import chair from "../../../assets/icon/chair.svg";
import iceCream from "../../../assets/icon/iceCream.svg";
import { Box, Grid } from "@mui/material";

const MovieDetail = (props) => {
  const { dataMovie } = props;
  // console.log(dataMovie);
  return (
    <div className="container">
      <h2 className="titleRecommendedMovies">Detalle Pelicula</h2>
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
            {dataMovie.gender?.name ? dataMovie.gender?.name : dataMovie.gender}
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
          <b>Resumen: </b>
          {dataMovie.summary}
        </p>
      </div>
      <section
        className="container-box"
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gridTemplateRows: "repeat(2, 1fr)",
          gap: "10px",
          border: "3px solid #00c9c8",
          borderRadius: "81px",
          width: "100%",
          margin: "0",
        }}
      >
        <div style={{ margin: "50px", display: "flex", alignItems: "center" }}>
          <img src={visual} alt="" className="visual" />
          <p style={{ marginLeft: "10px" }}>Sala 3D</p>
        </div>

        <div style={{ margin: "30px", display: "flex", alignItems: "center" }}>
          <img src={parking} alt="" className="parking" />{" "}
          <p>Parqueadero gratuito</p>
        </div>
        <div style={{ margin: "30px", display: "flex", alignItems: "center" }}>
          <img src={snak} alt="" className="snak" />{" "}
          <p>Llevanos a tu asiento</p>
        </div>
        <div style={{ margin: "50px", display: "flex", alignItems: "center" }}>
          <img src={chair} alt="" className="chair" /> <p>Sillas reclinables</p>
        </div>
        <div style={{ margin: "50px", display: "flex", alignItems: "center" }}>
          <img src={sound} alt="" className="sound" /> <p>Sonido envolvente</p>
        </div>
        <div style={{ margin: "50px", display: "flex", alignItems: "center" }}>
          <img src={iceCream} alt="" className="iceCream" />{" "}
          <p>Heladería y zona de comidas</p>
        </div>
      </section>
    </div>
  );
};

export default MovieDetail;
