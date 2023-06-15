import React, { useState } from "react";
import "./SearchMovies.css";
import "../../pages/movieDetail/movieDetail.css"
import { getMovie } from "../../../service/productServices";
import Swal from "sweetalert2";

const SearchMovies = (props) => {
  const { inputValue, setInputValue } = props;
  const [movies, setMovies] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");

  const handleInputChange = (event) => {
    const value = event.target.value;
    setInputValue(value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const regex = /^[a-zA-Z\s]+$/;

    if (inputValue.trim() === "") {
      setErrorMessage("Por favor, ingresa un título de película válido.");
    } else if (!regex.test(inputValue)) {
      setErrorMessage("El título de la película solo debe contener letras y espacios.");
    } else {
      setErrorMessage("");
      getMovieData();
      setInputValue("")
    }
  };

  const getMovieData = async () => {
    try {
      const response = await getMovie(inputValue);
      const movie = response.data[0];
  
      console.log(
        "🚀 ~ file: SearchMovies.jsx:34 ~ .then ~ res:",
        movie
      );

      if (movie) {
        setMovies([movie]);
      } else {
        setMovies([]);
        Swal.fire("No existe una película con ese nombre", "", "error");
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <form action="" className="form-search-movies" onSubmit={handleSubmit}>
        <input
          className="input-home-search-movies"
          placeholder="Nombre película"
          value={inputValue}
          onChange={handleInputChange}
        />
        <button className="button-home-search-movies" type="submit">
          Buscar
        </button>
        </form>
      {errorMessage && <p className="error-message">{errorMessage}</p>}
      <div className="container-movie-found">
      {movies.length > 0 && (
        <div className="container-movie-found-media">
          <div className="contain-detail-movie-found-properties">
            {/* <h3 className="container-detail-movie-properties-span">{movies[0].title} </h3> */}
            <img src={movies[0].image} className="contain-detail-movie-found-properties-image" alt={movies[0].title} />
              <div>
              <p className="contain-detail-movie-found-properties-span">{movies[0].summary}</p>
              <a href={movies[0].trailer} target="_blank" rel="searcher results" className="contain-detail-movie-found-properties-span">
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
      )}
      </div>
    </>
  );
};

export default SearchMovies;