import React, { useState } from "react";
import SearchMovies from "./SearchMovies";

const SearchMoviesContainer = () => {
  const [inputValue, setInputValue] = useState("");

  return (
    <>
      <SearchMovies 
      inputValue={inputValue} 
      setInputValue={setInputValue} />
    </>
  );
};

export default SearchMoviesContainer;
