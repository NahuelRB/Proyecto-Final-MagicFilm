import Rating from "@mui/material/Rating";

const RatingMovie = (props) => {
  const { value, setValue } = props;
  return (
    <div>
      <h4 color="secundary">Calificación</h4>
      <Rating
        style={{ fontSize: "40px", color: "#00C9C8", width: "200px" }}
        precision={1}
        name="simple-controlled"
        value={value}
        size="string"
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      />
    </div>
  );
};

export default RatingMovie;
