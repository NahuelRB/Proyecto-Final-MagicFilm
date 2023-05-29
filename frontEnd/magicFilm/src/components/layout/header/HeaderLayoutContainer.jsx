import React from "react";
import { Outlet } from "react-router-dom";
import HeaderLayout from "./HeaderLayout";

const HeaderLayoutContainer = () => {
  return (
    <>
      <HeaderLayout />
      <Outlet />
    </>
  );
};

export default HeaderLayoutContainer;
