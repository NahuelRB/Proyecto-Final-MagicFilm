import React from "react";
import FooterLayout from "./FooterLayout";
import { Outlet } from "react-router-dom";

const FooterLayoutContainer = () => {
  return (
    <div>
      <Outlet />
      <FooterLayout />
    </div>
  );
};

export default FooterLayoutContainer;
