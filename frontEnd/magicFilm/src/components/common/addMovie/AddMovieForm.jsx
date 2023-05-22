import React from "react";
import "./addMovie.css";

const AddMovie = () => {
  return (
    <form action="" className="formulario-add-movie">
      <h2 className="title">Agregar película</h2>
      <input type="text" name="name" placeholder="Título de la película *" />
      <input
        type="text"
        name="release-date"
        placeholder="Fecha de estreno DD/MM/AA"
      />
      <input type="text" name="gender" placeholder="Género" />
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          gap: "2rem",
        }}
      >
        <p>Cargar portada* (JPEG, PNG)</p>
        <button type="button">Adjuntar</button>
      </div>
      <input type="text" name="gender" placeholder="Link al trailer" />

      <button className="create" type="submit">
        Crear
      </button>
    </form>
  );
};

export default AddMovie;
