import React from "react";
import {Link } from 'react-router-dom'

export default function Logo({principalColor}) {

    return (
        <Link to='/'>
            <div className={`h-10 w-10 bg-gradient-to-tl from-az-change to-white rotate-45 rounded-2xl flex justify-center items-center cursor-pointer`}>
                <p className="inline -rotate-45 font-DS text-xl">MT</p>
            </div>
        </Link>
    )
}