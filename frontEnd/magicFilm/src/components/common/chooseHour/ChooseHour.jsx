import { useState, createContext, useContext } from "react";
import "./chooseHour.css";

const HourCountContext = createContext();

const HourCountProvider = ({ children }) => {
  const [hourCount, setHourCount] = useState(1);

  return (
    <HourCountContext.Provider value={{ hourCount, setHourCount }}>
      {children}
    </HourCountContext.Provider>
  );
};

const useHourCount = () => {
  const context = useContext(HourCountContext);

  if (context === undefined) {
    throw new Error(
      "useHourCount debe ser utilizado dentro de un HourCountProvider"
    );
  }

  return context;
};

export { HourCountProvider, useHourCount };

const ChooseHour = ({ selectedHour, setSelectedHour }) => {
//   const { hourCount, setHourCount } = useHourCount();
  //   const [hours, setSelectedHour] = useState(null);

  const handleHourClick = (hour) => {
    if (selectedHour === hour) {
      setSelectedHour(null);
    } else {
      setSelectedHour(hour);
    }
  };

  const isHourSelected = (hour) => {
    return selectedHour === hour;
  };

  return (
    <div className="choose-hour">
      <table className="funciones">
        <tbody>
          <tr>
            <th colSpan="2" className="title-cell">
              Funciones
            </th>
          </tr>
          <tr className="space-row"></tr>
          <tr className="table_hours">
            <td className="title_rows_hours">Mañana</td>
            <td>
              <div className="hour-row">
                <button
                  className={`hour-button ${
                    isHourSelected("08:00:00") ? "active" : ""
                  }`}
                  onClick={() => handleHourClick("08:00:00")}
                >
                  08:00am
                </button>
                <button
                  className={`hour-button ${
                    isHourSelected("12:00:00") ? "active" : ""
                  }`}
                  onClick={() => handleHourClick("12:00:00")}
                >
                  12:00m
                </button>
              </div>
            </td>
          </tr>
          <tr className="space-row"></tr>
          <tr className="table_hours">
            <td className="title_rows_hours">Tarde</td>
            <td>
              <div className="hour-row">
                <button
                  className={`hour-button ${
                    isHourSelected("14:00:00") ? "active" : ""
                  }`}
                  onClick={() => handleHourClick("14:00:00")}
                >
                  02:00pm
                </button>
                <button
                  className={`hour-button ${
                    isHourSelected("16:00:00") ? "active" : ""
                  }`}
                  onClick={() => handleHourClick("16:00:00")}
                >
                  04:00pm
                </button>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default ChooseHour;
