import { useState } from "react";
import SearchCategories from "../../common/searchCategories/searchCategories";
import MoviesByCategories from "../../common/moviesByCategories/MoviesByCategories";

const CategoriesSection = ({ dataMovie }) => {
  console.log(
    "🚀 ~ file: CategoriesSection.jsx:6 ~ CategoriesSection ~ dataMovie:",
    dataMovie
  );
  const [filteredCategory, setFilteredCategory] = useState("");
  console.log(
    "🚀 ~ file: CategoriesSection.jsx:7 ~ CategoriesSection ~ filteredCategory:",
    filteredCategory
  );

  const handleCategoryFilter = (category) => {
    setFilteredCategory(category);
  };

  return (
    <div>
      <h2>Filtra por categoría</h2>
      <SearchCategories handleCategoryFilter={handleCategoryFilter} />
      {dataMovie ? (
        <MoviesByCategories dataMovie={dataMovie} />
      ) : (
        <div>loading...</div>
      )}
    </div>
  );
};

export default CategoriesSection;
