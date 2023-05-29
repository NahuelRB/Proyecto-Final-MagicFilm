import React, { useContext } from "react";
import { Outlet } from "react-router-dom";
import HeaderLayout from "./HeaderLayout";
import { SessionContext } from "../../../context/SessionContext";

const HeaderLayoutContainer = () => {
  const { isLogged, handleLogout, userData } = useContext(SessionContext);
  return (
    <>
      <HeaderLayout
        isLogged={isLogged}
        handleLogout={handleLogout}
        userData={userData}
      />
      <Outlet />
    </>
  );
};

export default HeaderLayoutContainer;
