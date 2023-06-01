import CategoriesSection from "./CategoriesSection";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getMovieByCategoryId, getMovies } from "../../../service/productServices";

const CategoriesSectionContainer = () => {
    const { category_id } = useParams();

    const [dataMovie, setDataMovies] = useState({});

    useEffect(() => {
        const movies = getMovies();
          movies
            .then((res) => setDataMovies(res.data))
            .catch((error) => console.log(error));
      
       },[])

    return (
        <div>
            <h2 className="titleRecommendedMovies"> Películas por categoría</h2>
            <CategoriesSection
                dataMovie={dataMovie} />
        </div>
    );
};

export default CategoriesSectionContainer;