import React, { useState, useEffect } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import "./CalendarReservation.css";

const CalendarReservation = ({
  availableDates,
  selectedDate,
  setSelectedDate,
}) => {
  // useEffect(() => {
  //   // Obtener las fechas disponibles para los próximos 40 días con horas y salas
  //   const fetchAvailableReservations = () => {
  //     // ... Realiza la lógica para obtener las fechas disponibles
  //     const availableReservations = [];

  //     for (let i = 0; i < 3; i++) {
  //       const date = new Date();
  //       date.setDate(date.getDate() + i);

  //       const reservations = {
  //         date: date,
  //       };

  //       availableReservations.push(reservations);
  //     }

  //     setAvailableReservations(availableReservations);
  //   };

  //   fetchAvailableReservations();
  // }, []);

  const handleDateSelect = (date) => {
    setSelectedDate(date);
  };
  return (
    <>
      {availableDates.length > 0 && (
        <div>
          <h2>Elige una fecha</h2>
          <div className="calendar-container">
            <div className="calendar">
              <Calendar
                maxDate={availableDates[availableDates.length - 1]}
                minDate={new Date()}
                onChange={handleDateSelect}
                value={selectedDate}
                // tileDisabled={({ date }) =>
                //   !availableDates.find((reservations) => reservations === date)
                // }
              />
            </div>
            <div className="container-data-reservation-button">
              {/* Botones adicionales */}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default CalendarReservation;
