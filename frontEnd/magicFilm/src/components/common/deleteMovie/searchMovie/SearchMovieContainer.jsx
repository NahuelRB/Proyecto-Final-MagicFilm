// import { useState } from "react";

import SearchMovie from "./SearchMovie";
//import SearchMovie from "./searchMovie";

//import { getMovie } from "../../../services/movieServices";

const SearchMovieContainer = ({ dataSearch, setDataSearch, handleSearch }) => {
  //const [dataSearch, setDataSearch] = useState("");

 /*  //const handleSearch = (e) => {
    //console.log(e);
    //getMovie(e);
  };
 */
  return (
    <div>
      <SearchMovie
        setDataSearch={setDataSearch}
        dataSearch={dataSearch}
        handleSearch={handleSearch}
      />
    </div>
  );
};

export default SearchMovieContainer;
