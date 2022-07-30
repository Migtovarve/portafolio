import React from "react";
import { 
    SiReact,
    SiNodedotjs,
    SiExpress,
    SiHtml5,
    SiCss3,
    SiJavascript,
    SiSequelize,
    SiPostgresql,
    SiTailwindcss,
    SiBootstrap,
    SiSass,
    SiRedux,
 } from "react-icons/si";

export default function Skills() {
    return (
        <div className="mx-auto">
            <div className="flex space-x-8 flex-wrap space-y-4 mx-10 justify-start">
            
                <div className="flex flex-col justify-end items-center h-20 w-20 hidden">
                    <SiReact className="h-20 w-20 text-react"/>
                    <p className="text-black font-bold text-xl">React</p>
                </div>
                <div className="flex flex-col justify-end items-center h-20 w-20">
                    <SiNodedotjs className="h-20 w-20  text-node"/>
                    <p className="text-black font-bold text-xl">Node.js</p>
                </div>
                <div className="flex flex-col justify-end items-center h-20 w-20">
                    <SiExpress className="h-20 w-20  text-express"/>
                    <p className="text-black font-bold text-xl">Express</p>
                </div>
                <div className="flex flex-col justify-end items-center h-20 w-20">
                    <SiHtml5 className="h-20 w-20  text-html"/>
                    <p className="text-black font-bold text-xl">HTML5</p>
                </div>
                <div className="flex flex-col justify-end items-center h-20 w-20">
                    <SiCss3 className="h-20 w-20  text-css"/>
                    <p className="text-black font-bold text-xl">CSS3</p>
                </div>
                <div className="flex flex-col justify-end items-center h-20 w-20">
                    <SiJavascript className="h-20 w-20  text-js"/>
                    <p className="text-black font-bold text-xl">JavaScript</p>
                </div>
                <div className="flex flex-col justify-end items-center h-20 w-20">
                    <SiSequelize className="h-20 w-20  text-sequelize"/>
                    <p className="text-black font-bold text-xl">Sequelize</p>
                </div>
                <div className="flex flex-col justify-end items-center h-20 w-20">
                    <SiPostgresql className="h-20 w-20  text-postgre"/>
                    <p className="text-black font-bold text-xl">PostgreSQL</p>
                </div>
                
                <div className="flex flex-col justify-end items-center h-20 w-20">
                    <SiTailwindcss className="h-20 w-20  text-tailwind"/>
                    <p className="text-black font-bold text-xl">Tailwindcss</p>
                </div>
                <div className="flex flex-col justify-end items-center h-20 w-20">
                    <SiBootstrap className="h-20 w-20  text-bootstrap"/>
                    <p className="text-black font-bold text-xl">Bootstrap</p>
                </div>
                <div className="flex flex-col justify-end items-center h-20 w-20">
                    <SiSass className="h-20 w-20  text-sass"/>
                    <p className="text-black font-bold text-xl">Sass</p>
                </div>
                <div className="flex flex-col justify-end items-center h-20 w-20">
                    <SiRedux className="h-20 w-20  text-redux"/>
                    <p className="text-black font-bold text-xl">Redux</p>
                </div>
                <div className="flex flex-col justify-end items-center h-20 w-20">
                    <SiReact className="h-20 w-20  text-react"/>
                    <p className="text-black font-bold text-xl">React</p>
                </div>
                {/* <div className="flex flex-col justify-end items-center h-20 w-20">
                    <SiReact className="h-20 w-20  text-black"/>
                    <p className="text-black font-bold text-xl">React</p>
                </div> */}

            </div>
        </div>
    )
}