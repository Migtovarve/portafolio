import Nav from './Components/Nav/Nav.jsx';
import Landing from './Components/Landing/Landing.jsx';
import BackToTop from './Components/BackToTop/BackToTop.jsx';
import SobreMi from './Components/SobreMi/SobreMi.jsx';
import Skills from './Components/Skills/Skills.jsx';
import Proyectos from './Components/Proyectos/Proyectos.jsx';
import Recomendaciones from './Components/Recomendaciones/Recomendaciones.jsx';
import Contactame from './Components/Contactame/Contactame.jsx';
import Footer from './Components/Footer/Footer.jsx';

function App() { 
  return (
    <>
      <div className="h-auto w-screen bg-gradient-to-l from-white to-tertiary  z-0">
        <div className="h-screen w-screen">
          <Nav/>
          <Landing/>
          <BackToTop/>
        </div>
        <div className=" border border-1">
          <SobreMi/>
        </div>
        <div className="">
          <h1 className="my-10 ml-4 text-3xl font-bold text-primary text-center">Skills</h1>
          <Skills/>
        </div>

        <div className="">
          <h1 className="my-10 ml-4 text-3xl font-bold text-primary text-center">Proyectos</h1>
          <Proyectos/>
        </div>

        <div className="">
          <h1 className="my-10 ml-4 text-3xl font-bold text-primary text-center">Experiencia Laboral</h1>
          
        </div>

        <div className="">
          <Recomendaciones/>
        </div>

        <div className="h-screen">
          <h1 className="my-10 ml-4 text-3xl font-bold text-primary text-center">Contactame</h1>
          <Contactame/>
          <Footer/>
        </div>


      </div>

    </>
  );
}

export default App;
