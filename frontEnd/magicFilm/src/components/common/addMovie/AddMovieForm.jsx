import React from "react";
import "./addMovie.css";

const AddMovie = ({ state, setState }) => {
  const handleAdjuntar = () => {
    const fileInput = document.getElementById("file");
    fileInput.click();
  };

  console.log(state);
  const handleInputChange = (event) => {
    setState({
      ...state,
      [event.target.name]: event.target.value,
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
          // base64: base64String,
        });
      };

      reader.readAsDataURL(file);
    }
  };

  return (
    <form action="" className="formulario-add-movie">
      <h2 className="title">Agregar película</h2>
      <input
        type="text"
        name="title"
        placeholder="Título de la película *"
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
      >
        <label
          htmlFor="release"
          style={{ margin: "auto", marginLeft: "0", fontSize: "1rem" }}
        >
          Fecha de estreno
        </label>
        <input
          id="release"
          type="date"
          name="release"
          className="attach-button"
          value={state.release || ""}
          onChange={handleInputChange}
        />
      </div>
      <input
        type="text"
        name="gender"
        placeholder="Género"
        value={state.gender || ""}
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
          <p style={{ fontSize: "1rem" }}>{state.file.name}</p>
        ) : (
          <p style={{ fontSize: "1rem" }}>
            Cargar portada*{" "}
            <span style={{ fontSize: "0.8rem" }}>(JPEG, PNG)</span>
          </p>
        )}
        <input
          type="file"
          accept=".jpg, .jpeg, .png"
          id="file"
          name="image"
          onChange={handleFileChange}
          style={{ display: "none" }}
        />
        <p className="attach-button" onClick={handleAdjuntar}>
          {state?.file ? "Cambiar" : "Adjuntar"}
        </p>
      </div>

      <input
        type="url"
        name="link"
        placeholder="Link al trailer"
        value={state.link || ""}
        onChange={handleInputChange}
      />

      <button className="create" type="submit">
        Crear
      </button>
    </form>
  );
};

export default AddMovie;
