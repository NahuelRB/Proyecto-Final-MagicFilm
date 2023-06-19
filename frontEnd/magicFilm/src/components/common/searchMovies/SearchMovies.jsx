import React, { useState } from "react";
import "./SearchMovies.css";
import "../../pages/movieDetail/movieDetail.css";

const SearchMovies = (movies) => {
  return (
    <>
      {movies.length > 0 && (
        <div className="container-movie-found">
          <div className="container-movie-found-media">
            <div className="contain-detail-movie-found-properties">
              {/* <h3 className="container-detail-movie-properties-span">{movies[0].title} </h3> */}
              <img
                src={movies[0].image}
                className="contain-detail-movie-found-properties-image"
                alt={movies[0].title}
              />
              <div>
                <p className="contain-detail-movie-found-properties-span">
                  {movies[0].summary}
                </p>
                <a
                  href={movies[0].trailer}
                  target="_blank"
                  rel="searcher results"
                  className="contain-detail-movie-found-properties-span"
                >
                  Ver trailer
                </a>
              </div>
              <div className="contain-detail-movie-found-galery">
                {movies[0].trailer_images.slice(0, 4).map((image) => (
                  <img key={image.id} src={image.image} alt={movies[0].title} />
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default SearchMovies;
