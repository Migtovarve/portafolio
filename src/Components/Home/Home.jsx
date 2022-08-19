import React from 'react'
import Nav from '../Nav/Nav'
import Landing from '../Landing/Landing'


export default function Home({principalColor}) {
  return (
    <div className=' w-screen h-full pt-16'>
      <div className={`h-auto w-full`} id='contenedor' >
        <div className="w-screen h-full" id='home'>
          {/* <Nav principalColor={principalColor}  /> */}
          <Landing principalColor={principalColor} />
        </div>
      </div>

    </div>
  )
}
