import { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./sidebar.css";
import PersonIcon from "@mui/icons-material/Person";
import MovieIcon from "@mui/icons-material/Movie";
import HomeIcon from "@mui/icons-material/Home";
import CategoryIcon from "@mui/icons-material/Category";

const sidebarNavItems = [
  {
    display: "Home",
    icon: <HomeIcon></HomeIcon>,
    to: "/",
    section: "",
  },
  {
    display: "Usuarios",
    icon: <PersonIcon></PersonIcon>,
    to: "/addUser",
    section: "addUser",
  },
  {
    display: "Agregar Película",
    icon: <MovieIcon></MovieIcon>,
    to: "/movie",
    section: "movie",

    /*  subNav: [
      {
        display: "Agregar",
        icon: <i className="bx bx-film"></i>,
        to: "/movie/new",
        section: "movie",
      },
      {
        display: "Eliminar",
        icon: <i className="bx bx-film"></i>,
        to: "/movie/delete",
        section: "movie",
      },
    ], */
  },
  {
    display: "Eliminar Película",
    icon: <MovieIcon></MovieIcon>,
    to: "/delete",
    section: "delete",
  },
  {
    display: "Categorías",
    icon: <CategoryIcon></CategoryIcon>,
    to: "/newcategory",
    section: "newcategory",
  },
];

const Sidebar = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const sidebarRef = useRef();
  const location = useLocation();

  // useEffect(() => {
  //   setTimeout(() => {
  //     const sidebarItem = sidebarRef.current.querySelector(
  //       ".sidebar__menu__item"
  //     );
  //     indicatorRef.current.style.height = `${sidebarItem.clientHeight}px`;
  //     setStepHeight(sidebarItem.clientHeight);
  //   }, 50);
  //   console.log(indicatorRef);
  // }, []);

  // change active index
  useEffect(() => {
    const curPath = window.location.pathname.split("/")[1];
    const activeItem = sidebarNavItems.findIndex(
      (item) => item.section === curPath
    );
    setActiveIndex(curPath.length === 0 ? 0 : activeItem);
  }, [location]);

  return (
    <div className="sidebar">
      <div className="sidebar__logo">Panel Admin</div>
      <div ref={sidebarRef} className="sidebar__menu">
        {sidebarNavItems.map((item, index) => (
          <Link to={item.to} key={index}>
            <div
              className={`sidebar__menu__item ${
                activeIndex === index ? "active" : ""
              }`}
            >
              <div className="sidebar__menu__item__icon">{item.icon}</div>
              <div className="sidebar__menu__item__text">{item.display}</div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
