import Nav from './Components/Nav/Nav.jsx';
import Landing from './Components/Landing/Landing.jsx';
import BackToTop from './Components/BackToTop/BackToTop.jsx';
import SobreMi from './Components/SobreMi/SobreMi.jsx';
import Skills from './Components/Skills/Skills.jsx';
import Proyectos from './Components/Proyectos/Proyectos.jsx';
import Recomendaciones from './Components/Recomendaciones/Recomendaciones.jsx';
import Contactame from './Components/Contactame/Contactame.jsx';
import Footer from './Components/Footer/Footer.jsx';
import ExpLaboral from './Components/ExpLaboral/ExpLaboral.jsx';
import img from './Components/ExpLaboral/006ee1d92a392f74c9139-removebg-preview (1).png'

function App() { 
  return (
    <>
      <div className="h-auto w-screen bg-gradient-to-l from-white to-tertiary  z-0">
        <div className="h-screen w-screen">
          <Nav/>
          <Landing/>
          <BackToTop/>
        </div>
        <div className="">
          <SobreMi/>
        </div>
        <div id='skills' className="">
          <h1 className="my-10 ml-4 text-3xl font-bold text-primary text-center">Skills</h1>
          <Skills/>
        </div>

        <div id='proyectos' className="">
          <h1 className="my-10 ml-4 text-3xl font-bold text-primary text-center">Proyectos</h1>
          <Proyectos/>
        </div>

        <h3 className="text-3xl text-primary text-center font-bold my-10 -ml-3">Experiencia</h3>
        <div className="grid md:grid-cols-2 my-8 mx-12 grid-cols-1 aling-start">
          <div className='order-last md:order-start'>
          <ExpLaboral/>
          </div>
          <div className=''>
            <img src={img} />
          </div>
          
        </div>

        <div className="">
          <Recomendaciones/>
        </div>

        <div id='contactame' className="h-screen">
          <Contactame/>
          <Footer/>
        </div>


      </div>

    </>
  );
}

export default App;
