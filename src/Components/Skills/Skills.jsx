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
            <div className="flex space-x-8 flex-wrap space-y-4 mx-10 justify-start ">
            
                <div className="flex flex-col justify-end items-center h-32 w-32 hidden">
                    <SiReact className="h-20 w-20 text-react"/>
                    <p className="text-black font-bold text-2xl">React</p>
                </div>
                <div className="flex flex-col justify-end items-center h-32 w-32">
                    <SiNodedotjs className="h-20 w-20  text-node"/>
                    <p className="text-black font-bold text-2xl">Node.js</p>
                </div>
                <div className="flex flex-col justify-end items-center h-32 w-32">
                    <SiExpress className="h-20 w-20  text-express"/>
                    <p className="text-black font-bold text-2xl">Express</p>
                </div>
                <div className="flex flex-col justify-end items-center h-32 w-32">
                    <SiHtml5 className="h-20 w-20  text-html"/>
                    <p className="text-black font-bold text-2xl">HTML5</p>
                </div>
                <div className="flex flex-col justify-end items-center h-32 w-32">
                    <SiCss3 className="h-20 w-20  text-css"/>
                    <p className="text-black font-bold text-2xl">CSS3</p>
                </div>
                <div className="flex flex-col justify-end items-center h-32 w-32">
                    <SiJavascript className="h-20 w-20  text-js"/>
                    <p className="text-black font-bold text-2xl">JavaScript</p>
                </div>
                <div className="flex flex-col justify-end items-center h-32 w-32">
                    <SiSequelize className="h-20 w-20  text-sequelize"/>
                    <p className="text-black font-bold text-2xl">Sequelize</p>
                </div>
                <div className="flex flex-col justify-end items-center h-32 w-32">
                    <SiPostgresql className="h-20 w-20  text-postgre"/>
                    <p className="text-black font-bold text-2xl">Postgresql</p>
                </div>
                
                <div className="flex flex-col justify-end items-center h-32 w-32">
                    <SiTailwindcss className="h-20 w-20  text-tailwind"/>
                    <p className="text-black font-bold text-2xl">Tailwindcss</p>
                </div>
                <div className="flex flex-col justify-end items-center h-32 w-32">
                    <SiBootstrap className="h-20 w-20  text-bootstrap"/>
                    <p className="text-black font-bold text-2xl">Bootstrap</p>
                </div>
                <div className="flex flex-col justify-end items-center h-32 w-32">
                    <SiSass className="h-20 w-20  text-sass"/>
                    <p className="text-black font-bold text-2xl">Sass</p>
                </div>
                <div className="flex flex-col justify-end items-center h-32 w-32">
                    <SiRedux className="h-20 w-20  text-redux"/>
                    <p className="text-black font-bold text-2xl">Redux</p>
                </div>
                <div className="flex flex-col justify-end items-center h-32 w-32">
                    <SiReact className="h-20 w-20  text-react"/>
                    <p className="text-black font-bold text-2xl">React</p>
                </div>
                {/* <div className="flex flex-col justify-end items-center h-32 w-32">
                    <SiReact className="h-20 w-20  text-black"/>
                    <p className="text-black font-bold text-2xl">React</p>
                </div> */}

            </div>
        </div>
    )
}