import Categories from "./Categories";

import { getCategories } from "../../../service/categoryServices";
import { useEffect, useState } from "react";

const CategoriesContainer = () => {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    getCategories().then((res) => {
      setCategories(res.data?.slice(0, 4));
    });
  }, []);
  return (
    <>
      <Categories categories={categories} />
    </>
  );
};

export default CategoriesContainer;
