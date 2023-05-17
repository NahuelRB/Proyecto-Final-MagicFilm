import React, { useState } from 'react'
import logo from '../../../assets/logo.svg'
import "./HeaderStyle.css"
const HeaderLayout = () => {

  const [isOpen, setIsOpen] = useState(false);
  return (
    <div  className='Navbar'>

    <a href='/Home' className='nav-logo'><img src={logo} alt="logo" /></a>
    <div className={`nav-items ${isOpen && "open"}`}>
      <a href='#'><button className="login-button">Iniciar sesión</button></a>
      <a href='#'><button className="signup-button">Crear cuenta</button></a>
    </div>
    <div className={`nav-toggle ${isOpen && "open"}`}
     onClick={()=> setIsOpen(!isOpen)}>
      <div className='bar'></div>

    </div>

    </div>
  )
}

export default HeaderLayout