import React, { useState } from "react";
import logo from "../../../assets/logo.svg";
import "./HeaderStyle.css";
import { Link } from "react-router-dom";
import people from "../../../assets/person.svg";

const HeaderLayout = ({ logout, user }) => {
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
        {user?.name ? (
          <>
            <p className="user-data">Hola {user.name}</p>
            <img
              src={user.image ? user.image : people}
              alt="user-avatar"
              className="user-avatar"
            />
            <button className="logout-button" onClick={logout}>
              Cerrar Sesion
            </button>
            <Link to="/admin" className="signup-button">
              Admin
            </Link>
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
      </div>
      <div
        className={`nav-toggle ${isOpen && "open"}`}
        onClick={() => setIsOpen(!isOpen)}
      >
        {user?.name && (
          <img
            src={user.image ? user.image : people}
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
