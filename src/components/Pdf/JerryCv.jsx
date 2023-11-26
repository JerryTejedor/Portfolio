import React from 'react'
import img from '../assets/img/persona.jpg'
import nav_icon1 from '../assets/img/nav-icon1.svg'
import nav_icon2 from '../assets/img/nav-icon2.svg'
import nav_icon3 from '../assets/img/nav-icon3.svg'
import './JerryCv.css'
const JerryCv = () => {
  return (
    <div>
        <div className='encabezado'>
            <img src={img} alt="" />
            <div className='texto-encabezado'>
                <h1>Carla Rodriguez</h1>
                <h3>Developer Web</h3>
            </div>
        </div>
        <div className='abajo'>
            <div className='contacto'>
                <h2>Contacto</h2>
                <hr/>
             <ul className='iconos'>
                 <li><span><img src={nav_icon1} alt="" /> </span>+57 3107081071</li>
                 <li><span><img src={nav_icon2} alt="" /></span> jerry@gmail.com</li>
                 <li><span><img src={nav_icon3} alt="" /></span> www.porfolioweb.com</li>
             </ul>
             <h2>Habilidades</h2>
             <hr />
             <ul>
                <li>liderazgo</li>
                <li>liderazgo</li>
                <li>liderazgo</li>
                <li>liderazgo</li>
                <li>liderazgo</li>
                <li>liderazgo</li>
             </ul>
             <h2>Educacion</h2>
             <hr />
             <ul>
                <li>Bachiller <span>2020</span></li>
                <li>Certificado de google <span>2023</span></li>   
            </ul>
            </div>
            <div className='acerca'>
                <h2>Acerca de mi</h2>
                <hr />
                <p>
                 Lorem ipsum dolor sit amet, consectetur adipiscing 
                 elit, sed do eiusmod tempor incididunt ut labore et dolore 
                 magna aliqua. Nulla facilisi morbi tempus iaculis urna id volutpat lacus.
                </p>
                <h2>experiencia laboral</h2>
                <ul>
                    <li>Area de contavilidad empresa elite flower 2023 </li>

                    <p>
                     Eu augue ut lectus arcu bibendum at varius vel 
                     pharetra vel turpis nunc eget lorem dolor sed viverra ipsum nunc.
                    </p>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default JerryCv