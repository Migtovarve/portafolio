
import { Disclosure } from '@headlessui/react'
import { MenuIcon, XIcon } from '@heroicons/react/outline'
import { useEffect, useState } from 'react'
import {  BsMoon, BsSun  } from 'react-icons/bs'
import Logo from '../Logo/Logo.jsx'

const navigation = [
  { name: 'Sobre mi', href: '#sobreMi', current: false },
  { name: 'Proyectos', href: '#proyectos', current: false },
  { name: 'Contactame', href: '#contactame', current: false },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Nav({principalColor}) {
  const [dark, setDark] = useState('')
  const [toggleI, setToggleI] = useState(<BsMoon alt='icon theme' id='toggle-icon'/>)
  const [toggleText, setToggleText] = useState("Modo oscuro")
  
  useEffect( () => {
    const toggleTheme = document.getElementById("toggle-theme")
    toggleTheme.addEventListener("click", async(e)=> {
      e.preventDefault();
      document.body.classList.toggle("dark");
      setDark(document.body.classList.contains("dark"))
    })
  }, [])

  useEffect(()=> {
    //console.log(dark)
    if ( dark === true ) {
      setToggleI(<BsSun alt='icon theme' id='toggle-icon'/>)
      setToggleText("Modo claro")
    } else {
      setToggleI(<BsMoon alt='icon theme' id='toggle-icon'/>)
      setToggleText("Modo oscuro")
    }
  }, [dark] )


  return (
    <Disclosure as="nav" className={`nav`}>
      {({ open }) => (
        <>
          <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
            <div className="relative flex items-center justify-between h-16 z-10">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md  hover:scale-105 hover:bg-white hover: hover:scale-105 font-medium transition duration-150 ">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>

              <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
              
                <div className="flex-shrink-0 flex items-center">
                  <Logo principalColor={principalColor}/>
                </div>
                

                <div id="toggle-theme" className='switches h-[2.75rem] absolute right-[0rem] px-6 '>

                  <div className='toggle-theme cursor-pointer flex justify-end items-center h-full'>
                    {toggleI}
                  </div>
                </div>

                <div className='hidden sm:colors sm:h-[2.75rem] sm:absolute sm:right-14 sm:flex sm:items-center sm:space-x-2 '>
                    <div className={`colors h-6 w-6 border border-1 bg-az-change cursor-pointer`}></div>
                    <div className={`colors h-6 w-6 border border-1 bg-am-change cursor-pointer`}></div>
                    <div className={`colors h-6 w-6 border border-1 bg-ro-change cursor-pointer`}></div>
                    <div className={`colors h-6 w-6 border border-1 bg-ve-change cursor-pointer`}></div>
                </div>

                <div className="hidden sm:block sm:ml-6">
                  <div className="flex space-x-4">
                    {navigation.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className={classNames(
                          'px-3 py-2 rounded-md text-lg  hover:bg-white hover: hover:scale-105 font-medium transition duration-150 '
                        )}
                        aria-current={item.current ? 'page' : undefined}
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                </div>

              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  href={item.href}
                  className={classNames(
                    'block px-3 py-2 rounded-md text-lg font-medium  hover:bg-white hover: hover:scale-105 font-medium transition duration-150 hover:scale-102'
                  )}
                  aria-current={item.current ? 'page' : undefined}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  )
}
