import React from "react";
import { Outlet } from "react-router-dom";
import HeaderLayout from "./HeaderLayout";
import useAuth from "../../../context/SessionContext";

const HeaderLayoutContainer = () => {
  const { isAuthenticated, logout, authUser } = useAuth();
  return (
    <>
      <HeaderLayout
        isAuthenticated={isAuthenticated}
        logout={logout}
        authUser={authUser}
      />
      <Outlet />
    </>
  );
};

export default HeaderLayoutContainer;
