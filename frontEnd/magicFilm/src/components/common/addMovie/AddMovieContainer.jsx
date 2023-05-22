import React from "react";
import AddMovieForm from "./AddMovieForm";
import AddMoviePreview from "./AddMoviePreview";
import "./addMovie.css";

const AddMovieContainer = () => {
  return (
    <div className="container-add-movie">
      <AddMovieForm />
      <AddMoviePreview />
    </div>
  );
};

export default AddMovieContainer;
