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
import QualificationMovieContainer from "../../common/qualificationMovie/QualificationMovieContainer";

const MovieDetail = (props) => {
  const { dataMovie } = props;
  console.log(dataMovie.trailer_images);
  return (
    <div className="container">
      <h1 className="titleRecommendedMovies">Detalle Película</h1>

      <div className="container-detail-movie">

      <div className="container-detail-movie-properties">
        <img
          className="container-detail-movie-properties-image"
          src={dataMovie.image}
          alt=""
        />

        <div className="container-detail-movie-properties-text">
          <QualificationMovieContainer />
          <h1>Detalle película</h1>
          <h2  >
            Título: <span className="container-detail-movie-properties-span">{dataMovie.title}</span>
          </h2>
          <h2>
            Fecha de estreno: <span className="container-detail-movie-properties-span">{dataMovie.release_date}</span>{" "}
          </h2>
          <h2>
            Género:{" "}
            <span className="container-detail-movie-properties-span">
              {dataMovie.gender?.name
                ? dataMovie.gender?.name
                : dataMovie.gender}
            </span>
          </h2>
          <h2>
            Tráiler:{" "}
            <span className="container-detail-movie-properties-span" >
              <a href={dataMovie.trailer} target="_blank" style={{textDecoration:"none", color:"#00C9C8", fontWeight:"700"}} >Miralo aquí</a>
            </span>
          </h2>
        </div>
      </div>

      <div className="container-detail-movie-galery">
        
        <img
          src="https://res.cloudinary.com/dmzibpgwk/image/upload/v1685737714/integradorDh/image_79_a69z7h.png"
          alt=""
        />
        <img
          src="https://res.cloudinary.com/dmzibpgwk/image/upload/v1685737713/integradorDh/image_81_bqrueb.png"
          alt=""
        />
        <img
          src="https://res.cloudinary.com/dmzibpgwk/image/upload/v1685737713/integradorDh/image_78_ltn9sr.png"
          alt=""
        />
        <img
          src="https://res.cloudinary.com/dmzibpgwk/image/upload/v1685737713/integradorDh/image_80_fujadt.png"
          alt=""
        />
      </div>

      </div>

      <div >
        <a href="" className="detail-movie-ver-mas" >Ver más</a>
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
