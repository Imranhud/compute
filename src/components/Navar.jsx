import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/logo.svg'
import menu from '../assets/menu.svg'
import close from '../assets/close.svg'


const NavBar = (props) => {
  const [toggle, setToggle] = useState(false)

  function HashChangeMenu(){
    setToggle((prev) => (!prev))
  }
  return (
    <nav className="bg-blue-600 flex items-center fixed w-[100%] justify-center flex-col p-4 text-white">
      <div className="container mx-auto flex justify-between items-center">
        <img src={logo} alt="" />
        <div className="sm:hidden">
          <img onClick={HashChangeMenu} src={toggle ? menu : close} alt=""/>
        </div>
        <div className="hidden sm:flex">
          <ul className='flex mr-4'>
            <li className='mr-8'>{props.mam}</li>
            <li className='mr-4'>{props.mam}</li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default NavBar