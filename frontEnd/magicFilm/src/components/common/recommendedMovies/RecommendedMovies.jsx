import React from "react";
import { Link } from "react-router-dom";

const recommendedMovies = (props) => {
  const { dataMovies } = props;
  // console.log(dataMovies);
  return (
    <div className="container-home-card">
      {dataMovies.map((movies, index) => {
        while (index < 5) {
          return (
            <div key={movies.id} className="card-container-search-movies">
              <img src={movies.image} alt="" className="img-search-movies" />
              <br />
              <div className="info-search-movie">
                <h4>
                  Estreno: <p>{movies.release_date}</p>
                </h4>
                <h4>
                  Género: <p>{movies.gender.name}</p>
                </h4>

                <br />
                <Link to={`/details/${movies.id}`}>
                  <button className="button-search-detail">Ver más</button>
                </Link>
              </div>
            </div>
          );
        }
      })}
    </div>
  );
};

export default recommendedMovies;
