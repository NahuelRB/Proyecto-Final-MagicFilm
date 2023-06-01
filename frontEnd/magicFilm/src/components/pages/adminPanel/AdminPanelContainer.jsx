import React, { useContext } from "react";
import { AuthContext } from "../../../context/AuthContext";
import "./AdminPanel.css";
import AdminPanel from "./AdminPanel";
import { Navigate } from "react-router-dom";

const AdminPanelContainer = () => {
  const { user } = useContext(AuthContext);

  return user?.name && user.rol == "admin" ? (
    <AdminPanel />
  ) : (
    <Navigate to="/login" replace />
  );
};

export default AdminPanelContainer;
