import "./searchMovies.css";

const SearchMovies = ({ handleSearch, dataSearch, setDataSearch }) => {

  
  return (
    <>
      <form action="" className="form-search-movies">
        <input
          type="text"
          className="input-home-search-movies"
          placeholder="Nombre película"
        />
        <button className="button-home-search-movies">Buscar</button>
      </form>
    </>
  );
};

export default SearchMovies;
