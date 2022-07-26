import React from "react";
import img from '../Landing/Admin-removebg-preview.png'
export default function SobreMi() {
    return (
        <>
            <div
            id='sobreMi'
            className='
            grid
            grid-cols-1
            mx-12
            sm:space-x-6
            md:grid-cols-2
            xl:text-lg
            '>

                <div  className="flex flex-col justify-center items-center  min-w-16">
                    <img className="" src={img}  />
                </div>

                <div className="flex flex-col justify-center items-center">

                    <div className="min-w-16">

                        <h1 className="text-3xl text-primary font-bold">Sobre Mi</h1>

                        <div className="text-black font-md text-justify">
                            <p>Hola, mi nombre es Miguel 😄</p><br/>

                            <p>👣 Me formé en el bootcamp de HENRY como full stack developer, porque siempre me llamó la atención programar y automatizar tareas. Descubrí que me gusta colaborar en equipos ya que puedo ayudar y aprender de mis compañeros.</p><br/>

                            <p>💻 Realicé junto con un grupo de seis personas una aplicación web, en donde colaboré como desarrollador Frontend, para que profesionales de la Psicología puedan ofrecer sus servicios a clientes potenciales. También desarrolle una SPA donde puedes buscar información sobre todos los países y crear actividades para realizar en diferentes países.</p><br/>

                            <p>🚀 Siempre me ha apasionado la tecnología y buscar la forma de aplicarla para que me ayude a realizar tareas de forma fácil. Busco siempre aprender y mejorar mis habilidades tanto profesionales como personales para acercarme a la persona que quiero ser.</p><br/>
                        </div>

                    </div>
                </div>

            </div>
        </>
    )
}