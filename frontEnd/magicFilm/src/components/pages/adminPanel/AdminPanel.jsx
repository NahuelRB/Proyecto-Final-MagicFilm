import React from "react";
import AddCategoryContainer from "../../common/addCategory/AddCategoryContainer";
import AddMovieContainer from "../../common/addMovie/AddMovieContainer";
import DeleteMovieContainer from "../../common/deleteMovie/DeleteMovieContainer";

const AdminPanel = () => {
  return (
    <div className="admin-container">
      <h1 className="admin-title">
        Hola, bienvenidos al panel de administración
      </h1>
      <div className="admin-panel">
        <AddMovieContainer />
        <DeleteMovieContainer />
        <AddCategoryContainer />
      </div>
    </div>
  );
};

export default AdminPanel;
