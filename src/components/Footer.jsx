import React from 'react';
import {FaGithub, FaLinkedin, FaCodepen} from 'react-icons/fa';
import {HiOutlineMailOpen} from 'react-icons/hi';
import {BsFillPersonLinesFill} from 'react-icons/bs';
import {AiOutlineCopyrightCircle} from 'react-icons/ai';


const Footer = () => {

    const links = [
        {
            id:1,
            child: (
                <div className="flex flex-col items-center hover:scale-110">
                <FaGithub size={30}/>
                GitHub
                </div>

            ),
            href: 'https://github.com/Sapereza',
           // style: 'rounded-tl-md',
        },

        {
            id:2,
            child: (
                
                <div className="flex flex-col items-center hover:scale-110">
                <FaCodepen size={30}/>
                Codepen
                </div>

            ),
            href: 'https://codepen.io/sapereza',
        },

        {
            id:3,
            child: (
               
                <div className="flex flex-col items-center hover:scale-110">
                <FaLinkedin size={30}/>
                LinkedIn
                </div>

            ),
            href: 'https://www.linkedin.com/in/sapereza/',
        },

        {
            id:4,
            child: (
                
                <div className="flex flex-col items-center hover:scale-110">
                <HiOutlineMailOpen size={30}/>
                Mail
                </div>
            ),
            href: 'mailto:foo@gmail.com',
        },

        {
            id:5,
            child: (
                
                <div className="flex flex-col items-center hover:scale-110">
                <BsFillPersonLinesFill size={30}/>
                Resume
                </div>
                
            ),
            href: '/resume.pdf',
            //style: 'rounded-tr-md',
            download: true,
        },
        
    ]


  return (
    <div name="footer" className="w-full h-28 bg-gradient-to-b from-rose-400 to-red-500 text-white">
        <div>
            <div className="md:hidden flex justify-between px-6">
                {links.map(({id, child, href, style, download}) =>
                ( 

                    <div key={id}>
                                    
                    <a href={href} className="text-white" download={download} target="_blank" rel="noreferrer">
                        
                        {child}
                    </a>
                
                    </div>

                ))}


            </div>
            <div className="flex items-center justify-center border-t-2 pt-2 md:mt-0 mt-2">
                <p className="mr-2">
                    <AiOutlineCopyrightCircle/>
                </p>
                
                <p>
                    2023 | Built By: <i className="font-signature text-2xl font-thin">Sarah Perez-Anderson</i>
                </p>
                    
            </div>
        </div>

    </div>
  )
}

export default Footer