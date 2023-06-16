import React, { useEffect } from "react";
import "./addCategory.css";
import iconClip from "../../../assets/icon/clip.svg";
import { createCategory } from "../../../service/categoryServices";
import { Modal, Box } from "@mui/material";
import { getCategories } from "../../../service/categoryServices";
import Swal from "sweetalert2";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const AddCategory = ({
  state,
  setState,
  initialState,
  setCategories,
  selectCategory,
  from,
}) => {
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
        });
      };

      reader.readAsDataURL(file);
    }
  };

  const saveCategory = (event) => {
    event.preventDefault();
    // setNewCategories(true);
    const { file, ...data } = state;
    const create = createCategory(data);
    create
      .then((data) => {
        getCategories().then((res) => {
          Swal.fire("Se creó correctamente!");
          setCategories(res.data);
        });
        selectCategory(data.data.id);
      })
      .catch((error) => console.log(error));

    setOpen(false);
    setState(initialState);
  };

  const handleReset = () => {
    setState(initialState);
    setOpen(false);
  };

  const [open, setOpen] = React.useState(false);
  const handleOpen = (event) => {
    event.preventDefault();

    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
    setState(initialState);
  };

  const modalCategory = () => {
    return (
      <Box sx={style}>
        <div className="formulario-add-movie">
          <h2 className="title">Agregar Categoría</h2>
          <input
            type="text"
            name="title"
            id="title"
            placeholder="Categoría*"
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
            id="description"
            placeholder="Descripción"
            onChange={handleInputChange}
          />
          {/* <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              flex: "1 1 auto",
              alignItems: "center",
              gap: "1rem",
              width: "100%",
            }}
          >
            {state?.zoom ? (
              <p style={{ fontSize: "0.9rem" }}></p>
            ) : (
              <p style={{ fontSize: "0.9rem" }}>
                Cargar imagen*{" "}
                <span style={{ fontSize: "0.7rem" }}>(JPEG, PNG)</span>
              </p>
            )}
            <label htmlFor="zoom" className="attach-button">
              <img className="icon" src={iconClip} alt="" />
              {state?.zoom ? "Cambiar" : "Adjuntar"}
            </label>
            <input
              id="zoom"
              type="file"
              accept=".jpg, .jpeg, .png"
              name="zoom"
              placeholder="Cargar portada"
              onChange={handleFileChange}
              style={{ display: "none" }}
            />
          </div>
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
            {state?.logo ? (
              <p style={{ fontSize: "0.9rem" }}></p>
            ) : (
              <p style={{ fontSize: "0.9rem" }}>
                Cargar Logo*{" "}
                <span style={{ fontSize: "0.7rem" }}>(JPEG, PNG)</span>
              </p>
            )}
            <label htmlFor="logo" className="attach-button">
              <img className="icon" src={iconClip} alt="" />
              {state?.logo ? "Cambiar Logo" : "Adjuntar"}
            </label>
            <input
              id="logo"
              type="file"
              accept=".jpg, .jpeg, .png"
              name="logo"
              placeholder="Cargar portada"
              onChange={handleFileChange}
              style={{ display: "none" }}
            />
          </div> */}
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
            <button className="solid" onClick={saveCategory}>
              Crear
            </button>

            <button className="solidCancel" onClick={handleReset}>
              Cancelar
            </button>
          </div>
        </div>
      </Box>
    );
  };

  return (
    <>
      {from !== undefined && (
        <button className="modal-button" onClick={handleOpen}>
          Nueva Categoría
        </button>
      )}
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <div>{modalCategory()}</div>
      </Modal>
      {from === undefined && modalCategory()}
    </>
  );
};

export default AddCategory;
