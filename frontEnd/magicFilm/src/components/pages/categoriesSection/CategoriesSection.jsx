import { useState } from "react";
import {Link} from "react-router-dom";
import SearchCategories from "../../common/searchCategories/searchCategories";
// import MoviesByCategories from "../../common/moviesByCategories/MoviesByCategories";

const CategoriesSection = (props) => {
    const {dataMovie} = props;
    const [filteredCategory, setFilteredCategory] = useState("");

    const arrayObjetos = [ 
        {
            titulo: 1,
            apellido: "hla",
        },
        {
            titulo: 2,
            apellido: "hola mundo"
        }
    ]



    const handleCategoryFilter = (category) => {
        setFilteredCategory(category);
    };

    return (
        <div>
            <h2>Filtra por categoría</h2>
            <SearchCategories handleCategoryFilter={handleCategoryFilter} />

{/* Prueba de comprobación de iteración del map. Funciona, pero el problema está en el objeto de JSON server que no es reconcido */}
            {arrayObjetos.map((objeto)=>{
                return (
                    <h1>Soy la iteración del map {objeto.apellido}</h1>
                )
            })}
            
            {/* {dataMovie.map((movies)=>{
                return (
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
                )
            })} */}
        </div>
    );
};

export default CategoriesSection;
