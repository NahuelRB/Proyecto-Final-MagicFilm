import "./searchMovies.css";

const SearchMovies = ({ handleSearch, dataSearch, setDataSearch }) => {

  
  return (
    <div>
      <form action="/admin?#" className="form-search-movies">
        <input
          type="text"
          className="input-search-movies"
          placeholder="Ingrese el nombre pelicula"
          onChange={(e) => setDataSearch(e.target.value)}
        />
        <button
          onClick={(e) => { handleSearch(dataSearch);  e.preventDefault(); }}
          className="button-search-movies"
        >
          Buscar
        </button>
      </form>
    </div>
  );
};

export default SearchMovies;
