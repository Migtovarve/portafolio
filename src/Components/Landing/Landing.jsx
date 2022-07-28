import React from "react";
import Button from "../Button/Button";
import RSociales from "../RSociales/RSociales.jsx";
import perfil from './perfil.png'

export default function Landing() {

    return (
        <div className={`flex justify-around h-full mx-10`}>
            <div className="flex flex-col justify-center items-center flex-wrap mb-16">
                <h1 className="text-6xl font-bold text-black">Miguel Tovar</h1>
                <h5 className="text-xl text-black my-6">Full Stack Web Developer</h5>
                <p></p> 
                <div className="flex">
                    <Button className="bg-red" text="Descarga Mi CV" download={true}/>
                    <Button className="bg-white" text="Contactame"/>
                </div>
            </div>
            <div className="flex flex-col justify-center items-center mb-16">
                <img className="rounded-full h-72 w-72 border border-1 border-primary" src={perfil}  />
                <RSociales/>
            </div>
        </div>
    )
}