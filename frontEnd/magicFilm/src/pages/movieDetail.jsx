import React, { useEffect, useState } from "react";
import Layout from "../components/layout/Layout";
import "./movieDetail.css";
import { useParams } from "react-router-dom";
import films from "../../films.json";

const MovieDetail = () => {
  const { id } = useParams();

  const [filmFiltered, setFilmFiltered] = useState([]);
  useEffect(() => {
    setFilmFiltered(films.filter((film) => film.id === parseInt(id, 10)));
  }, [id]);

  useEffect(() => {
    console.log("first", filmFiltered);
  }, [filmFiltered]);

  return (
    <Layout>
      <div className="container-detail">
        {filmFiltered &&
          filmFiltered.map((film) => {
            <div key={film.id} className="">
              <div className="container">
                <section>
                  <img src={film.image} alt="" className="img-detail-movies" />
                  <section>
                    <p>Detalle de la película</p>
                    <h1>{film.name}</h1>
                    <p>{film.release_date}</p>
                    <p>{film.gender}</p>
                  </section>
                  <section>video</section>
                </section>
                <section>
                  <p>{film.summary}</p>
                </section>
              </div>
            </div>;
          })}
      </div>
    </Layout>
  );
};

export default MovieDetail;
