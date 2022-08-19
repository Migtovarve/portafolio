import React from "react";
import psicoApp from './3.png'
import countriesApp from './1.png'
import todoApp from './2.png'

const projects = [
    {
        nombre: 'ToDoApp',
        deploy: 'https://www.linkedin.com/posts/miguel-tovar-developer_hola-red-les-comparto-un-video-de-una-activity-6958798914430914560-lNkh?utm_source=linkedin_share&utm_medium=member_desktop_web',
        imagen: todoApp,
        gitHub: 'https://github.com/Migtovarve/TODO-ConsoleApp',
        fecha: 'Jun. 20 - Jul. 29',
        desc: ''
    },
    {
        nombre: 'PsicoApp',
        deploy: 'https://psico-app.vercel.app',
        imagen: psicoApp,
        gitHub: 'https://github.com/tomasld13/PF-psicoApp',
        fecha: 'Jun. 22 - Jul. 22',
        desc: 'Desarrolle una aplicación web que conecta clientes con psicólogos de toda Argentina de forma remota, pudiendo crear e iniciar sesión con una cuenta de paciente o psicólogo, agendar, pagar citas con psicólogos y chatear en vivo con los mismos.'
    },
    {
        nombre: 'CountriesApp',
        deploy: 'https://projecti-countries.vercel.app',
        imagen: countriesApp,
        gitHub: 'https://github.com/Migtovarve/PI-Countries',
        fecha: 'May. 22 - Jun. 22',
        desc: 'breve descripcion del proyecto'
    },


]

export default function Proyectos2() {
    return (
        <>

            <div className="border-l-2 border-primary mx-4 mt-16 min-w-[300px]">
                <div>
                    <div className="">

                        <div className="bg-primary w-6 h-6 flex items-center items-center justify-center rounded-full -ml-3">
                            <svg aria-hidden="true" focusable="false" data-prefix="fas" className=" w-3 h-3" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                            <path fill="currentColor" d="M0 464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V192H0v272zm64-192c0-8.8 7.2-16 16-16h288c8.8 0 16 7.2 16 16v64c0 8.8-7.2 16-16 16H80c-8.8 0-16-7.2-16-16v-64zM400 64h-48V16c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v48H160V16c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v48H48C21.5 64 0 85.5 0 112v48h448v-48c0-26.5-21.5-48-48-48z"></path>
                            </svg>
                        </div>

                        {projects.map((project)=> {
                            return (
                                <div className="block p-6 rounded-lg shadow-lg bg-cards ml-4 mb-10 mx-auto">

                                <div className="flex flex-wrap justify-between">
                                <img className="rounded-lg min-w-[226px] max-w-10 " src={project.imagen} alt=""/>

                                <div className="">
                                    <div className="justify-between mb-4 ">

                                        <p  className="font-medium  hover: focus: duration-300 transition ease-in-out text-sm xl:text-lg text-end ">{project.nombre}</p>

                                    </div>

                                    <div className="pl-8 max-w-[600px]">
                                        {project.desc}
                                    </div>

                                    <p  className="font-medium  hover: focus: duration-300 transition ease-in-out text-sm  xl:text-lg text-end">{project.fecha}</p>

                                </div>
                            </div>


                        </div>
                            )
                        })}
                        

                    </div>
                </div>
            </div>

        </>
    )
}