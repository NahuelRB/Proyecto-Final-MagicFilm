import React, { useContext, useEffect } from "react";
import { AuthContext } from "../../../context/AuthContext";
import { userLogin } from "../../../service/userServices";
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

  const loginSubmit = async (e) => {
    e.preventDefault();
    const loginData = {
      email: e.target.email.value,
      password: e.target.password.value,
    };
    userLogin(loginData)
      .then((data) => {
        const { accessToken, ...user } = data.data;
        dispatch({
          type: dispatchActions.login,
          payload: { accessToken, user },
        });
        navigate("/", { replace: true });
      })
      .catch((err) => {
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
