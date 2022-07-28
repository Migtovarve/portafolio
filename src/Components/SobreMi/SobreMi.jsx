import React from "react";
import img from '../Landing/Admin-removebg-preview.png'
export default function SobreMi() {
    return (
        <>
        <div className='grid md:grid-cols-2 sm:space-x-6 h-screen  grid-cols-1 mx-12 '>
            <div className="flex flex-col justify-center items-center mx-auto">
                <img className="px-6" src={img}  />
            </div>
            <div className="flex flex-col justify-center items-center">
                <div className="px-6">
                    <h1 className="text-3xl text-primary font-bold">Sobre Mi</h1>
                    <p className="text-black font-md text-justify">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                </div>
            </div>
        </div>
        </>
    )
}