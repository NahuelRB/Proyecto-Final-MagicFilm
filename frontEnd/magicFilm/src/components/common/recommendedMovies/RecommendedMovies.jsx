import React from "react";
import { Link } from "react-router-dom";

const recommendedMovies = (props) => {
  const { dataMovies } = props;
  console.log(dataMovies);
  return (
    <div className="container-home-card">
      {dataMovies.map((movie, index) => {
        while (index < 5) {
          return (
            <div key={movie.id} className="card-container-search-movies">
              <img src={movie.image} alt="" className="img-search-movies" />
              <br />
              <div className="info-search-movie">
                <h4>
                  Estreno: <p>{movie.release_date}</p>
                </h4>
                <h4>
                  Género: <p>{movie.gender}</p>
                </h4>

                <br />
                <Link to={`/details/${movie.id}`}>
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
