import { Link, useParams } from "react-router-dom";

const MoviesByCategories = ({ dataMovie }) => {
    const { category_id } = useParams();

    const filteredMovies = dataMovie.filter(
        (movie) => movie.id === parseInt(category_id)
    );

    return (
        <div className="container-home-card">
            {filteredMovies.map((movie) => (
                <div key={movie.id} className="card-container-search-movies">
                    <img src={movie.image} alt="" className="img-search-movies" />
                    <br />
                    <div className="info-search-movie">
                        <h4>
                            Estreno: <p>{movie.release_date}</p>
                        </h4>
                        <h4>
                            Género: <p>{movie.gender}</p>
                        </h4>
                        <br />
                        <Link to={`/details/${movie.id}`}>
                            <button className="button-search-detail">Ver más</button>
                        </Link>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default MoviesByCategories;
