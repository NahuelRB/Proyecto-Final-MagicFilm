import React from "react";
import { Navigate } from "react-router-dom";
import useAuth from "./context/SessionContext";

function RequireAuth({ children, redirectTo, isAdmin }) {
  const { isAuthenticated, authUser } = useAuth();

  return isAuthenticated ? (
    isAdmin && authUser?.rol == "admin" ? (
      children
    ) : (
      <Navigate to={redirectTo} />
    )
  ) : (
    <Navigate to="/login" />
  );
}

export default RequireAuth;
