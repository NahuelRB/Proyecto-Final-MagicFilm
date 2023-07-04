import "./ProgressLine.css";
const ProgressLine = ({ activeStep }) => {
  return (
    <div>
      <div className="progress-line">
        <div className={`step ${activeStep === 1 ? "active" : ""}`} />
        <div className={`step ${activeStep === 2 ? "active" : ""}`} />
        <div className={`step ${activeStep === 3 ? "active" : ""}`} />
      </div>
      <div className="step-buttons">
        <hr className="h" />
        <button
          className={`step-button ${activeStep === 1 ? "active" : ""}`}
          onClick={() => {}}
        >
          1
        </button>
        <button
          className={`step-button ${activeStep === 2 ? "active" : ""}`}
          onClick={() => {}}
        >
          2
        </button>
        <button
          className={`step-button ${activeStep === 3 ? "active" : ""}`}
          onClick={() => {}}
        >
          3
        </button>
      </div>
    </div>
  );
};

export default ProgressLine;
