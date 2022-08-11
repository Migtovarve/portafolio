import React from "react";

export default function Logo({principalColor}) {

    return (
        <div className={`h-10 w-10 bg-gradient-to-tl from-${principalColor} to-white rotate-45 rounded-2xl flex justify-center items-center`}>
    	    <p className="inline -rotate-45 font-DS text-xl">MT</p>
        </div>
    )
}