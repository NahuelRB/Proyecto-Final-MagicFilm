import React from 'react'
import SearchMoviesContainer from '../../common/searchMovies/SearchMoviesContainer'
import RecommendedMoviesContainer from '../../common/recommendedMovies/RecommendedMoviesContainer'


const Home = () => {
  return (
    <div>
      <SearchMoviesContainer/>
      <RecommendedMoviesContainer/>
    </div>
  )
}

export default Home