import React, { useState } from "react";
import SearchMovies from "./SearchMovies";

const SearchMoviesContainer = () => {
  const [inputValue, setInputValue] = useState();

  return (
    <div>
      <SearchMovies 
      inputValue={inputValue} 
      setInputValue={setInputValue} />
    </div>
  );
};

export default SearchMoviesContainer;
