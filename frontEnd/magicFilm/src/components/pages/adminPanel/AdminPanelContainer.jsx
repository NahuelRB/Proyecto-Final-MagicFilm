import React from "react";

import "./adminPanel.css";
import AdminPanel from "./adminPanel";


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
