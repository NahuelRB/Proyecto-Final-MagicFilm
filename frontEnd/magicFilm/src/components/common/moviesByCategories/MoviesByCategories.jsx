import { Link, useParams } from "react-router-dom";

const MoviesByCategories = ({ dataMovie }) => {
  console.log(
    "🚀 ~ file: MoviesByCategories.jsx:4 ~ MoviesByCategories ~ dataMovie:",
    dataMovie
  );
  const { category_id } = useParams();
  console.log(
    "🚀 ~ file: MoviesByCategories.jsx:9 ~ MoviesByCategories ~ category_id:",
    category_id
  );

  const filteredMovies = dataMovie.filter(
    (movies) => movies.category.category_id === parseInt(category_id)
  );

  return (
    <div className="container-home-card">
      {filteredMovies.map((movies) => (
        <div key={movies.movie_id} className="card-container-search-movies">
          <img src={movies.image.image} alt="" className="img-search-movies" />
          <br />
          <div className="info-search-movie">
            <h4>
              Estreno: <p>{movies.release_date}</p>
            </h4>
            <h4>
              Género: <p>{movies.gender.name}</p>
            </h4>
            <br />
            <Link to={`/details/${movies.movie_id}`}>
              <button className="button-search-detail">Ver más</button>
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MoviesByCategories;
