import React from "react";
import "./addMovie.css";

const AddMovie = ({ state, setState, initialState }) => {
  let { title, gender, release, image, link } = state;
  const handleReset = () => {
    setState(initialState);
    console.log(state);
    console.log(initialState);
  };
  return (
    <div className="container-preview">
      <h2 className="title">Previsualización película agregada</h2>
      <div className="card-preview">
        <img src={image} alt="" className="card-movie-img" />
        <div className="card-movie-info">
          <h3
            style={{
              fontWeight: 700,
            }}
          >
            Detalle de la película
          </h3>
          <br />

          <p>
            <b className="card-movie-title">Titulo: </b>
            {title}
          </p>

          <p>
            <b className="card-movie-title">Fecha de estreno: </b>
            {release}
          </p>
          <p>
            <b className="card-movie-title">Género: </b>
            {gender}
          </p>
          <b className="card-movie-title">Trailer: </b>
          {link && <a href={link}>Ver Trailer</a>}
        </div>
      </div>
      {(title || gender || release || image || link) && (
        <button className="create" onClick={handleReset}>
          Cancelar
        </button>
      )}
    </div>
  );
};

export default AddMovie;
