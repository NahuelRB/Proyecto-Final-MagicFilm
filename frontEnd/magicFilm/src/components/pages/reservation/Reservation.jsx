import { useState } from "react";

import "./reservation.css";
import ChooseHour from "../../common/chooseHour/ChooseHour";
import ChooseSeatContainer from "../../common/chooseSeat/ChooseSeatContainer";
import ScoreMovieContainer from "../../common/scoreMovie/ScoreMovieContainer";
import ProgressLine from "../../common/addProgressLine/ProgressLine";
import CalendarReservation from "../../common/addCalendar/CalendarReservation";
import { createBooking } from "../../../service/booking";
import { HourCountProvider } from "../../common/chooseHour/ChooseHour";
import Swal from "sweetalert2";

const Reservation = (props) => {
  const { dataMovie, chairsGlobals, user } = props;

  const [activeStep, setActiveStep] = useState(1);

  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedHour, setSelectedHour] = useState(null);

  const handleDateSelect = (date) => {
    console.log(date);
    setSelectedDate(date);
    setActiveStep(2);
  };

  const handleHourSelect = (hour) => {
    console.log(hour);
    setSelectedHour(hour);
    setActiveStep(3);
  };

  const parseDate = (fecha) => {
    const year = fecha.getFullYear(); // Obtiene el año de la fecha
    const month = String(fecha.getMonth() + 1).padStart(2, "0"); // Obtiene el mes de la fecha (se agrega 1 porque los meses en JavaScript son indexados desde 0)
    const day = String(fecha.getDate()).padStart(2, "0"); // Obtiene el día del mes de la fecha

    return `${year}-${month}-${day}`; // Formato deseado: AAAA-MM-DD
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(dataMovie.schedules);
    const schedule = dataMovie.schedules[parseDate(selectedDate)].find(
      (item) => item.hour === selectedHour
    );
    console.log(schedule);
    const data = {
      id_movie: parseInt(dataMovie.id),
      id_user: parseInt(user.id),
      seats: parseInt(chairsGlobals),
      price: parseInt(chairsGlobals) * 5000,
      id_schedule: schedule.id,
    };

    Swal.fire({
      title: "Confirmación de reserva",
      html: `
      <p>Por favor, confirma los siguientes detalles de la reserva:</p>
      <p>Nombre de la película: ${dataMovie.title}</p> 
      <p>No. de Asientos: ${data.seats}</p>
      <p>Precio: $${data.price}</p>
      <p>Fecha: ${parseDate(selectedDate)} </p>
      <p>Hora: ${selectedHour}</p> 
    `,
      showCancelButton: true,
      confirmButtonText: "Confirmar",
      cancelButtonText: "Cancelar",
      icon: "question",
    }).then((result) => {
      if (result.isConfirmed) {
        createBooking(data)
          .then((res) => {
            console.log(res);
            if (res.status === 200) {
              Swal.fire(
                "Reserva Creada con Éxito",
                `<p>ID de la reserva: ${res.data.id}</p>`,
                "success"
              );
            } else {
              Swal.fire("Error al crear la reserva", "", "error");
            }
          })
          .catch((error) => console.log(error));
      }
    });
  };
  const dates = dataMovie?.schedules
    ? Object.keys(dataMovie?.schedules)
        .sort()
        .map((date) => new Date(date))
    : [];
  return (
    <div className="ContainerReservation">
      {dataMovie && (
        <>
          <div id="sidebarReservation">
            <h2>Reserva</h2>

            <div className="reservation-image">
              <img src={dataMovie.image} alt="" />
            </div>

            <div className="reservation-sidebar-propertis-data">
              <ScoreMovieContainer dataMovie={dataMovie} />
              <h4>
                Título:{" "}
                <span className="container-detail-movie-properties-span">
                  {dataMovie.title}
                </span>
              </h4>
              <h4>
                Fecha de estreno:{" "}
                <span className="container-detail-movie-properties-span">
                  {dataMovie.release_date}
                </span>{" "}
              </h4>
              <h4>
                Género:{" "}
                <span className="container-detail-movie-properties-span">
                  {dataMovie.gender?.name || dataMovie.gender}
                </span>
              </h4>
              <h4>
                Tráiler:{" "}
                <span className="container-detail-movie-properties-span">
                  <a
                    href={dataMovie.trailer}
                    target="_blank"
                    style={{
                      textDecoration: "none",
                      color: "black",
                      fontWeight: "700",
                    }}
                    rel="noreferrer"
                  >
                    Miralo aquí
                  </a>
                </span>
              </h4>
            </div>
          </div>
          <div id="followUpReservation">
            <ProgressLine activeStep={activeStep} />
          </div>
          <div id="calendarReservation">
            <CalendarReservation
              availableDates={dates}
              selectedDate={selectedDate}
              setSelectedDate={handleDateSelect}
            />
          </div>
          <div id="hoursCinema">
            <HourCountProvider>
              <ChooseHour
                selectedHour={selectedHour}
                setSelectedHour={handleHourSelect}
              />
            </HourCountProvider>
          </div>
          <div id="counterChairs">
            <ChooseSeatContainer />
          </div>

          <div id="dataReservation">
            <div className="container-data-reservation">
              <h3>Resumen de tu reserva</h3>
              <div className="container-data-reservation-properties">
                <h5>
                  Titulo:<span> {dataMovie.title}</span>
                </h5>
                <h5>
                  Hora: <span>{selectedHour}</span>
                </h5>
                <h5>
                  Total: <span>{parseInt(chairsGlobals) * 5000}</span>
                </h5>
                <h5>
                  Fecha de reserva:{" "}
                  <span>{selectedDate?.toLocaleDateString()}</span>
                </h5>
                <h5>
                  Cantidad de asientos: <span>{chairsGlobals}</span>
                </h5>
              </div>
            </div>

            <div className="container-data-reservation-button">
              <button
                className="outline"
                type="button"
                style={{ marginTop: "25px", marginLeft: "15px" }}
                onClick={(e) => {
                  e.preventDefault();
                }}
              >
                Cancelar
              </button>

              <button
                className="solid"
                type="button"
                style={{
                  marginTop: "25px",
                  marginLeft: "15px",
                  backgroundColor:
                    !selectedDate || !selectedHour || !chairsGlobals
                      ? "gray"
                      : "#00c9c8",
                }}
                onClick={handleSubmit}
                disabled={!selectedDate || !selectedHour || !chairsGlobals}
              >
                Reservar
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Reservation;
