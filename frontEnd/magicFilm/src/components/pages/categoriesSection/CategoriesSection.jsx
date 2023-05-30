import { useState } from "react";
import SearchCategories from "../../common/searchCategories/searchCategories";
import MoviesByCategories from "../../common/moviesByCategories/MoviesByCategories";

const CategoriesSection = () => {
    const [filteredCategory, setFilteredCategory] = useState("");

    const handleCategoryFilter = (category) => {
        setFilteredCategory(category);
    };

    return (
        <div>
            <h2>Filtra por categoría</h2>
            <SearchCategories handleCategoryFilter={handleCategoryFilter} />
            <MoviesByCategories
                dataMovie={filteredCategory}
            />
        </div>
    );
};

export default CategoriesSection;
