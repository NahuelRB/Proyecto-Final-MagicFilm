import React from "react";
import "./addMovie.css";
import iconClip from "../../../assets/icon/clip.svg";
import { createMovie } from "../../../service/productServices";
import AddCategoryContainer from "../addCategory/AddCategoryContainer";

const AddMovie = ({ state, setState, setCategories, categories }) => {
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
    const create = createMovie(state);
    create
      .then((data) => {
        Swal.fire("Pelicula Creada correctamente", "", "success");
      })
      .catch((error) => console.log(error));
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
          name="release_date"
          className="attach-button"
          value={state.release_date || ""}
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
          placeholder="Cargar portada*"
          onChange={handleFileChange}
          style={{ display: "none" }}
        />
      </div>

      <div
        style={{
          flexDirection: "row",
          display: "flex",
          gap: "5px",
          width: "100%",
        }}
      >
        <select
          name="category_id"
          id="category"
          className="attach-button"
          onChange={handleInputChange}
          value={state.category_id || 0}
        >
          <option value="0" disabled>
            Categoría
          </option>
          {categories.map((category) => (
            <option key={category.id} value={category.id}>
              {category.title}
            </option>
          ))}
        </select>
        {/* <a href="/add-category" className="add-category">
          Nueva categoria
        </a> */}
        <AddCategoryContainer
          setCategories={setCategories}
          selectCategory={(category) => {
            setState({ ...state, category_id: category });
          }}
          from="addMovie"
        />
      </div>

      <input
        type="url"
        name="trailer"
        placeholder="Link al trailer"
        value={state.trailer || ""}
        onChange={handleInputChange}
      />

      {/* <input
        type="text"
        name="summary"
        placeholder="Resumen"
        value={state.summary || ""}
        onChange={handleInputChange}
      /> */}

      <label htmlFor="summary">Resumen</label>
      <textarea
        id="summary"
        name="summary"
        value={state.summary || ""}
        onChange={handleInputChange}
      />

      <button className="solid" type="submit">
        Crear
      </button>
    </form>
  );
};

export default AddMovie;
