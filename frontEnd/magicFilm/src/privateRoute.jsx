import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import { SessionContext } from "./context/SessionContext";

function RequireAuth({ children, redirectTo, isAdmin }) {
  const { isAuthenticated, authUser } = useContext(SessionContext);
  console.log(
    "🚀 ~ file: privateRoute.jsx:7 ~ RequireAuth ~ authUser:",
    authUser
  );

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
