// import { useState } from "react";

import SearchMovies from "./SearchMovies";
// import SearchMovies from "./searchMovies";

// import { getMovie } from "../../../services/movieServices";

const SearchMoviesContainer = ({ dataSearch, setDataSearch, handleSearch }) => {
  // const [dataSearch, setDataSearch] = useState("");

  // const handleSearch = (e) => {
  //   console.log(e);
  //   getMovie(e);
  // };

  return (
    <>
      <SearchMovies 
      inputValue={inputValue} 
      setInputValue={setInputValue} />
    </>
  );
};

export default SearchMoviesContainer;
