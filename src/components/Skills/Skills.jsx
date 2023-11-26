import './Skills.css'
import js from '../assets/img/icon-js.svg'
import react from '../assets/img/icon-react.svg'
import css from '../assets/img/icon-css.svg'
import html from '../assets/img/icon-html.svg'
import tailwind from '../assets/img/icon-tailwind.svg'
import git from '../assets/img/icon-git.svg'
import fondo1 from '../assets/img/color-sharp.png'

const Skills = () => {
  return (
    <section className='skills' id='skills'>
      <h1>Habilidades</h1>
      <img src={fondo1} alt="" className='fondo'/>
      <h2>
        Soy un apasionado Desarrollador Web con sólidos conocimientos en lenguajes fundamentales 
        como JavaScript, CSS y HTML. Mi destreza en Git garantiza una gestión eficiente del código, 
        mientras que mi dominio de las tecnologías modernas como React demuestra mi capacidad para 
        construir interfaces dinámicas y altamente funcionales. Además, mi experiencia con frameworks 
        como Tailwind y preprocesadores como Sass refleja mi compromiso con la eficiencia y el diseño 
        estilizado en cada proyecto. Mi enfoque meticuloso y mi habilidad para colaborar eficazmente 
        hacen de mí un profesional integral en el desarrollo Frontend.
      </h2>
      <div className='img-skills'>
        <span>
         <img src={html} alt="" className='img-icon' />
         <h3>html</h3>
        </span>
        <span>
         <img src={css} alt="" className='img-icon' />
         <h3>css</h3>
        </span>
        <span>
         <img src={js} alt="" className='img-icon' />
         <h3>js</h3>
        </span>
        <span>
         <img src={react} alt="" className='img-icon' />
         <h3>react</h3>
        </span>
        <span>
         <img src={tailwind} alt="" className='img-icon' />
         <h3>Tailwind</h3>
        </span>
        <span>
         <img src={git} alt="" className='img-icon' />
         <h3>Git</h3>
        </span>
    
      </div>
    </section>
  )
}


export default Skills