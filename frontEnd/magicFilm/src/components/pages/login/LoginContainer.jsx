import React, { useContext } from "react";
import { AuthContext } from "../../../context/AuthContext";
import LoginPage from "./login";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const LoginContainer = () => {
  const navigate = useNavigate();
  const { dispatch } = useContext(AuthContext);
  
  const loginSubmit = async (e) => {
    e.preventDefault();
    const loginData = {
      username: e.target.username.value,
      password: e.target.password.value,
    };
    handleLogin(loginData)
      .then((data) => {
        dispatch({ type: actions.login, payload: data });
        navigate("/", { replace: true });
      })
      .catch((err) => {
        Swal.fire({
          title: "Error",
          text: "Los datos de inicio de sesión son incorrectos. Por favor, inténtalo nuevamente.",
          icon: "error",
          confirmButtonColor: "#d33",
        }).then((result) => {
          console.log(
            "🚀 ~ file: loginContainer.jsx:22 ~ loginSubmit ~ result:",
            result
          );
          e.target.reset();
        });
      });

    console.log("🚀 ~ file: loginContainer.jsx:9 ~ login ~ data:", data);
  };
  return <LoginPage handleLogin={loginSubmit} />;
};

export default LoginContainer;
