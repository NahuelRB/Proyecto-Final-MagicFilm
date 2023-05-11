import React from "react";
import { Outlet } from "react-router-dom";
import FooterLayout from "./FooterLayout";

const FooterLayoutContainer = () => {
  return (
    <div>
      <Outlet/>
      <FooterLayout />
    </div>
  );
};

export default FooterLayoutContainer;
