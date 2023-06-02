import React from "react";
import "./addMovie.css";
import CardMovie from "../cardMovie/cardMovie";
const AddMoviePreview = ({ state, setState, initialState, categories }) => {
  let { title, gender, release_date, image, trailer } = state;
  const handleReset = () => {
    setState(initialState);
  };

  return (
    <div className="container-preview">
      <h2 className="title">Previsualización película agregada</h2>
      <CardMovie state={state} categories={categories} />
      {(title || gender || release_date || image || trailer) && (
        <button className="solid" onClick={handleReset}>
          Cancelar
        </button>
      )}
    </div>
  );
};

export default AddMoviePreview;
