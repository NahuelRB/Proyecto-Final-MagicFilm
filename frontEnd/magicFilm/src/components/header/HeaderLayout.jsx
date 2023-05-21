import React, { useState } from "react";
import logo from "../../assets/logo.svg";
import "./HeaderStyle.css";
import { Link } from "react-router-dom";

const HeaderLayout = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <header className="Navbar">
      <Link to={"/"}>
        <img src={logo} alt="logo" className="nav-logo" />
      </Link>

      <div className={`nav-items ${isOpen && "open"}`}>
        <a href="#">
          <button className="login-button">Iniciar sesión</button>
        </a>
        <a href="#">
          <button className="signup-button">Crear cuenta</button>
        </a>
        <a href="/admin">
          <button className="signup-button">Admin</button>
        </a>
      </div>
      <div
        className={`nav-toggle ${isOpen && "open"}`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="bar"></div>
      </div>
    </header>
  );
};

export default HeaderLayout;
