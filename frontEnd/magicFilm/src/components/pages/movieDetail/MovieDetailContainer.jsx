import React, { useEffect, useState } from 'react'
import MovieDetail from './movieDetail'
import { useParams } from 'react-router-dom'
import film from "../../../../films.json"
import './MovieDetail.css'

const MovieDetailContainer = () => {
  const[dataMovies, setDataMovies] = useState(film);
 
 

  return (


    <div>
      <h2 className="titleRecommendedMovies">Detalle Pelicula</h2>
        <MovieDetail dataMovies={dataMovies}/>
    </div>
  )
}

export default MovieDetailContainer