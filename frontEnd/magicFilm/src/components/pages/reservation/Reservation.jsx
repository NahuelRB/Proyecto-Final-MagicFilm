import React from 'react'

import './Reservation.css'

const Reservation = (props) => {
    const{dataMovie}= props

    console.log(dataMovie)
  return (
    <div className='ContainerReservation'>

       
     
        <div id='sidebarReservation'> 
        <h2>Reserva</h2>


        <div className="container-detail-movie-properties-image">
          <img src={dataMovie.image} alt="" />
        </div>


            <h3>
              Título:{" "}
              <span className="container-detail-movie-properties-span">
                {dataMovie.title}
              </span>
            </h3>
            <h3>
              Fecha de estreno:{" "}
              <span className="container-detail-movie-properties-span">
                {dataMovie.release_date}
              </span>{" "}
            </h3>
            
        

        
        
        
        
        </div>
        <div id='followUpReservation'>followUpReservation</div>
        <div id='calendarReservation'>Calendar</div>
        <div id='hoursCinema'>hoursCinema</div>
        <div id='counterChairs'>counterChairs</div>
        <div id='dataReservation'>dataReservation</div>
    </div>
  )
}

export default Reservation