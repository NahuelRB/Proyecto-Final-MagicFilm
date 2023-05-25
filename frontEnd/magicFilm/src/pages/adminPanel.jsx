import React from "react";
import Layout from "../components/layout/Layout";
import "./adminPanel.css";
import AddMovie from "../components/common/addMovie/AddMovieContainer";
import DeleteMovie from "../components/common/deleteMovie/DeleteMovieContainer";
import BackButton from "../components/common/backButton/BackButton";

const AdminPanel = () => {
  return (
    <Layout>
      <div className="admin-container">
        <h1 className="admin-title">
          Hola, bienvenidos al panel de administración
        </h1>

        <div className="admin-panel">
          <AddMovie />
          <DeleteMovie />
        </div>
      </div>
      <BackButton />
    </Layout>
    
  );
};

export default AdminPanel;
