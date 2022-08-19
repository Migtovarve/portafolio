import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter , Route , Routes } from 'react-router-dom';
import Nav from './Components/Nav/Nav';
import Proyectos from './Components/Proyectos/Proyectos'
import Proyectos2 from './Components/Proyectos2/Proyectos2';
import SobreMi from './Components/SobreMi/SobreMi.jsx'
import BackToTop from './Components/BackToTop/BackToTop.jsx';
import Contactame from './Components/Contactame/Contactame.jsx';
import ExpLaboral from './Components/ExpLaboral/ExpLaboral.jsx';
import Footer from './Components/Footer/Footer.jsx';
import img from './Components/ExpLaboral/006ee1d92a392f74c9139-removebg-preview (1).png'
import Landing from './Components/Landing/Landing.jsx';
import Recomendaciones from './Components/Recomendaciones/Recomendaciones.jsx';
import Skills from './Components/Skills/Skills.jsx';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
  <BrowserRouter>
    <Nav/>
    <Routes>
      {/* <Route path="/" element={}>
      </Route> */}
      <Route exact path="/" element={<App/>}>
      </Route>

      <Route exact path="/Portafolio" element={<Proyectos/>}>
      </Route>

      <Route exact path="/SobreMi" element={<SobreMi/>}>
      </Route>

      <Route exact path="/Contactame" element={<Contactame/>}>
      </Route>

    </Routes>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
