import React from "react";
import "./addMovie.css";

const AddMovie = () => {
  return (
    <form action="" className="formulario-add-movie">
      <p>Agregar pelicula</p>
      <input type="text" name="name" placeholder="Tittulo de la pelicula" />
      <input type="text" name="release-date" placeholder="fecha de estreno" />
      <input type="text" name="gender" placeholder="genero" />
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <p>Cargar portada (JPEG, PNG)</p>
        <button type="button">adjuntar</button>
      </div>
      <input type="text" name="gender" placeholder="link trailer" />

      <button className="create" type="submit">Crear</button>
    </form>
  );
};

export default AddMovie;
