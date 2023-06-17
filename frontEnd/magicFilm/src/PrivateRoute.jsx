import { useContext } from "react";
import { Outlet, Navigate } from "react-router-dom";
import { AuthContext } from "./context/AuthContext";

const PrivateRoutes = () => {
  const { user } = useContext(AuthContext);
  console.log("🚀 ~ file: PrivateRoute.jsx:7 ~ PrivateRoutes ~ user:", user);

  if (user.rol != "ADMIN") {
    console.log(
      "🚀 ~ file: PrivateRoute.jsx:10 ~ PrivateRoutes ~ user.rol:",
      user.rol
    );

    return <Navigate to="/" />;
  }

  return <Outlet />;
};

export default PrivateRoutes;
