import React, { useState } from "react";
import logo from "../../../assets/logo.svg";
import "./HeaderStyle.css";
import { Link } from "react-router-dom";

const HeaderLayout = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <header className="Navbar">
      <Link to={"/"} style={{ display: "flex", flexDirection: "row" }}>
        <img src={logo} alt="logo" className="nav-logo" />
      </Link>
      <Link
        to="/"
        style={{
          color: "white",
          textDecoration: "none",
          marginLeft: 0,
          marginRight: "auto",
          fontSize: "1.3rem",
        }}
      >
        <b>El mejor Cinema</b>
      </Link>

      <div className={`nav-items ${isOpen && "open"}`}>
        <a href="#">
          <button className="login-button">Iniciar sesión</button>
        </a>
        <a href="/register">
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
