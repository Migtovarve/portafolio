import React from "react";
import psicoApp from './2.png'
import countriesApp from './countriesApp.png'
import todoApp from './todoApp.png'
import {TbWorld} from 'react-icons/tb'
import { SiGithub } from "react-icons/si";

const bgCards = 'bg-gradient-to-l from-tertiary to-white'
const projects = [
    {
        nombre: 'PsicoApp',
        deploy: 'https://psico-app.vercel.app',
        imagen: psicoApp,
        gitHub: 'https://github.com/tomasld13/PF-psicoApp',
        desc: 'Es una aplicación web que conecta clientes con psicólogos de toda Argentina de forma remota, pudiendo crear e iniciar sesión con una cuenta de paciente o psicólogo, agendar, pagar citas con psicólogos y chatear en vivo con los mismos.'
    },
    {
        nombre: 'CountriesApp',
        deploy: 'https://projecti-countries.vercel.app',
        imagen: countriesApp,
        gitHub: 'https://github.com/Migtovarve/PI-Countries',
        desc:'Diseñe y desarrolle una aplicación web de países que incluye: búsquedas, filtrados, ordenamientos y creación de actividades para realizar en los diversos países.'
    },
    {
        nombre: 'ToDoApp',
        deploy: 'https://www.linkedin.com/posts/miguel-tovar-developer_hola-red-les-comparto-un-video-de-una-activity-6958798914430914560-lNkh?utm_source=linkedin_share&utm_medium=member_desktop_web',
        imagen: todoApp,
        gitHub: 'https://github.com/Migtovarve/TODO-ConsoleApp',
        desc:'Aplicación de consola interactiva, con opciones que se pueden seleccionar con las teclas de flecha, números y con la barra espaciadora cuando hay varias opciones.'
    },

]

export default function Proyectos() {

    return (

        <div className="pt-24">
            <div className={`
                grid
                sm:grid-cols-2
                lg:grid-cols-3
                mx-6
                flex-wrap
                justify-center
                min-w-64
            `}>

                {projects.map( ( project, i ) => {   
                    return (
                        <div key={`p-${i}`} className="flex justify-center my-2">

                            <div className={`rounded-lg shadow-lg bg-cards min-w-16 max-w-18 hover:scale-102 xl:max-w-25`}>

                                <a href={project.deploy} target='_blank' data-mdb-ripple="true" data-mdb-ripple-color="light">

                                    <img className="rounded-t-lg" src={project.imagen} alt=""/>

                                </a>

                                <div className="p-6">

                                    <h5 className=" text-xl font-medium mb-2 text-center ">{project.nombre}</h5>
                                    <p className="text-start">{project.desc}</p>
                                    <div className="flex justify-center space-x-6 pt-10">

                                        <a href={project.gitHub} target='_blank' >

                                            <SiGithub className=" w-9 h-9 hover:scale-110"/>

                                        </a>

                                        <a href={project.deploy} target='_blank' > 

                                            <TbWorld className=" w-9 h-9 hover:scale-110"/>

                                        </a>

                                    </div>

                                </div>
                            </div>
                        </div>
                    )
                })}

            </div>
        </div>
    )
}