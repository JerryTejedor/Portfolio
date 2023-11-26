import React from 'react';
import img from '../assets/img/header-img.svg';
import arrow from '../assets/img/icon-arrow.png';
// import Pdf from '../Pdf/Cv';
// import { PDFDownloadLink } from '@react-pdf/renderer';
import './Home.css';

const Home = () => {
  return (
    <main id='home'>
      {/* Sección derecha del contenido principal */}
      <section className='main__right'>
        <h2>Bienvenido Al Portafolio</h2>
        {/* Efecto de máquina de escribir */}
        <h1> Hola! Soy Jerry Desarrollador Front-end</h1>

        <h3>
          Un Desarrollador Web con enfoque en Frontend, especializado en la 
          construcción de la interfaz de usuario de sitios web y aplicaciones web, 
          contribuyendo de manera significativa al éxito general del producto.
        </h3>
        {/* Enlace para descargar el currículum en PDF */}
        {/* <PDFDownloadLink document={<Pdf />} fileName='Cv' style={{ textDecoration: 'none' }}>
          {({ loading }) => (loading ? 'loading document' : <button className='btn-cv'>Ver cv <img src={arrow} alt="" /></button>)}
        </PDFDownloadLink> */}
      </section>
      {/* Sección izquierda del contenido principal */}
      <section className='main__left'>
        <img src={img} alt="" />
      </section>
    </main>
  );
};

export default Home;
