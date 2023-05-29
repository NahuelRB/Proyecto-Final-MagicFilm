import React from "react";

import "./AdminPanel.css";
import AdminPanel from "./AdminPanel";


const AdminPanelContainer = () => {
  return (
    
      <div className="admin-container">
        <h1 className="admin-title">
          Hola, bienvenidos al panel de administración
        </h1>

        <div className="admin-panel">
          <AdminPanel/>
        </div>
      </div>
    
  );
};

export default AdminPanelContainer;
