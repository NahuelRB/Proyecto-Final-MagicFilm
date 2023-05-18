import React from "react";
import './deleteMovie.css'

const DeleteMovie = () => {
  return (
    <div>
      <form action="submit" className="formulario-delete-movie">
        <div className="titulo-delete-movie">Eliminar película</div>
        <input
          type="text"
          className="input-delete-movies"
          placeholder="Nombre de la película *"
        />
        
        <button className="button-delete-movie">Buscar película</button>
      </form>
    </div>
  );
};

export default DeleteMovie;
