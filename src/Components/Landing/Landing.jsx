import React from "react";
import Button from "../Button/Button";
import RSociales from "../RSociales/RSociales.jsx";
import perfil from './perfil.png'
import { SiLinkedin, SiGithub } from "react-icons/si";


export default function Landing() {

    return (
        <div className={`
        grid
        grid-cols-1
        h-screen
        mx-12
        md:grid-cols-2
        `}>
        
            <div className="flex flex-col items-center justify-center
            order-last
            mb-16
            md:order-start
            
            ">
                <h1 className="
                text-5xl
                font-bold
                text-black
                md:text-6xl
                ">Miguel Tovar</h1>

                <h5 className="text-xl text-black my-6">Full Stack Web Developer</h5>

                <div className="flex items-center justify-center">
                    <button type="button" className="inline-block mx-2 my-4 px-6 pt-2.5 pb-2 text-primary font-medium text-xs leading-normal uppercase rounded shadow-md bg-white hover:bg-primary hover:text-white hover:shadow-lg focus:bg-primary focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out flex align-center
                    ">
                        <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="download"
                        className="w-3 mr-2" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                        <path fill="currentColor"
                        d="M216 0h80c13.3 0 24 10.7 24 24v168h87.7c17.8 0 26.7 21.5 14.1 34.1L269.7 378.3c-7.5 7.5-19.8 7.5-27.3 0L90.1 226.1c-12.6-12.6-3.7-34.1 14.1-34.1H192V24c0-13.3 10.7-24 24-24zm296 376v112c0 13.3-10.7 24-24 24H24c-13.3 0-24-10.7-24-24V376c0-13.3 10.7-24 24-24h146.7l49 49c20.1 20.1 52.5 20.1 72.6 0l49-49H488c13.3 0 24 10.7 24 24zm-124 88c0-11-9-20-20-20s-20 9-20 20 9 20 20 20 20-9 20-20zm64 0c0-11-9-20-20-20s-20 9-20 20 9 20 20 20 20-9 20-20z">

                        </path>
                        </svg>
                        <a href="https://drive.google.com/file/d/1igZiTUuPSX0o6YH9p3QkJmlLxzqLKYda/view" target='_blank'>
                        Descarga mi CV
                        </a> 
                    </button>
                    <Button className="bg-white" text="Contactame" link="#contactame"/>
                </div>
                <div className="flex items-center justify-center space-x-2">
                    <a href="https://github.com/Migtovarve" target='_blank'><SiGithub  className="w-9 h-9  text-primary hover:scale-105"/></a>
                    <a href="https://www.linkedin.com/in/miguel-tovar-developer/" target='_blank'><SiLinkedin className="w-9 h-9 text-primary hover:scale-105"/></a>
                </div>

            </div>

             {/* flex flex-col justify-center items-center   flex-wrap  */}

            <div className="flex items-center justify-center">
                <img className="rounded-full min-w-14 w-72  border border-1 border-primary" src={perfil}  />
                <RSociales/>
            </div>

        </div>
    )
}