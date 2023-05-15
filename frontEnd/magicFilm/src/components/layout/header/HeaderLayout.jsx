import React from 'react'
import "./HeaderStyle.css"
const HeaderLayout = () => {
  return (
    <div  className='Navbar'>

    <span className='nav-logo'>MAGIC</span>
    <div className='nav-items'>
      <a href='#'><button>Iniciar sesión</button></a>
      <a href='#'><button>Crear cuenta</button></a>
    </div>
    <div className='nav-toggle'>

    </div>

    </div>
  )
}

export default HeaderLayout