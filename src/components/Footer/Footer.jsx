import React from 'react'
import logo from '../assets/img/logo.png'
import nav_icon1 from '../assets/img/nav-github.svg'
import nav_icon2 from '../assets/img/nav-linkedin.svg'
import './Footer.css'
const Footer = () => {
  return (
    <footer className='footer'>
        <div className='footer-left'>
            <img src={logo} alt="" className='logo'/>
            <h2>
              Gracias por explorar mi rincón digital. Siéntete libre de contactarme para colaboraciones 
              o simplemente para compartir ideas. ¡Hagamos que la web sea aún más increíble juntos!
            </h2> 
        </div>
        <hr />
        <div className='footer-right'> 
        <h3>© Copyright 2024. Hecho por <b>JERRY PADILLA</b></h3>
        <ul className='nabvar-list__icon'>
          <li><a href="https://github.com/JerryTejedor" target='_blank'><img src={nav_icon1} alt="" /></a></li>
          <li><a href="https://www.linkedin.com/in/jerry-f-padilla-t-07246a255/" target='_blank'><img src={nav_icon2} alt="" /></a></li>
        </ul>
        </div>
    </footer>
  )
}

export default Footer