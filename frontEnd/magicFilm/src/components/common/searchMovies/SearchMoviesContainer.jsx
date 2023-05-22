import { useState } from "react";

import SearchMovies from "./SearchMovies";
// import SearchMovies from "./searchMovies";

import { getMovie } from "../../../services/movieServices";

const SearchMoviesContainer = () => {
  const [dataSearch, setDataSearch] = useState("");

  const handleSearch = (e) => {
    console.log(e);
    getMovie(e);
  };

  return (
    <div>
      <SearchMovies
        setDataSearch={setDataSearch}
        dataSearch={dataSearch}
        handleSearch={handleSearch}
      />
    </div>
  );
};

export default SearchMoviesContainer;
