import React from "react";
import Layout from "../components/layout/Layout";
import "./adminPanel.css";

const AdminPanel = () => {
  return (
    <Layout>
      <div className="admin-panel">
        <header className="header">
          <p className="admin-panel__title">
            Hola, bienvenidos al panel de administración
          </p>
        </header>
        <section className="admin-panel__create">
          <form action="" className="admin-panel__form">
            <p>Agregar pelicula</p>
            <input
              type="text"
              name="name"
              placeholder="Tittulo de la pelicula"
            />
            <input
              type="text"
              name="release-date"
              placeholder="fecha de estreno"
            />
            <input type="text" name="gender" placeholder="genero" />
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <p>Cargar portada (JPEG, PNG)</p>
              <button type="button">adjuntar</button>
            </div>
            <input type="text" name="gender" placeholder="link trailer" />

            <button type="submit">Crear</button>
          </form>
          <div className="admin-panel__preview">
            <p>Previsualización pelicula agregada</p>
            <div>
              <img src="" alt="" />
              <div>detalel de la pelicula</div>
            </div>
          </div>
        </section>
              <section className="admin-panel__delete">
            <p>Eliminar pelicula</p>
        </section>
      </div>
    </Layout>
  );
};

export default AdminPanel;
