import React from "react";

export default function Button({text}) {
     return (   
        <div className="flex space-x-2 justify-center">
            <div>
                <button type="button" className="inline-block mx-2 my-4 px-6 pt-2.5 pb-2 text-primary font-medium text-xs leading-normal uppercase rounded shadow-md bg-white hover:bg-primary hover:text-white hover:shadow-lg focus:bg-primary focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out flex align-center
                ">
                <a href="#contactame">
                {text}

                </a>
                </button>
            </div>
        </div>
     )
}