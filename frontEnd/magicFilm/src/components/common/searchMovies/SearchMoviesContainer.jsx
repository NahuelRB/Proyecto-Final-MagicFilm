import React, { useEffect, useState } from "react";
import SearchMovies from "./SearchMovies";
import { useLocation } from "react-router-dom";
import { searchMovie } from "../../../service/productServices";
import SearchButton from "./SearchButton";

const SearchMoviesContainer = () => {
  const [movies, setMovies] = useState([]);
  const location = useLocation();
  const inputValue = new URLSearchParams(location.search).get("search_input");

  useEffect(() => {
    const getMovieData = async () => {
      console.log(
        "🚀 ~ file: SearchMoviesContainer.jsx:14 ~ getMovieData ~ inputValue:",
        inputValue
      );
      const response = await searchMovie(inputValue);

      console.log(
        "🚀 ~ file: SearchMovies.jsx:34 ~ .then ~ res:",
        response.data
      );

      if (response.data) {
        setMovies(response.data);
      } else {
        setMovies([]);
        Swal.fire("No existe una película con ese nombre", "", "error");
      }
    };
    getMovieData();
  }, [inputValue]);

  return (
    <>
      <SearchButton search={inputValue} />
      <SearchMovies movies={movies} />
    </>
  );
};

export default SearchMoviesContainer;
