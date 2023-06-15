import React from "react";

import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import "./sidebar.scss";
import "boxicons/css/boxicons.min.css";

const SidebarContainer = () => {
  return (
    <div className="sidebar-container">
      {/*  <aside>
        <Sidebar />
      </aside>
      <article>
        <Outlet />
      </article> */}

      <Sidebar />
      <Outlet />
    </div>
  );
};

export default SidebarContainer;
