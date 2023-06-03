import React, { useState } from "react";
import AddCategory from "./AddCategory";

import "./addCategory.css";

const AddCategoryContainer = ({ setCategories, selectCategory }) => {
  const initialState = {
    title: "",
    description: "",
    image_category: "",
    file: null,
  };
  const [catState, setCatState] = useState(initialState);

  return (
    <>
      <AddCategory
        state={catState}
        setState={setCatState}
        initialState={initialState}
        setCategories={setCategories}
        selectCategory={selectCategory}
      />
    </>
  );
};
export default AddCategoryContainer;
