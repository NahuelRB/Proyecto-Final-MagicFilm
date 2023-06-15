import React, { useContext, useEffect } from "react";
import { AuthContext } from "../../../context/AuthContext";
import LoginPage from "./Login";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const LoginContainer = () => {
  const navigate = useNavigate();
  const { dispatch, dispatchActions, user } = useContext(AuthContext);

  useEffect(() => {
    if (user && user.id) {
      navigate("/", { replace: true });
    }
  }, []);
  const handleLogin = async (loginData) => {
    console.log(loginData);
  };
  const loginSubmit = async (e) => {
    e.preventDefault();
    const loginData = {
      username: e.target.username.value,
      password: e.target.password.value,
    };
    handleLogin(loginData)
      .then(() => {
        const data = {
          accessToken: "token",
          user: {
            name: "name",
            email: "email",
            rol: "admin",
            id: "2",
          },
        };
        dispatch({ type: dispatchActions.login, payload: data });
        navigate("/", { replace: true });
      })
      .catch((err) => {
        console.log(
          "🚀 ~ file: loginContainer.jsx:21 ~ loginSubmit ~ err:",
          err
        );
        Swal.fire({
          title: "Error",
          text: "Los datos de inicio de sesión son incorrectos. Por favor, inténtalo nuevamente.",
          icon: "error",
          confirmButtonColor: "#d33",
        }).then(() => {
          e.target.reset();
        });
      });
  };
  return <LoginPage handleLogin={loginSubmit} />;
};

export default LoginContainer;
