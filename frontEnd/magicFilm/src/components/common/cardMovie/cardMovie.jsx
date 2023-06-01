import React from "react";

const CardMovie = ({ state, categories }) => {
  let { title, gender, release_date, category, image, trailer } = state;
  let categorySelected = categories?.find((cat) => cat.id == category)?.cat;

  return (
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
          {release_date}
        </p>
        <p>
          <b className="card-movie-title">Género: </b>
          {gender}
        </p>
        <p>
          <b className="card-movie-title">Categoria: </b>
          {categorySelected}
        </p>
        <b className="card-movie-title">Trailer: </b>
        {trailer && <a href={trailer}>Ver Trailer</a>}
      </div>
    </div>
  );
};

export default CardMovie;
