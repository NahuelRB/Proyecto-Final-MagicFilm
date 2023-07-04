
import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import "./sidebar.css";

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
      <div style={{ width: "100%" }}>
        <Outlet />
      </div>
    </div>
  );
};

export default SidebarContainer;
