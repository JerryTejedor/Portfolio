import './Project.css'
import img1 from '../assets/img/project-coffe.png'
import img2 from '../assets/img/project-pokedex.png'
import img3 from '../assets/img/project-portfolio-v1.png'
import img4 from '../assets/img/project-ecomerse.png'
import img5 from '../assets/img/project-landingpage.png'
import img6 from '../assets/img/project-portfolio-v2.png'
import fondo2 from '../assets/img/color-sharp2.png'
import nav_icon1 from '../assets/img/nav-github.svg'
import nav_icon2 from '../assets/img/nav-linkedin.svg'
// import { useState } from 'react'

const Project = () => {
// const [active, setActive] = useState();

    return (
        <section className='projects' id='projects'>
        <div className='text-projects'>
            <h1>Proyectos</h1>
            <h2>
              Desarrollador Frontend apasionado, he creado proyectos personales destacando mi habilidad 
              en la construcción de landing pages para negocios como cafeterías y experiencias de compra 
              en tiendas en línea. Utilizo tecnologías clave como JavaScript, CSS y HTML, integrando 
              APIs para mejorar la interactividad y la eficiencia en la obtención de datos externos. 
              Mis proyectos reflejan mi dedicación a combinar creatividad y funcionalidad en el desarrollo web.
            </h2>
        </div>

        {/* Esto LO ACTIVAREMOS CUANDO TENGAMOS MAS DE 6 PROJCTOS PARA MOSTRAS */}
        {/* <ul className='filter-projects'>
            <li onClick={() => {setActive("tab1")}}>{active === "tab1" ? <span>Tab 1</span> : <> Tab 1</>}</li>
            <li className='border-li' onClick={() => {setActive("tab2")}}>{active === "tab2" ? <span>Tab 1</span> : <> Tab 1</>}</li>
            <li onClick={() => {setActive("tab3")}}>{active === "tab3" ? <span>Tab 1</span> : <> Tab 1</>}</li>
        </ul> */}

        
        <div className='img-projects'>
            <span className='span-projects'>
            <img src={img1} alt="" className='img-project-img1'/>
             <div className='traslate-container'>
                <h2>CAFÉ</h2>
             <ul>
               <li><a href="https://github.com/JerryTejedor/coffe-landingPage" target='_blank'><img src={nav_icon1} alt="" className='social-icon'/></a></li>
               <li><a href="https://www.linkedin.com/in/jerry-f-padilla-t-07246a255/" target='_blank'><img src={nav_icon2} alt="" className='social-icon'/></a></li>
             </ul>
             </div>
            </span><span className='span-projects'>
            <img src={img2} alt="" className='img-project-img1'/>
             <div className='traslate-container'>
                <h2 style={{color: '#000'}}>Pokedex</h2>
             <ul>
               <li><a href="https://github.com/JerryTejedor/pokedex" target='_blank'><img src={nav_icon1} alt="" className='social-icon'/></a></li>
               <li><a href="https://www.linkedin.com/in/jerry-f-padilla-t-07246a255/" target='_blank'><img src={nav_icon2} alt="" className='social-icon'/></a></li>
             </ul>
             </div>
            </span>
            <span className='span-projects'>
            <img src={img3} alt="" className='img-project-img1'/>
             <div className='traslate-container'>
                <h2 style={{color: '#000'}}>PORTAFOLIO 1</h2>
             <ul>
               <li><a href="https://github.com/JerryTejedor/portfolio-v1" target='_blank'><img src={nav_icon1} alt="" className='social-icon'/></a></li>
               <li><a href="https://www.linkedin.com/in/jerry-f-padilla-t-07246a255/" target='_blank'><img src={nav_icon2} alt="" className='social-icon'/></a></li>
             </ul>
             </div>
            </span>
            <span className='span-projects'>
            <img src={img4} alt="" className='img-project-img1'/>
             <div className='traslate-container'>
                <h2 style={{color: '#000'}}>E-COMERCE</h2>
             <ul>
               <li><a href="https://github.com/JerryTejedor/ecomerce" target='_blank'><img src={nav_icon1} alt="" className='social-icon'/></a></li>
               <li><a href="https://www.linkedin.com/in/jerry-f-padilla-t-07246a255/" target='_blank'><img src={nav_icon2} alt="" className='social-icon'/></a></li>
             </ul>
             </div>
            </span>
            <span className='span-projects'>
            <img src={img5} alt="" className='img-project-img1'/>
             <div className='traslate-container'>
                <h2>LANDING PAGE</h2>
             <ul>
               <li><a href="https://github.com/JerryTejedor/landing-web-3.0" target='_blank'><img src={nav_icon1} alt="" className='social-icon'/></a></li>
               <li><a href="https://www.linkedin.com/in/jerry-f-padilla-t-07246a255/" target='_blank'><img src={nav_icon2} alt="" className='social-icon'/></a></li>
             </ul>
             </div>
            </span>
            <span className='span-projects'>
            <img src={img6} alt="" className='img-project-img1'/>
             <div className='traslate-container'>
                <h2>PORTAFOLIO</h2>
             <ul>
               <li><a href="#"><img src={nav_icon1} alt="" className='social-icon'/></a></li>
               <li><a href="https://www.linkedin.com/in/jerry-f-padilla-t-07246a255/" target='_blank'><img src={nav_icon2} alt="" className='social-icon'/></a></li>
             </ul>
             </div>
            </span>
            
        
            <img src={fondo2} alt="" className='fondo2'/>
        </div>
</section>
  )
}



export default Project

