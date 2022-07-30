import React from "react";
import { SiLinkedin, SiGithub, SiGmail, SiTelegram } from 'react-icons/si'

export default function Contactame (){
    return (
            <>
                <div className="container my-24 px-6 mx-auto ">
                <section className="mb-32 text-gray-800 ">
                <div className="relative overflow-hidden bg-no-repeat bg-cover">
                </div>
                <div className="container text-gray-800 px-4 md:px-12 ">
                    <div className="block rounded-lg shadow-lg py-10 md:py-12 px-4 md:px-6 bg-gradient-to-l from-tertiary to-white"
                    >
                    <div className="grid grid-cols-1">
                        <h2 className="text-3xl text-primary text-center font-bold mb-12">Contactame</h2>
                        {/* <div className="mb-12 lg:mb-0 text-center mx-auto">
                        <SiLinkedin className="h-8 w-8 md:h-10 md:w-10"/>
                        <h6 className="hidden md:font-medium">Linkedin</h6>
                        </div>
                        <div className="mb-12 lg:mb-0 text-center mx-auto">
                        <SiGithub className="h-8 w-8 md:h-10 md:w-10"/>
                        <h6 className="hidden md:font-medium">GitHub</h6>
                        </div>
                        <div className="mb-6 md:mb-0 text-center mx-auto">
                        <SiGmail className="h-8 w-8 md:h-10 md:w-10"/>
                        <h6 className="hidden md:font-medium">Correo</h6>
                        </div>
                        <div className="text-center mx-auto">
                        <SiTelegram className="h-8 w-8 md:h-10 md:w-10"/>
                        <h6 className="hidden md:font-medium">Telegram</h6>
                        </div> */}

                    </div>
                    <div className="max-w-[700px] mx-auto">
                        <form>
                        <div className="form-group mb-6">
                            <input type="text" className="form-control block
                            w-full
                            px-3
                            py-1.5
                            text-base
                            font-normal
                            text-gray-700
                            bg-white bg-clip-padding
                            border border-solid border-primary
                            rounded
                            transition
                            ease-in-out
                            m-0
                            focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="exampleInput7"
                            placeholder="Name"/>
                        </div>
                        <div className="form-group mb-6">
                            <input type="email" className="form-control block
                            w-full
                            px-3
                            py-1.5
                            text-base
                            font-normal
                            text-gray-700
                            bg-white bg-clip-padding
                            border border-solid border-primary
                            rounded
                            transition
                            ease-in-out
                            m-0
                            focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="exampleInput8"
                            placeholder="Email address"/>
                        </div>
                        <div className="form-group mb-6">
                            <textarea className="
                            form-control
                            block
                            w-full
                            px-3
                            py-1.5
                            text-base
                            font-normal
                            text-gray-700
                            bg-white bg-clip-padding
                            border border-solid border-primary
                            rounded
                            transition
                            ease-in-out
                            m-0
                            focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
                        " id="exampleFormControlTextarea13" rows="3" placeholder="Message"></textarea>
                        </div>
                        {/* <div className="form-group form-check text-center mb-6">
                            <input type="checkbox"
                            className="form-check-input appearance-none h-4 w-4 border border-primary rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain mr-2 cursor-pointer"
                            id="exampleCheck87" checked/>
                            <label className="form-check-label inline-block text-gray-800" htmlFor="exampleCheck87">Send me a copy of this
                            message</label>
                        </div> */}

                        <button type="submit" className="
                        w-full
                        px-6
                        py-2.5
                        bg-white
                        text-primary
                        font-bold
                        text-xs
                        leading-tight
                        uppercase
                        rounded
                        shadow-md
                        hover:bg-blue-700 hover:shadow-lg
                        focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0
                        active:bg-blue-800 active:shadow-lg
                        transition
                        duration-150
                        ease-in-out">Enviar</button>
                        </form>
                    </div>
                    </div>
                </div>

                </section>


    	        </div>

            </>
        )
}