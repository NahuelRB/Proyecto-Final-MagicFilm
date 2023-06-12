import CategoriesSection from "./CategoriesSection";
import "./categoriesSection.css"
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import {
  getMovieByCategoryId,
  getCategories,
} from "../../../service/productServices";

const CategoriesSectionContainer = () => {
  const { category_id } = useParams();
  const [categories, setCategories] = useState([]);
  const [dataMovies, setDataMovies] = useState([]);
  const [activeButtonCategory, setActiveButtonCategory] = useState("");

  useEffect(() => {
    getCategories().then((res) => {
      setCategories(res.data);
      setActiveButtonCategory(
        res.data.filter((cat) => cat.id === category_id)[0].title
      );
    });
    getMovieByCategoryId(category_id)
      .then((res) => {
        console.log(
          "🚀 ~ file: CategoriesSectionContainer.jsx:24 ~ .then ~ res:",
          res
        );
        setDataMovies(res.data);
      })
      .catch((error) => console.log(error));
  }, [category_id]);

  return (
    <div>
      <h2 className="titleCategoryMovies"> Busca películas por categoría</h2>
      <CategoriesSection
        categories={categories}
        dataMovies={dataMovies}
        category={category_id}
        activeButtonCategory={activeButtonCategory}
      />
    </div>
  );
};

export default CategoriesSectionContainer;
