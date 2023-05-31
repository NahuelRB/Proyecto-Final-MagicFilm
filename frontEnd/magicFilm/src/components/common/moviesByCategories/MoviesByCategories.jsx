import { Link, useParams } from "react-router-dom";

const MoviesByCategories = (props) => {
    const {dataMovie} = props
    const { category_id } = useParams();

    const filteredMovies = dataMovie.filter(
        (movies) => movies.movie_id === parseInt(category_id)
    );

    return (
        <div className="container-home-card">
            {filteredMovies.map((movies) => (
                <div key={movies.movie_id} className="card-container-search-movies">
                    <img src={movies.image} alt="" className="img-search-movies" />
                    <br />
                    <div className="info-search-movie">
                        <h4>
                            Estreno: <p>{movies.release_date}</p>
                        </h4>
                        <h4>
                            Género: <p>{movies.gender.gender_id}</p>
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
