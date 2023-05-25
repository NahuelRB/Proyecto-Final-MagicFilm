import React, { useState } from "react";
import "./deleteMovie.css";
import CardMovie from "../cardMovie/cardMovie";

const DeleteMovie = () => {
  let initialState = null;
  const [movie, setMovie] = useState(initialState);

  const handleDelete = (event) => {
    event.preventDefault();
    fetch("URL_DEL_ENDPOINT", {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(movie),
    })
      .then((response) => response.json())
      .then((data) => {
        setMovie(initialState);
        console.log(data);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const handleSearch = (event) => {
    event.preventDefault();
    console.log(event.target.search.value);
    fetch("URL_DEL_ENDPOINT", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data_send),
    })
      .then((response) => response.json())
      .then((data) => {
        setMovie(data);
        console.log(data);
      })
      .catch((error) => {
        console.error(error);
      });
  };
  return (
    <>
      <form onSubmit={handleSearch} className="formulario-delete-movie">
        <div className="title">Eliminar película</div>
        <input
          name="search"
          type="text"
          className="input-delete-movies"
          placeholder="Nombre de la película *"
        />

        <button type="submit" className="solid">
          {" "}
          Buscar película
        </button>
      </form>
      {movie && (
        <div className="container-preview-delete">
          <h2 className="title">Previsualización película agregada</h2>
          <CardMovie state={movie} />
          <button onClick={handleDelete} className="solid delete">
            Confirmar Eliminacion
          </button>
        </div>
      )}
    </>
  );
};

export default DeleteMovie;
