import React, { useContext, useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import { SessionContext } from "./context/SessionContext";

function RequireAuth({ children, redirectTo, isAdmin }) {
  const { isAuthenticated, authUser } = useContext(SessionContext);
  // const [user, setUser] = useState(null);
  console.log(
    "🚀 ~ file: privateRoute.jsx:7 ~ RequireAuth ~ authUser:",
    authUser
  );
  return
  
  isAuthenticated ? (
    isAdmin && user?.rol == "admin" ? (
      children
    ) : (
      <Navigate to={redirectTo} />
    )
  ) : (
    <Navigate to="/login" />
  );
}

export default RequireAuth;
