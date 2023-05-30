import CategoriesSection from "./CategoriesSection";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getMovieByCategoryId } from "../../../service/productServices";

const CategoriesSectionContainer = () => {
    const { category_id } = useParams();

    const [dataMovie, setDataMovie] = useState({});
    console.log(category_id)

    useEffect(() => {
        const movieById = getMovieByCategoryId(category_id);
        movieById
            .then((res) => setDataMovie(res.data))
            .catch((error) => console.log(error));

    }, [category_id]);

    return (
        <div>
            <h2 className="titleRecommendedMovies"> Películas por categoría</h2>
            <CategoriesSection
                dataMovie={dataMovie} />
        </div>
    );
};

export default CategoriesSectionContainer;