import React, { useState } from "react";
import logo from "../../../assets/logo.svg";
import "./HeaderStyle.css";
import { Link } from "react-router-dom";
import people from "../../../assets/person.svg";

const HeaderLayout = ({ isLogged, handleLogout, userData }) => {
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
        {isLogged ? (
          <>
            <p className="user-data">Hola {userData.name}</p>
            <img
              src={userData.image ? userData.image : people}
              alt="user-avatar"
              className="user-avatar"
            />
            <button className="logout-button" onClick={handleLogout}>
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
        {isLogged && (
          <img
            src={userData.image ? userData.image : people}
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
