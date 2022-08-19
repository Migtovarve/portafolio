import { useEffect, useState } from 'react';
import { BrowserRouter as Router , Route , Routes } from 'react-router-dom';
// import BackToTop from './Components/BackToTop/BackToTop.jsx';
// import Contactame from './Components/Contactame/Contactame.jsx';
// import ExpLaboral from './Components/ExpLaboral/ExpLaboral.jsx';
// import Footer from './Components/Footer/Footer.jsx';
// import img from './Components/ExpLaboral/006ee1d92a392f74c9139-removebg-preview (1).png'
import Landing from './Components/Landing/Landing.jsx';
import Nav from './Components/Nav/Nav.jsx';
// import Proyectos from './Components/Proyectos/Proyectos.jsx';
// import Recomendaciones from './Components/Recomendaciones/Recomendaciones.jsx';
// import Skills from './Components/Skills/Skills.jsx';
// import SobreMi from './Components/SobreMi/SobreMi.jsx';
import Home from './Components/Home/Home.jsx';

function App() {
  const [principalColor, setPrincipalColor] = useState("az-change")
  const [scrollValidate, setScrollValidate] = useState(false)
  const [bgCardColor, setBgCardColor] = useState('bg-card-color')

  /*useState("bg-gradient-to-l from-white to-tertiary")*/

  useEffect(() => { // Scroll move detected
    const handleScroll = event => {
      //console.log('window.scrollY', window.scrollY);
      (window.scrollY !== 0) ? setScrollValidate(true) : setScrollValidate(false)
      //console.log(scrollValidate);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrollValidate]);

  return (
    <>
      <div className="App">
        <Home principalColor={principalColor}/>
      </div>
 
        {/* <Footer principalColor={principalColor}/> */}

        {/* <BackToTop scrollValidate={scrollValidate} principalColor={principalColor}/> */}

        {/* <div className="">
          <SobreMi principalColor={principalColor}/>
        </div> */}

        {/* <div id='skills' className="">
          <h1 className="my-10 ml-4 text-3xl font-bold text-center">Skills</h1>
          <Skills principalColor={principalColor}/>
        </div> */}

        {/* <div id='proyectos' className="">
          <h1 className="my-10 ml-4 text-3xl font-bold text-center">Proyectos</h1>
          <Proyectos principalColor={principalColor}/>
        </div> */}

        {/* <h3 className="text-3xl text-center font-bold my-10 -ml-3">Experiencia</h3>
        <div className="grid md:grid-cols-2 my-8 mx-12 grid-cols-1 aling-start">
          <div className='order-last md:order-start'>
          <ExpLaboral principalColor={principalColor}/>
          </div>
          <div className=''>
            <img src={img} />
          </div>
          
        </div> */}

        {/* <div className="">
          <Recomendaciones principalColor={principalColor}/>
        </div> */}

        {/* <div id='contactame' className="h-screen">
          <Contactame principalColor={principalColor}/>
          
        </div> */}
    </>
  );
}

export default App;
