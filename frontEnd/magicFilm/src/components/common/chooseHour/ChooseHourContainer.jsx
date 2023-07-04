import ChooseHour from "./ChooseHour";

const ChooseHourContainer = (props) => {
  return (
    <div>
      <ChooseHour
        selectedHour={props.selectedHour}
        setSelectedHour={props.handleHourSelect}
      />
    </div>
  );
};

export default ChooseHourContainer;
