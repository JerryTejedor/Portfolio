import React, { useState } from 'react'
import logo from '../assets/img/logo.png'
import nav_icon1 from '../assets/img/nav-github.svg'
import nav_icon2 from '../assets/img/nav-linkedin.svg'

import menu from '../assets/img/icon-menu.svg'
import './Navbar.css'
const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false)



  const toogleMenu = () => {
    setMenuOpen(!menuOpen)
  }


  return (
    <header>
      <img src={logo} alt="logo" className='logo'/>
      <ul className='nabvar-list'>
        <li><a href="#home">Home</a></li>
        <li><a href="#skills">Skills</a></li>
        <li><a href="#projects">Projects</a></li>
      </ul>
      <ul className='nabvar-list__icon'>
          <li><a href="https://github.com/JerryTejedor" target='_blank'><img src={nav_icon1} alt="" /></a></li>
          <li><a href="https://www.linkedin.com/in/jerry-f-padilla-t-07246a255/" target='_blank'><img src={nav_icon2} alt="" /></a></li>
        <a className='btn-connect' href="#contact">contactame</a>
        </ul>
        <span className='icon-menu' onClick={toogleMenu}><img src={menu} alt="" /></span>
      
        <ul className={`nav-active-list ${menuOpen ? 'active' : ''}`}>
          <li><a href="#home">Home</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#projects">Projects</a></li>
          <button className='btn-active-connect'><a href="#contact">Contactame</a></button>
        </ul>
        
    </header>
  )
}

export default Navbar