import React, { useState } from "react";
import logo from "../../../assets/logo.svg";
import "./HeaderStyle.css";
import { Link } from "react-router-dom";

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

      <div className={`nav-items ${isOpen && "open"}`}>
        {isLogged ? (
          <>
            <p style={{ color: "white" }}>Hola {userData.name}</p>
            <img src={userData.image} alt="user-avatar" />
            <button className="logout-button" onClick={handleLogout} />
          </>
        ) : (
          <>
            <a href="/login">
              <button className="login-button">Iniciar sesión</button>
            </a>
            <a href="#">
              <button className="signup-button">Crear cuenta</button>
            </a>
          </>
        )}
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
