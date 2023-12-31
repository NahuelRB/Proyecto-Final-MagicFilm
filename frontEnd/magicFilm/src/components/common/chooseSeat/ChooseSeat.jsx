import { useState } from "react";
import "./chooseSeat.css";

const ChooseSeat = (props) => {
  const { chairsGlobals, dispatch } = props;

  const [count, setCount] = useState(0);
  // const [error, setError] = useState("");

  return (
    <div className="seat-container">
      <h3>Cantidad sillas</h3>
      <button
        onClick={() => {
          if (count < 10) {
            setCount(count + 1);
            dispatch({ type: "ADD_CHAIRS" });
            console.log("valor global" + chairsGlobals);
          } else {
            setCount(0);
          }
        }}
        className="input-container"
      >
        <h1>{chairsGlobals}</h1>
      </button>

      {/* {error && <p className="error-message">{error}</p>} */}
    </div>
  );
};

export default ChooseSeat;
