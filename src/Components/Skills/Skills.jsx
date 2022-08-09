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
            <div className="grid
            grid-cols-2
            sm:grid-cols-3
            md:grid-cols-6
            xl:grid-cols-12
            justify-items-center
            px-12">
            
                <div className="flex flex-col justify-end items-center h-20 w-20 my-1 hidden">
                    <SiReact className="h-20 w-20 text-react"/>
                    <p className=" font-bold text-xl">React</p>
                </div>

                <div className="flex flex-col justify-end items-center h-20 w-20 my-1">
                    <SiNodedotjs className="h-20 w-20  text-node"/>
                    <p className=" font-bold text-xl">Node.js</p>
                </div>
                <div className="flex flex-col justify-end items-center h-20 w-20 my-1">
                    <SiExpress className="h-20 w-20  text-express"/>
                    <p className=" font-bold text-xl">Express</p>
                </div>
                <div className="flex flex-col justify-end items-center h-20 w-20 my-1">
                    <SiHtml5 className="h-20 w-20  text-html"/>
                    <p className=" font-bold text-xl">HTML5</p>
                </div>
                <div className="flex flex-col justify-end items-center h-20 w-20 my-1">
                    <SiCss3 className="h-20 w-20  text-css"/>
                    <p className=" font-bold text-xl">CSS3</p>
                </div>
                <div className="flex flex-col justify-end items-center h-20 w-20 my-1">
                    <SiJavascript className="h-20 w-20  text-js"/>
                    <p className=" font-bold text-xl">JavaScript</p>
                </div>
                <div className="flex flex-col justify-end items-center h-20 w-20 my-1">
                    <SiSequelize className="h-20 w-20  text-sequelize"/>
                    <p className=" font-bold text-xl">Sequelize</p>
                </div>
                <div className="flex flex-col justify-end items-center h-20 w-20 my-1">
                    <SiPostgresql className="h-20 w-20  text-postgre"/>
                    <p className=" font-bold text-xl">PostgreSQL</p>
                </div>
                
                <div className="flex flex-col justify-end items-center h-20 w-20 my-1">
                    <SiTailwindcss className="h-20 w-20  text-tailwind"/>
                    <p className=" font-bold text-xl">Tailwindcss</p>
                </div>
                <div className="flex flex-col justify-end items-center h-20 w-20 my-1">
                    <SiBootstrap className="h-20 w-20  text-bootstrap"/>
                    <p className=" font-bold text-xl">Bootstrap</p>
                </div>
                <div className="flex flex-col justify-end items-center h-20 w-20 my-1">
                    <SiSass className="h-20 w-20  text-sass"/>
                    <p className=" font-bold text-xl">Sass</p>
                </div>
                <div className="flex flex-col justify-end items-center h-20 w-20 my-1">
                    <SiRedux className="h-20 w-20  text-redux"/>
                    <p className=" font-bold text-xl">Redux</p>
                </div>
                <div className="flex flex-col justify-end items-center h-20 w-20 my-1">
                    <SiReact className="h-20 w-20  text-react"/>
                    <p className=" font-bold text-xl">React</p>
                </div>
                {/* <div className="flex flex-col justify-end items-center h-20 w-20 my-1">
                    <SiReact className="h-20 w-20  "/>
                    <p className=" font-bold text-xl">React</p>
                </div> */}

            </div>
        </div>
    )
}