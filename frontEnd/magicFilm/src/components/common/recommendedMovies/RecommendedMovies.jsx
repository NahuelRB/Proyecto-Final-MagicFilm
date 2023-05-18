import React from 'react'
import {Link} from "react-router-dom"

const recommendedMovies = (props) => {
    const
    {
        dataMovies
    }=props
  return (

    <div className='container-home-card'>

        
        {dataMovies.map((movie,index)=>{
            return(
                <div key={movie.id}className="card-container-search-movies">
                <img src={movie.image} alt="" className="img-search-movies" />
                <h4 className="title-search-movies">
                  Estreno:
                  <span className="span-search-movies">{movie.release_date}</span>
                </h4>
                <h4>
                  Género: <span>{movie.gender}</span>
                </h4>
                <Link to={`/details/${movie.id}`}>
                <button className="button-search-detail">Ver más</button>
                </Link>
              </div>
            )
        })}
      



    </div>
    

  )
}

export default recommendedMovies