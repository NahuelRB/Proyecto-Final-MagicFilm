import React, { useContext } from "react";
import { SessionContext } from "../../../context/SessionContext";
import Login from "./login";

const LoginContainer = () => {
  const { handleLogin } = useContext(SessionContext);
  const handleLoginSubmit = async (e) => {
    e.preventDefault();
    const data = {
      username: e.target.username.value,
      password: e.target.password.value,
    };
    handleLogin(data);

    console.log("🚀 ~ file: loginContainer.jsx:9 ~ handleLogin ~ data:", data);
  };
  return <Login handleLogin={handleLoginSubmit} />;
};

export default LoginContainer;
