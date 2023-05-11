import React from 'react'
import { Outlet } from 'react-router-dom'
import HeaderLayout from './HeaderLayout'


const HeaderLayoutContainer = () => {
  return (
    <div>
        <HeaderLayout/>
        <Outlet/>
    </div>
  )
}

export default HeaderLayoutContainer