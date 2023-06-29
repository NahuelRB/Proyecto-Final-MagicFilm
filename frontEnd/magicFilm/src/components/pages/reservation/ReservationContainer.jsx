import React, { useContext, useEffect, useState } from 'react'
import Reservation from './Reservation'
import { useParams } from 'react-router-dom'
import { getMovieById } from '../../../service/productServices'
import { number } from 'yup'
import { ReservationContextReducer } from '../../../context/ReservationContextReducer '

const ReservationContainer = () => {
  const {state, dispatch}=useContext(ReservationContextReducer)

  const chairsGlobals = state.chairs

    const idMovie = useParams()
    const [dataMovie, setDataMovie] = useState({});
  
    const idMovieNumber = parseInt(idMovie.id)

    useEffect(() => {
        const movieById = getMovieById(idMovieNumber);
        movieById
          .then((res) => {
            const data = res.data;
            setDataMovie(data);
          })
          .catch((error) => console.log(error));
      }, []);


  return (
    <div><Reservation 
    dataMovie={dataMovie}
    chairsGlobals={chairsGlobals} /></div>
  )
}

export default ReservationContainer