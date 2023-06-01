import "./searchCategories.css";
import { useState } from "react";

const SearchCategories = ({ handleCategoryFilter }) => {
  const [activeButtonCategory, setActiveButtonCategory] = useState("");

  const handleCategoryClick = (category) => {
    setActiveButtonCategory(category);
    handleCategoryFilter(category);
  };

  return (
    <div className="container-filter-search-categories">
      {/* <h2 className="title-category-filter">Filtra por categoría</h2> */}
      <div className="container-buttons-search-categories">
        <button
          className={`button-search-categories ${
            activeButtonCategory === "Estrenos" ? "activeButtonCategory" : ""
          }`}
          onClick={() => handleCategoryClick("Estrenos")}
        >
          Estrenos
        </button>
        <button
          className={`button-search-categories ${
            activeButtonCategory === "Preventa" ? "activeButtonCategory" : ""
          }`}
          onClick={() => handleCategoryClick("Preventa")}
        >
          Preventa
        </button>
        <button
          className={`button-search-categories ${
            activeButtonCategory === "Cartelera" ? "activeButtonCategory" : ""
          }`}
          onClick={() => handleCategoryClick("Cartelera")}
        >
          Cartelera
        </button>
        <button
          className={`button-search-categories ${
            activeButtonCategory === "Promociones" ? "activeButtonCategory" : ""
          }`}
          onClick={() => handleCategoryClick("Promociones")}
        >
          Promociones
        </button>
        <button
          className={`button-search-categories ${
            activeButtonCategory === "Todas" ? "activeButtonCategory" : ""
          }`}
          onClick={() => handleCategoryClick("Todas")}
        >
          Ver todas
        </button>
      </div>
    </div>
  );
};

export default SearchCategories;
