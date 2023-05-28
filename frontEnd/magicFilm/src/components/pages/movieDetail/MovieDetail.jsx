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
      <Box
        className="Box"
        style={{
          border: "5px solid #00C9C8",
          borderRadius: "41px",
          display: "flex",
          flexDirection: "column",
          alignitems: "center",
          width: "100%",
          margin: "100px",
          padding: "30px",
        }}
      >
        <h2 style={{ display: "flex", fontSize: "25px", alignItems: "center" }}>
          Disfrutarás esta película en el mejor cinema
        </h2>
        <Grid container spacing={12} style={{ margin: "10px" }}>
          <Grid item xs={4}>
            <img src={visual} alt="" className="visual" />{" "}
            <h3 style={{ textAlign: "center", margin: "-40px" }}>Sala 3D</h3>
          </Grid>
          <Grid item xs={4}>
            <img src={parking} alt="" className="parking" />{" "}
            <h3 style={{ textAlign: "center", margin: "-55px" }}>
              Parqueadero gratuito
            </h3>
          </Grid>
          <Grid item xs={4}>
            <img src={snak} alt="" className="snak" />{" "}
            <h3 style={{ textAlign: "center", margin: "-60px" }}>
              Llevamos a tu asiento
            </h3>
          </Grid>
          <Grid item xs={4}>
            <img src={chair} alt="" className="chair" />{" "}
            <h3 style={{ margin: "-50px", textAlign: "center" }}>
              Sillas reclinables
            </h3>
          </Grid>
          <Grid item xs={4}>
            <img src={sound} alt="" className="sound" />{" "}
            <h3 style={{ margin: "-50px", textAlign: "center" }}>
              Sonido envolvente
            </h3>
          </Grid>
          <Grid item xs={4}>
            <img src={iceCream} alt="" className="iceCream" />{" "}
            <h3 style={{ marginTop: "-50px", textAlign: "center" }}>
              Heladería y zona de comidas
            </h3>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
};

export default MovieDetail;
