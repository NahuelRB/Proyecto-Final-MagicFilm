import React, { useState } from 'react'
import "./HeaderStyle.css"
const HeaderLayout = () => {

  const [isOpen, setIsOpen] = useState(false);
  return (
    <div  className='Navbar'>

    <span className='nav-logo'>MAGIC</span>
    <div className={`nav-items ${isOpen && "open"}`}>
     
      <a href='#'><button>Iniciar sesión</button></a>
      <a href='#'><button>Crear cuenta</button></a>
    </div>
    <div className={`nav-toggle ${isOpen && "open"}`}
     onClick={()=> setIsOpen(!isOpen)}>
      <div className='bar'></div>

    </div>

    </div>
  )
}

export default HeaderLayout