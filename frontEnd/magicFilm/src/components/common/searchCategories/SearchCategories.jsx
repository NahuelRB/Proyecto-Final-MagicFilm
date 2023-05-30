// import "./SearchCategories.css";

import { useState } from "react";

const SearchCategories = ({ handleCategoryFilter }) => {
  const [activeButton, setActiveButton] = useState("");

  const handleCategoryClick = (category) => {
    setActiveButton(category);
    handleCategoryFilter(category);
  };

  return (
    <div>
      <h2>Filtra por categoría</h2>
      <div>
        <button
          className={activeButton === "Estrenos" ? "active" : ""}
          onClick={() => handleCategoryClick("Estrenos")}
        >
          Estrenos
        </button>
        <button
          className={activeButton === "Preventa" ? "active" : ""}
          onClick={() => handleCategoryClick("Preventa")}
        >
          Preventa
        </button>
        <button
          className={activeButton === "Cartelera" ? "active" : ""}
          onClick={() => handleCategoryClick("Cartelera")}
        >
          Cartelera
        </button>
        <button
          className={activeButton === "Promociones" ? "active" : ""}
          onClick={() => handleCategoryClick("Promociones")}
        >
          Promociones
        </button>
        <button
          className={activeButton === "Todas" ? "active" : ""}
          onClick={() => handleCategoryClick("Todas")}
        >
          Ver todas
        </button>
      </div>
    </div>
  );
};

export default SearchCategories;