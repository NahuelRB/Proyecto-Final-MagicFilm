import React from "react";
import HeaderLayout from "../header/HeaderLayout";
import FooterLayout from "../footer/FooterLayout";

import "./Layout.css";

const Layout = ({ children }) => {
  return (
    <div className="container-app">
      <HeaderLayout />
      <main>{children}</main>
      <FooterLayout />
    </div>
  );
};

export default Layout;
