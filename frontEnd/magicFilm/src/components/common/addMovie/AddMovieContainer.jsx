import React, { useEffect, useState } from "react";
import AddMovieForm from "./AddMovieForm";
import AddMoviePreview from "./AddMoviePreview";
import "./addMovie.css";
import { getCategories } from "../../../service/productServices";

const AddMovieContainer = () => {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    getCategories().then((res) => {
      setCategories(res.data.filter((category) => category.id !== "0"));
    });
  }, []);
  const initialState = {
    title: "",
    release_date: "",
    gender: "",
    summary: "",
    image: "",
    trailer: "",
    category_id: "",
    /* file: "", */
  };
  const [state, setState] = useState(initialState);

  return (
    <div className="container-add-movie">
      <AddMovieForm state={state} setState={setState} categories={categories} />
      <AddMoviePreview
        state={state}
        setState={setState}
        initialState={initialState}
        categories={categories}
      />
    </div>
  );
};

export default AddMovieContainer;
