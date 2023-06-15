import React, { useState, useEffect } from "react";
import EmailVerifyPage from "./EmailVerify";

import noVigente from "../../../assets/images/image_11.svg";
import tick from "../../../assets/images/image_64.svg";
import equis from "../../../assets/images/image_66.svg";
import popCorn from "../../../assets/images/image_83.svg";
import robot from "../../../assets/images/image_85.svg";
import looking from "../../../assets/images/image_86.svg";
import alarm from "../../../assets/images/image_87.svg";

import Swal from "sweetalert2";
import { useNavigate, useLocation } from "react-router-dom";

const EmailVerifyContainer = () => {
  const navigate = useNavigate();
  const [state, setState] = useState({});
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  console.log(
    "🚀 ~ file: EmailVerifyContainer.jsx:20 ~ EmailVerifyContainer ~ searchParams:",
    searchParams.getAll
  );

  // Ejemplo de acceso a un parámetro de búsqueda específico
  const status = searchParams.get("status");
  const email = searchParams.get("email");
  const token = searchParams.get("token");
  const handleResend = () => {
    console.log("Reenviar email", email);
  };
  useEffect(() => {
    // const status = "pending";
    let stateData = {};
    if (status === "success") {
      stateData = {
        statusImage: tick,
        image: popCorn,
        title: "¡Bien! Hemos verificado tu cuenta de correo electrónico",
        subtitle:
          "Ya puedes disfrutar de las mejores películas en el mejor cinema. ",
        redirect: {
          title: "Iniciar sesión",
          link: "/login",
        },
      };
    } else if (status === "pending") {
      stateData = {
        statusImage: alarm,
        image: looking,
        title: "Aún te falta verificar tu cuenta de correo electrónico",
        subtitle:
          "Revisa el email que enviamos a tu correo para poder iniciar sesión. Si no lo recibiste o el link ya caducó, elige reenviar email.",
        resend: handleResend,
      };
    } else if (status === "expired") {
      stateData = {
        statusImage: equis,
        image: noVigente,
        title:
          "Ups! Sucedió un error al intentar verificar tu cuenta de correo electrónico ",
        subtitle:
          "Vuelve a dar clic en el email de confirmación que te enviamos, de lo contrario comunícate con nosotros. ",
        resend: handleResend,
      };
    } else if (status === "error") {
      stateData = {
        statusImage: equis,
        image: robot,
        title:
          "Ups! Sucedió un error al intentar verificar tu cuenta de correo electrónico ",
        subtitle:
          "Vuelve a dar clic en el email de confirmación que te enviamos, de lo contrario comunícate con nosotros. ",
      };
    }
    setState(stateData);
  }, []);
  return <EmailVerifyPage state={state} />;
};

export default EmailVerifyContainer;
