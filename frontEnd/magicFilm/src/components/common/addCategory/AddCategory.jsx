import React from "react";
import "./addCategory.css";
import iconClip from "../../../assets/icon/clip.svg";
import { createCategory } from "../../../service/categoryServices";

const AddCategory = ({ state, setState, initialState }) => {
  const handleInputChange = (event) => {
    setState({
      ...state,
      [event.target.title]: event.target.value,
    });
  };

  const handleFileChange = (event) => {
    event.preventDefault();
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();

      reader.onloadend = () => {
        const base64String = reader.result;
        setState({
          ...state,
          [event.target.name]: base64String,
          file: file,
        });
      };

      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(state);
    const create = createCategory(state);
    create
      .then((data) => console.log(data))
      .catch((error) => console.log(error));
  };
  const handleReset = () => {
    setState(initialState);
  };
  console.log(state);
  return (
    <form onSubmit={handleSubmit} className="formulario-add-movie">
      <h2 className="title">Agregar nueva Categoría</h2>
      <input
        type="text"
        name="title"
        placeholder="Categoría*"
        value={state.title || ""}
        onChange={handleInputChange}
      />
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",

          gap: "1rem",
          flex: "1 1 auto",
          width: "100%",
        }}
      ></div>
      <input
        type="text"
        name="description"
        placeholder="Descripción"
        value={state.description || ""}
        onChange={handleInputChange}
      />
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          flex: "1 1 auto",
          alignItems: "center",
          gap: "1rem",
          width: "100%",
        }}
      >
        {state?.file ? (
          <p style={{ fontSize: "0.9rem" }}>{state.file.title}</p>
        ) : (
          <p style={{ fontSize: "0.9rem" }}>
            Cargar imagen*{" "}
            <span style={{ fontSize: "0.7rem" }}>(JPEG, PNG)</span>
          </p>
        )}
        <label htmlFor="file" className="attach-button">
          <img className="icon" src={iconClip} alt="" />
          {state?.file ? "Cambiar" : "Adjuntar"}
        </label>
        <input
          id="file"
          type="file"
          accept=".jpg, .jpeg, .png"
          name="image"
          placeholder="Cargar portada"
          onChange={handleFileChange}
          style={{ display: "none" }}
        />
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          flex: "1 1 auto",
          alignItems: "center",
          gap: "1rem",
          width: "100%",
        }}
      >
        <button className="solid" type="submit">
          Crear
        </button>

        <button className="solid" onClick={handleReset}>
          Cancelar
        </button>
      </div>
    </form>
  );
};

export default AddCategory;
