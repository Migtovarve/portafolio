import React from "react";

export default function Button({principalColor,text}) {
     return (   
        <div className="flex space-x-2 justify-center">
            <div>
                <button type="button" className={`inline-block mx-2 my-4 px-6 pt-2.5 pb-2  font-medium text-xs leading-normal uppercase rounded shadow-md hover:bg- hover: hover:shadow-lg focus:bg- focus:shadow-lg focus:outline-none focus:ring-0 active: active:shadow-lg transition duration-150 ease-in-out flex align-center
                bg-cards
                `}>
                <a>
                {text}

                </a>
                </button>
            </div>
        </div>
     )
}