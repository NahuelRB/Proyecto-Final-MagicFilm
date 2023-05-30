import React, { useContext } from "react";
import { SessionContext } from "../../../context/SessionContext";
import "./AdminPanel.css";
import AdminPanel from "./AdminPanel";
import { Navigate } from "react-router-dom";

const AdminPanelContainer = () => {
  const { isAuthenticated, authUser } = useContext(SessionContext);

  return isAuthenticated && authUser.rol == "admin" ? (
    <AdminPanel />
  ) : (
    <Navigate to="/login" replace />
  );
};

export default AdminPanelContainer;
