import React, { useState } from "react";
import {BsChevronRight, BsChevronLeft} from 'react-icons/bs'
const recomendaciones = [ 
    {
    img: 'https://portafol.vercel.app/static/media/lal.b45c2176a80514d3d864.jpeg',
    fullname: 'Jhoskar Toro',
    profesion:'Full Stack Developer',
    comentario: 'Miguel es un gran compañero y un excelente programador, posee grandes habilidades sociales y logico-matematicas para resolver cualquier tarea o problema que se le presenten. En cualquier cargo que desempeñe se que explotara todo su potencial para dar lo mejor de si, fue un placer trabajar con él.'
},
{
    img: 'https://media-exp1.licdn.com/dms/image/C4E03AQGxwkKRABsfmg/profile-displayphoto-shrink_800_800/0/1648914317470?e=1664409600&v=beta&t=-NpW-3O2Nt-H4TstQosL_JSBxfkh3QO3LjWAF-gzOzo',
    fullname: 'Jessica Longo',
    profesion:'Full Stack Developer',
    comentario: 'Miguel es un desarrollador con gran capacidad de aprendizaje y facilidad en la resolución de problemas. Es constante, responsable y no se rinde hasta alcanzar los objetivos, apuntando siempre a los mejores resultados. Más allá de sus grandes habilidades técnicas, Miguel es un excelente compañero, siempre dispuesto a ayudar, transmitiendo alegría y positivismo al equipo!'
},
{
    img: 'https://tomas-ledesma.vercel.app/static/media/Profile-removebg-preview-modified-removebg-preview.dc4e6adcfe862ce21211.png',
    fullname: 'Tomás Ledesma',
    profesion:'Full Stack Developer',
    comentario: 'Miguel es un excelente compañero, sabe desenvolverse muy bien en el Frontend, tanto lógicamente como a lo que diseño respecta. Compartimos equipo dentro de un proyecto, aquí pude observar que maneja una muy buena comunicación y escucha activa, además esta siempre dispuesto a aprender y a dar una mano a cualquier miembro del equipo que lo necesite.'
},
{
    img: 'https://pablo-causa.netlify.app/static/media/ProfilePicture.07cabc01698743cf6de4.jpg',
    fullname: 'Pablo Augusto Causa',
    profesion:'Full Stack Developer Jr Advanced.',
    comentario: 'Miguel worked excellent in the team. He was in charge of the Front End of the project and showed great knowledge and skills in order to address all the required tasks. Also, He knew how to adapt very well to the team and cooperate with all the members. I trongly recommend him for any company.'
},
{
    img: 'https://media-exp1.licdn.com/dms/image/D4D35AQGvlCsibn8sxw/profile-framedphoto-shrink_800_800/0/1650117729945?e=1659636000&v=beta&t=fItxv8DIdIC1BWDymeYddTVhhOAIRiK_cC4TaOzOoqE',
    fullname: 'Ezequiel Faszczak',
    profesion:'Full Stack Developer | Web Designer',
    comentario: 'He tenido el placer de compartir un proyecto con Miguel y puedo decir que tiene una gran capacidad y gran conocimiento respecto de la programacion. Además es una gran persona con la que siempre pude contar cada vez que me encontraba trabado o necesitaba ayuda.'
},
]

export default function Recomendaciones (){
   const [state, setState] = useState(['hidden','hidden', 'hidden','hidden', '',])


    const hidden = 'hidden'

    const clickNext = (e) => {
        e.preventDefault();
        const i = state.findIndex( el => el.length === 0 );
        const current = state.slice();//copia de state
        current[i] = 'hidden';//oculto el actual
        !(i === state.length-1) ? current[i+1] = '': current[0] = ''
        setState(current);
    }

    const clickPrevious = (e) => {
        e.preventDefault();
        const i = state.findIndex( el => el.length === 0 );
        const current = state.slice();//copia de state
        current[i] = 'hidden';//oculto el actual
        !(i === 0) ? current[i-1] = '': current[state.length-1] = ''
        setState(current);
    }

    return (
        <>

            <div className="container my-24 px-6 mx-auto">


                <section className="mb-32 text-gray-800 text-center">

                    <h2 className="text-3xl text-primary font-bold mb-12">Recomendaciones</h2>

                        <div id="carouselExampleCaptions" className="carousel slide relative carousel-dark" data-bs-ride="carousel">
                        
                        <ul className="carousel-inner relative w-full overflow-hidden xl:text-lg">

                            {recomendaciones.map( (persona, index) => {
                                
                                return (
                                    <li id={`reco-${index}`} className={`carousel-item ${state[index]} relative float-left w-full`} key={`li-${index}`}>
                                        <img  className="rounded-full shadow-lg mb-6 mx-auto w-36 "
                                            src={`${persona.img}`} alt="avatar" /*style="width: 150px" *//>
                                        <div className="flex flex-wrap justify-center">
                                            <div   className="grow-0 shrink-0 basis-auto w-full lg:w-8/12 px-3">
                                                <h5  className="text-lg font-bold mb-3">{`${persona.fullname}`}</h5>
                                                <p  className="font-medium text-gray-700 mb-4">{`${persona.profesion}`}</p>
                                                
                                                <p  className="text-gray-500 mb-6">
                                                    <svg  aria-hidden="true" focusable="false" data-prefix="fas" data-icon="quote-left"
                                                    className="w-6 pr-2 inline-block text-primary" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                                    <path  fill="currentColor"
                                                        d="M464 256h-80v-64c0-35.3 28.7-64 64-64h8c13.3 0 24-10.7 24-24V56c0-13.3-10.7-24-24-24h-8c-88.4 0-160 71.6-160 160v240c0 26.5 21.5 48 48 48h128c26.5 0 48-21.5 48-48V304c0-26.5-21.5-48-48-48zm-288 0H96v-64c0-35.3 28.7-64 64-64h8c13.3 0 24-10.7 24-24V56c0-13.3-10.7-24-24-24h-8C71.6 32 0 103.6 0 192v240c0 26.5 21.5 48 48 48h128c26.5 0 48-21.5 48-48V304c0-26.5-21.5-48-48-48z">
                                                    </path>
                                                    </svg>{`${persona.comentario}`}
                                                </p>
                                            </div>
                                        </div>
                                    </li>
                                )

                            })}
                        </ul>

                        <button
                            onClick={(e)=> clickPrevious(e)}
                            className="carousel-control-prev absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline left-0"
                            type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                            <span className="carousel-control-prev-icon inline-block bg-no-repeat" aria-hidden="true"></span>
                            <span className="visually-hidden"><BsChevronLeft className="text-primary h-10 w-10 hover:scale-105"/></span>
                        </button>
                        <button
                            onClick={(e)=> clickNext(e)}
                            className="carousel-control-next absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline right-0"
                            type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                            <span className="carousel-control-next-icon inline-block bg-no-repeat" aria-hidden="true"></span>
                            <span className="visually-hidden"><BsChevronRight className="text-primary h-10 w-10 hover:scale-105"/></span>
                        </button>

                        </div>

                </section>


            </div>

        </>
    )
}