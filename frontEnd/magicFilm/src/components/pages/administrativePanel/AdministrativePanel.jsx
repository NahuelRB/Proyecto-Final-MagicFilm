import React from "react";
import AddMovieContainer from "../../common/addMovie/AddMovieContainer";
import DeleteMovieContainer from "../../common/deleteMovie/DeleteMovieContainer";
import SearchMoviesContainer from "../../common/searchMovies/SearchMoviesContainer";
import "./administrativePanel.css";

const AdministrativePanel = () => {
  return (
    <div>
      <h2 className="titulo-administrative-panel">
        Hola Bienvenidos al panel de administración
      </h2>
      <div className="administrative-panel">
        <AddMovieContainer />
        
        <DeleteMovieContainer />
      </div>
    </div>
  );
};

export default AdministrativePanel;
