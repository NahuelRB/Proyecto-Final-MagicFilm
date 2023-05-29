import React, { createContext, useState, useEffect, useContext } from "react";

const SessionContext = createContext(
  {
    isAuthenticated : false,
    authUser :null,
    handleLogin:()=>{},
    logout:()=>{},
  }
);

export const SessionProvider = ({ children }) => {
  const [authUser, setAuthUser] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    // Obtener los datos del usuario desde el almacenamiento (por ejemplo, localStorage o sessionStorage)
    const storedUser = localStorage.getItem("session");

    if (storedUser) {
      setAuthUser(JSON.parse(storedUser));
      setIsAuthenticated(true);
      console.log(
        "Datos del usuario recuperados desde el almacenamiento:",
        JSON.parse(storedUser)
      );
    }
  }, []);

  const handleLogin = async ({ username, password }) => {
    // Lógica para realizar el inicio de sesión

    // Guardar la sesión en el localStorage
    if (password === "1234") {
      throw new Error("Contraseña incorrecta");
    }
    let user = { id: 1, name: "prueba", email: "email@email.com", rol: "1" }; // Esto debe venir de algun servicio
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

  const sessionContextValues = {
    isAuthenticated,
    authUser,
    handleLogin,
    logout,
  };

  return (
    <SessionContext.Provider value={sessionContextValues}>
      {children}
    </SessionContext.Provider>
  );
};

export default function useAuth() {
  return useContext(SessionContext);
}
