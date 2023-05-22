import React, { useState } from "react";
import AddMovieForm from "./AddMovieForm";
import AddMoviePreview from "./AddMoviePreview";
import "./addMovie.css";

const AddMovieContainer = () => {
  const initialState = {
    title: "",
    gender: "",
    image: "",
    release: "",
    link: "",
    file: "",
  };
  const [state, setState] = useState(initialState);

  return (
    <div className="container-add-movie">
      <AddMovieForm state={state} setState={setState} />
      <AddMoviePreview
        state={state}
        setState={setState}
        initialState={initialState}
      />
    </div>
  );
};

export default AddMovieContainer;
