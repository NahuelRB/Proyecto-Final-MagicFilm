import React from "react";
import "./addMovie.css";
import iconClip from "../../../assets/icon/clip.svg";
const AddMovie = ({ state, setState }) => {
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
        });
      };

      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    data_send = { ...state };
    delete data_send.file;
    fetch("URL_DEL_ENDPOINT", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data_send),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <form onSubmit={handleSubmit} className="formulario-add-movie">
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
          <p style={{ fontSize: "0.9rem" }}>{state.file.name}</p>
        ) : (
          <p style={{ fontSize: "0.9rem" }}>
            Cargar portada*{" "}
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
