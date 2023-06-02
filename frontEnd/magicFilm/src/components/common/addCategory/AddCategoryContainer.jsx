import React, { useState } from "react";
import AddCategory from "./AddCategory";

import "./addCategory.css";

const AddCategoryContainer = ({ setCategories, setNewCategories }) => {
  const initialState = {
    title: "",
    description: "",
    image: "",
    /* file: "", */
  };
  const [state, setState] = useState(initialState);

  return (
    <div>
      <AddCategory
        state={state}
        setState={setState}
        initialState={initialState}
        setCategories={setCategories}
        setNewCategories={setNewCategories}
      />
    </div>
  );
};

export default AddCategoryContainer;
