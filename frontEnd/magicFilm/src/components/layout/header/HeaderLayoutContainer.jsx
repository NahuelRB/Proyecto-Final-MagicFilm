import React, { useContext } from "react";
import { Outlet } from "react-router-dom";
import HeaderLayout from "./HeaderLayout";
import { SessionContext } from "../../../context/SessionContext";

const HeaderLayoutContainer = () => {
  const { isAuthenticated, logout, authUser } = useContext(SessionContext);
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
