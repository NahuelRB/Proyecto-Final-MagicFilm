import { React, useState } from "react";
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
import RatingMovieContainer from "../../common/ratingMovie/RatingMovieContainer";
import { useEffect } from "react";
import ScoreMovieContainer from "../../common/scoreMovie/ScoreMovieContainer";
import BackButton from "../../common/backButton/backButton";
const MovieDetail = (props) => {
  const { dataMovie, user, value, setValue } = props;
  return (
    <div className="container">
      <BackButton />

      <h1 className="titleRecommendedMovies">{dataMovie.title}</h1>

      <div className="container-detail-movie">
        <div className="container-detail-movie-properties-image">
          <img src={dataMovie.image} alt="" />
        </div>
        <div className="container-detail-movie-properties">
          <div className="container-detail-movie-properties-text">
            <h1>Detalle película</h1>

            <h3>
              Fecha de estreno:{" "}
              <span className="container-detail-movie-properties-span">
                {dataMovie.release_date}
              </span>{" "}
            </h3>
            <h3>
              Género:{" "}
              <span className="container-detail-movie-properties-span">
                {dataMovie.gender?.name
                  ? dataMovie.gender?.name
                  : dataMovie.gender}
              </span>
            </h3>
            <h3>
              Tráiler:{" "}
              <span className="container-detail-movie-properties-span">
                <a
                  href={dataMovie.trailer}
                  target="_blank"
                  style={{
                    textDecoration: "none",
                    color: "#00C9C8",
                    fontWeight: "700",
                  }}
                >
                  Miralo aquí
                </a>
              </span>
            </h3>
            <ScoreMovieContainer dataMovie={dataMovie} />
            {user?.id && (
              <RatingMovieContainer
                dataMovie={dataMovie}
                user={user}
                value={value}
                setValue={setValue}
              />
            )}
          </div>
        </div>
        {dataMovie?.trailer_images?.length > 0 && (
          <>
            <div className="container-detail-movie-galery">
              {dataMovie.trailer_images.map((image, index) => {
                while (index < 4) {
                  return <img src={image.image} key={index} alt="" />;
                }
              })}
            </div>
          </>
        )}
      </div>

      <div className="detail-summary">
        <p>
          <b>Resumen: </b>
          {dataMovie.summary}
        </p>
      </div>
      <section className="container-box">
        <div>
          <img src={visual} alt="" className="visual" />
          <p>Sala 3D</p>
        </div>

        <div>
          <img src={parking} alt="" className="parking" />
          <p>Parqueadero gratuito</p>
        </div>
        <div>
          <img src={snak} alt="" className="snak" />
          <p>Llevanos a tu asiento</p>
        </div>
        <div>
          <img src={chair} alt="" className="chair" />
          <p>Sillas reclinables</p>
        </div>
        <div>
          <img src={sound} alt="" className="sound" />
          <p>Sonido envolvente</p>
        </div>
        <div>
          <img src={iceCream} alt="" className="iceCream" />
          <p>Heladería y zona de comidas</p>
        </div>
      </section>
    </div>
  );
};

export default MovieDetail;
