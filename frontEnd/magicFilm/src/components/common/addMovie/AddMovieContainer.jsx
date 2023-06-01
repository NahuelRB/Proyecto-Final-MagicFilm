import React, { useState } from "react";
import AddMovieForm from "./AddMovieForm";
import AddMoviePreview from "./AddMoviePreview";
import "./addMovie.css";

const AddMovieContainer = () => {
  const categories = [
    { id: 1, cat: "Acción" },
    { id: 2, cat: "Aventura" },
    { id: 3, cat: "Comedia" },
    { id: 4, cat: "Drama" },
    { id: 5, cat: "Terror" },
    { id: 6, cat: "Suspenso" },
    { id: 7, cat: "Ciencia Ficción" },
  ];
  const initialState = {
    title: "",
    release_date: "",
    gender: "",
    summary: "",
    image: "",
    trailer: "",
    category: "",
    /* file: "", */
  };
  const [state, setState] = useState(initialState);

  // console.log(state);

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
