import React, { createContext, useState, useEffect } from "react";

export const SessionContext = createContext();

export const SessionProvider = ({ children }) => {
  const [userData, setUserData] = useState({});
  const [isLogged, setIsLogged] = useState(false);

  useEffect(() => {
    // Comprobar si existe una sesión en el localStorage al cargar el componente
    const session = localStorage.getItem("session");
    const sessionData = session ? JSON.parse(session) : null;
    if (sessionData) {
      setIsLogged(true);
      setUserData(sessionData);
    }
  }, []);

  const handleLogin = async ({ username, password }) => {
    // Lógica para realizar el inicio de sesión

    // Guardar la sesión en el localStorage
    let user = { id: 1, name: "prueba", email: "email@email.com", rol: "1" }; // Esto debe venir de algun servicio
    localStorage.setItem("session", JSON.stringify(user));
    setUserData(user);
    setIsLogged(true);
  };

  const handleLogout = () => {
    // Lógica para cerrar la sesión
    // Se hace peticion al back para eliminar el acceso

    // Eliminar la sesión del localStorage
    localStorage.removeItem("session");
    setUserData({});
    setIsLogged(false);
  };

  const sessionContextValues = {
    isLogged,
    userData,
    handleLogin,
    handleLogout,
  };

  return (
    <SessionContext.Provider value={sessionContextValues}>
      {children}
    </SessionContext.Provider>
  );
};
