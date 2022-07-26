import React, { useEffect, useState } from "react";
import {BsChevronRight, BsChevronLeft} from 'react-icons/bs'

const recomendaciones = [ 
    {//jhoskar
    img: 'https://media-exp1.licdn.com/dms/image/C4D03AQFuJS1hN3HeYA/profile-displayphoto-shrink_800_800/0/1658157042746?e=1665014400&v=beta&t=drEzB_pzwWMJSPhkXRP56D2EF3vF5ZWzRKj-tWkkd8o',
    fullname: 'Jhoskar Toro',
    profesion:'Full Stack Developer',
    comentario: 'Miguel es un gran compañero y un excelente programador, posee grandes habilidades sociales y logico-matematicas para resolver cualquier tarea o problema que se le presenten. En cualquier cargo que desempeñe se que explotara todo su potencial para dar lo mejor de si, fue un placer trabajar con él.'
},
{//jessi
    img: 'https://media-exp1.licdn.com/dms/image/C4E03AQGxwkKRABsfmg/profile-displayphoto-shrink_800_800/0/1648914317470?e=1664409600&v=beta&t=-NpW-3O2Nt-H4TstQosL_JSBxfkh3QO3LjWAF-gzOzo',
    fullname: 'Jessica Longo',
    profesion:'Full Stack Developer',
    comentario: 'Miguel es un desarrollador con gran capacidad de aprendizaje y facilidad en la resolución de problemas. Es constante, responsable y no se rinde hasta alcanzar los objetivos, apuntando siempre a los mejores resultados. Más allá de sus grandes habilidades técnicas, Miguel es un excelente compañero, siempre dispuesto a ayudar, transmitiendo alegría y positivismo al equipo!'
},
{//tomas
    img: 'https://media-exp1.licdn.com/dms/image/C4D03AQHPQn3Zt0Da6Q/profile-displayphoto-shrink_800_800/0/1657901751450?e=1666224000&v=beta&t=dwAGT2Nh7cO0iPQgUW05_BvQnXWlc3Ol0Z4zGIcsMVM',
    fullname: 'Tomás Ledesma',
    profesion:'Full Stack Developer',
    comentario: 'Miguel es un excelente compañero, sabe desenvolverse muy bien en el Frontend, tanto lógicamente como a lo que diseño respecta. Compartimos equipo dentro de un proyecto, aquí pude observar que maneja una muy buena comunicación y escucha activa, además esta siempre dispuesto a aprender y a dar una mano a cualquier miembro del equipo que lo necesite.'
},
{ //pablo
    img: 'https://pablo-causa.netlify.app/static/media/ProfilePicture.07cabc01698743cf6de4.jpg',
    fullname: 'Pablo Augusto Causa',
    profesion:'Full Stack Developer Jr Advanced.',
    comentario: 'Miguel worked excellent in the team. He was in charge of the Front End of the project and showed great knowledge and skills in order to address all the required tasks. Also, He knew how to adapt very well to the team and cooperate with all the members. I trongly recommend him for any company.'
},
{//eze
    img: 'https://media-exp1.licdn.com/dms/image/D4D35AQGvlCsibn8sxw/profile-framedphoto-shrink_800_800/0/1650117729945?e=1661101200&v=beta&t=7eKi1GfveT1TZiLmdZEh90X-ADNGXyuJ4csFnrakSt4',
    fullname: 'Ezequiel Faszczak',
    profesion:'Full Stack Developer | Web Designer',
    comentario: 'He tenido el placer de compartir un proyecto con Miguel y puedo decir que tiene una gran capacidad y gran conocimiento respecto de la programacion. Además es una gran persona con la que siempre pude contar cada vez que me encontraba trabado o necesitaba ayuda.'
},
{//ale
    img: 'https://media-exp1.licdn.com/dms/image/C4E03AQEqLT2pSyGTJw/profile-displayphoto-shrink_800_800/0/1651720452796?e=1665014400&v=beta&t=hsH1U_au--Y54fEquueDqcdt_WjxusVSFEJHPSHIVEc',
    fullname: 'Alejandro Palacio',
    profesion:'Full Stack Developer',
    comentario: 'Migue es un excelente profesional no solo técnicamente sino también socialmente, trabaja en equipo es autodidacta y además es crack para el Frontend. Un gusto enorme trabajar con él.'
}
]

export default function Recomendaciones (){
    const [state, setState] = useState(['','hidden', 'hidden','hidden', 'hidden', 'hidden']);
    const  [widthScreen, setWidthScreen] = useState(window.innerWidth);


    useEffect(() => {
        
        function handleResize() {
            setWidthScreen(window.innerWidth)
        }
        window.addEventListener('resize', handleResize)
    })   
    
    
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

            <div className="container my-24 mx-auto">


                <section className="mb-32 text-gray-800 text-center">

                    <h2 className="text-3xl text-primary font-bold mb-12">Recomendaciones</h2>

                        <div id="carouselExampleCaptions" className="carousel slide relative carousel-dark" data-bs-ride="carousel">
                        
                        <ul className="carousel-inner relative w-full overflow-hidden xl:text-lg">

                            {recomendaciones.map( (persona, index) => {
                                
                                return (
                                    <li id={`reco-${index}`} className={`carousel-item ${state[index]} relative float-left w-full`} key={`li-${index}`}>
                                        <img  className="rounded-full shadow-lg mb-6 mx-auto w-36 h-36 "
                                            src={`${persona.img}`} alt="avatar" /*style="width: 150px" *//>
                                        <div className="flex flex-wrap justify-center">
                                            <div   className="grow-0 shrink-0 basis-auto w-full lg:w-8/12 px-3">
                                                <h5  className="text-lg text-black font-bold mb-3">{`${persona.fullname}`}</h5>
                                                <p  className="font-medium text-gray-700 mb-4">{`${persona.profesion}`}</p>
                                                
                                                <p  className="text-black mb-6">
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

                            <span className="carousel-control-prev-icon inline-block bg-no-repeat" aria-hidden="true">   
                            </span>

                            <span className="visually-hidden"><BsChevronLeft className="text-primary h-10 w-10  hover:scale-105"/>
                            </span>
                            
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