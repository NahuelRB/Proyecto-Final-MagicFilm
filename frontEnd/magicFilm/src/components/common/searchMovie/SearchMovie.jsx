import "./searchMovie.css";

const SearchMovie = ({ handleSearch, dataSearch, setDataSearch }) => {
  const handleReset = (e) => {
    console.log(e);
    setDataSearch("");
  };

  return (
    <div>
      <form action="/admin?#" className="form-search-movies">
        <input
          type="text"
          className="input-search-movies"
          placeholder="Ingrese el nombre pelicula"
          onChange={(e) => setDataSearch(e.target.value)}
          value={dataSearch}
        />
        <button
          onClick={(e) => {
            handleSearch(dataSearch);
            e.preventDefault();
          }}
          className="button-search-movies"
        >
          Buscar
        </button>
        {/* <button
          onClick={(e) => {
            handleReset;
            e.preventDefault();
          }}
        >
          Cancelar
        </button> */}
      </form>
    </div>
  );
};

export default SearchMovie;
