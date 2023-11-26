
import './App.css'
import Contact from './components/Contact/Contact'
// import CustomAlert from './components/Contact/CustomAlert'
import Footer from './components/Footer/Footer'
import Home from './components/Home/Home'
import Navbar from './components/Navbar/Navbar'
import Project from './components/Projects/Project'
import Skills from './components/Skills/Skills'
// import Pdf_jerry from './components/Pdf/JerryCv'
// import Form from './components/PruevaForm/Form'

function App() {

  return (
    <div className='app'>
      <Navbar />
      <Home />
      <Skills />
      <Project />
      <Contact />
      <Footer />
      {/* <Pdf_jerry /> */}
    </div>
  )
}

export default App