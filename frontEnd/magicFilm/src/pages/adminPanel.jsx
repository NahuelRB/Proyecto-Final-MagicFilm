import React from "react";
import Layout from "../components/layout/Layout";
import "./adminPanel.css";
import AddMovie from "../components/common/addMovie/AddMovieContainer";

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
          <AddMovie />
        </section>
        <section className="admin-panel__delete">
          <p>Eliminar pelicula</p>
        </section>
      </div>
    </Layout>
  );
};

export default AdminPanel;
