import React, { createContext, useState, useEffect, useMemo } from "react";

export const SessionContext = createContext();

export const SessionProvider = ({ children }) => {
  const [authUser, setAuthUser] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const updateUser = () => {
    const storedUser = localStorage.getItem("session");

    if (storedUser) {
      setAuthUser(JSON.parse(storedUser));
      setIsAuthenticated(true);
      console.log(
        "Datos del usuario recuperados desde el almacenamiento:",
        JSON.parse(storedUser)
      );
    }
  };
  useEffect(() => {
    updateUser();
  }, []);

  const handleLogin = async ({ username, password }) => {
    // Lógica para realizar el inicio de sesión

    // Guardar la sesión en el localStorage
    if (password === "1234") {
      throw new Error("Contraseña incorrecta");
    }
    let user = {
      id: 1,
      name: "prueba",
      email: "email@email.com",
      rol: "admin",
    }; // Esto debe venir de algun servicio
    localStorage.setItem("session", JSON.stringify(user));
    setAuthUser(user);
    setIsAuthenticated(true);
  };

  const logout = () => {
    // Lógica para cerrar la sesión
    // Se hace peticion al back para eliminar el acceso

    // Eliminar la sesión del localStorage
    localStorage.removeItem("session");
    setAuthUser(null);
    setIsAuthenticated(false);
  };

  const sessionContextValues = useMemo(() => {
    return {
      isAuthenticated,
      authUser,
      handleLogin,
      logout,
    };
  }, [authUser]);

  return (
    <SessionContext.Provider value={sessionContextValues}>
      {children}
    </SessionContext.Provider>
  );
};
