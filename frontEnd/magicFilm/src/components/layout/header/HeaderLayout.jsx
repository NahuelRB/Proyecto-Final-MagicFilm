import React, { useState } from "react";
import logo from "../../../assets/logo.svg";
import "./HeaderStyle.css";
import { Link } from "react-router-dom";
import people from "../../../assets/person.svg";

const HeaderLayout = ({ isAuthenticated, logout, authUser }) => {
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

      <div className={`nav-items ${isOpen ? "open" : ""}`}>
        {isAuthenticated ? (
          <>
            <p className="user-data">Hola {authUser.name}</p>
            <img
              src={authUser.image ? authUser.image : people}
              alt="user-avatar"
              className="user-avatar"
            />
            <button className="logout-button" onClick={logout}>
              Cerrar Sesion
            </button>
          </>
        ) : (
          <>
            <Link to="/login" className="login-button">
              Iniciar sesión
            </Link>
            <Link to="/register" className="signup-button">
              Crear cuenta
            </Link>
          </>
        )}
        <Link to="/admin" className="signup-button">
          Admin
        </Link>
      </div>
      <div
        className={`nav-toggle ${isOpen && "open"}`}
        onClick={() => setIsOpen(!isOpen)}
      >
        {isAuthenticated && (
          <img
            src={authUser.image ? authUser.image : people}
            alt="user-avatar"
            className="user-avatar"
          />
        )}
        <div className="bar"></div>
      </div>
    </header>
  );
};

export default HeaderLayout;
