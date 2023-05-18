import React from "react";
import "./addMovie.css";

const AddMovie = () => {
  return (
    <div>
      <form action="submit" className="formulario-add-movie">
        <div className="titulo-add-movie">Agregar película</div>
        <input type="text" className="input-add-movies" placeholder="Nombre de la película *" />
        <input type="date" className="input-add-movies" placeholder="Fecha de estreno DD/MM/AAAA"/>
        <input type="text" className="input-add-movies" placeholder="Género"/>
        <input type="text" className="input-add-movies" placeholder="Imagen" />
        <input type="text" className="input-add-movies" placeholder="Link al trailer" />
        <button className="button-add-movie">Agregar</button>
      </form>
    </div>
  );
};

export default AddMovie;
