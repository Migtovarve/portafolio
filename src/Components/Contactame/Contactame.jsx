import React, { useState } from "react";
import { SiLinkedin, SiGithub, SiGmail, SiTelegram } from 'react-icons/si'
import emailjs from 'emailjs-com'

export default function Contactame (){
    const [alert, setAlert] = useState(false)


    const sendEmail = (e) => {
        e.preventDefault();
        
        //send email
        emailjs.sendForm('gmail', 'template_ttxlxhj', e.target, 'Kk8MjVlpvgjn21gfk')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });

        //reset inputs
        document.getElementById("exampleInput7").value=""
        document.getElementById("exampleInput8").value=""
        document.getElementById("exampleFormControlTextarea13").value=""

        //alert
        setAlert(true)
        setTimeout(() => {
            setAlert(false)    
        }, 3000);


      };

    return (
            <>
                <div className="container my-24 px-6 mx-auto ">
                <section className="mb-32  ">
                <div className="relative overflow-hidden bg-no-repeat bg-cover">
                </div>
                <div className="container  px-4 md:px-12 ">
                    <div className="block rounded-lg shadow-lg py-10 md:py-12 px-4 md:px-6 bg-cards"
                    >
                    <div className="grid grid-cols-1">
                        <h2 className="text-3xl  text-center font-bold mb-12">Contactame</h2>
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

                        <form onSubmit={sendEmail}>
                        <div className="form-group mb-6">
                            <input type="text" className="form-control block
                            w-full
                            px-3
                            py-1.5
                            text-base
                            font-normal
                            
                            bg-white bg-clip-padding
                            border border-solid border-primary
                            rounded
                            transition
                            ease-in-out
                            m-0
                            focus: focus:bg-white focus:border-blue-600 focus:outline-none" id="exampleInput7"
                            required
                            name="name"
                            placeholder="Name"/>
                        </div>
                        <div className="form-group mb-6">
                            <input type="email" className="form-control block
                            w-full
                            px-3
                            py-1.5
                            text-base
                            font-normal
                            
                            bg-white bg-clip-padding
                            border border-solid border-primary
                            rounded
                            transition
                            ease-in-out
                            m-0
                            focus: focus:bg-white focus:border-blue-600 focus:outline-none" id="exampleInput8"
                            required
                            name="email"
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
                            
                            bg-white bg-clip-padding
                            border border-solid border-primary
                            rounded
                            transition
                            ease-in-out
                            m-0
                            focus: focus:bg-white focus:border-blue-600 focus:outline-none
                        " id="exampleFormControlTextarea13" required rows="3" placeholder="Message" name="message"></textarea>
                        </div>
                        <button type="submit" className="
                        w-full
                        px-6
                        py-2.5
                        bg-white
                        
                        font-bold
                        text-xs
                        leading-tight
                        uppercase
                        rounded
                        shadow-md
                        hover:bg-primary hover:shadow-lg hover:
                        focus:bg-primary focus:shadow-lg focus:outline-none focus:ring-0
                        active:bg-blue-800 active:shadow-lg
                        transition
                        duration-150
                        ease-in-out
                        "
                        >Enviar</button>
                        </form>

                    </div>
                    </div>
                </div>

                </section>


    	        </div>
                {alert? 
                    <>
                        <div class="bg-green-100 rounded-lg py-5 px-6 mb-3 text-base text-green-700 inline-flex items-center w-full fixed top-0" role="alert">
                            <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="check-circle" class="w-4 h-4 mr-2 fill-current" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                <path fill="currentColor" d="M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z"></path>
                            </svg>
                            Correo enviado correctamente!
                        </div>
                    </>
                    : null
                }

            </>
        )
}