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
    },
    {
        nombre: 'CountriesApp',
        deploy: 'https://projecti-countries.vercel.app',
        imagen: countriesApp,
        gitHub: 'https://github.com/Migtovarve/PI-Countries',
    },
    {
        nombre: 'ToDoApp',
        deploy: 'https://www.linkedin.com/posts/miguel-tovar-developer_hola-red-les-comparto-un-video-de-una-activity-6958798914430914560-lNkh?utm_source=linkedin_share&utm_medium=member_desktop_web',
        imagen: todoApp,
        gitHub: 'https://github.com/Migtovarve/TODO-ConsoleApp',
    },

]

export default function Proyectos() {

    return (
        <div className="flex mx-6 space-x-6 flex-wrap space-y-6 justify-evenly min-w-64 ">

            <div className="flex justify-center hidden">
                <div className="rounded-lg shadow-lg bg-white min-w-64">
                    <a href="#!" data-mdb-ripple="true" data-mdb-ripple-color="light">
                    <img className="rounded-t-lg" src="https://mdbootstrap.com/img/new/standard/nature/182.jpg" alt=""/>
                    </a>
                    <div className="p-6">
                    <h5 className="text-gray-900 text-xl font-medium mb-2">Card title</h5>
                    <p className="text-gray-700 text-base mb-4">
                        Some quick example text to build on the card title and make up the bulk of the card's
                        content.
                    </p>
                    <button type="button" className=" inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">Button</button>
                    </div>
                </div>
            </div>

            {projects.map( ( project, i ) => {   
                return (
                    <div key={`p-${i}`} className="flex justify-center">

                        <div className={`rounded-lg shadow-lg ${bgCards} min-w-16 max-w-18 hover:scale-102 xl:max-w-25`}>

                            <a href={project.deploy} target='_blank' data-mdb-ripple="true" data-mdb-ripple-color="light">

                                <img className="rounded-t-lg" src={project.imagen} alt=""/>

                            </a>

                            <div className="p-6">

                                <h5 className="text-gray-900 text-xl font-medium mb-2 text-center text-black">{project.nombre}</h5>

                                <div className="flex justify-center space-x-6 pt-10">

                                    <a href={project.gitHub} target='_blank' >

                                        <SiGithub className="text-primary w-9 h-9 hover:scale-110"/>

                                    </a>

                                    <a href={project.deploy} target='_blank' > 

                                        <TbWorld className="text-primary w-9 h-9 hover:scale-110"/>

                                    </a>

                                </div>

                            </div>
                        </div>
                    </div>
                )
            })}

        </div>
    )
}