import React from 'react'
import arrayDestruct from '../assets/portfolio/arrayDestruct.jpg';
import installNode from '../assets/portfolio/installNode.jpg';
import navbar from '../assets/portfolio/navbar.jpg';
import reactParallax from '../assets/portfolio/reactParallax.jpg';
import reactSmooth from '../assets/portfolio/reactSmooth.jpg';
import reactWeather from '../assets/portfolio/reactWeather.jpg';






const Portfolio = () => {

    const portfolios = [
        {
            id: 1,
            src: arrayDestruct,
            demo: 'https://sarah-portfolio-alpha.vercel.app/',
            code: 'https://github.com/Sapereza/sarah-portfolio',
            
        },
        {
            id: 2,
            src: installNode,
            demo: 'https://github.com/Sapereza/sarah-portfolio',
            code: 'https://github.com/Sapereza/sarah-portfolio',
        },
        {
            id: 3,
            src: navbar,
            demo: 'https://github.com/Sapereza/sarah-portfolio',
            code: 'https://github.com/Sapereza/sarah-portfolio',
        },
        {
            id: 4,
            src: reactParallax,
            demo: 'https://github.com/Sapereza/sarah-portfolio',
            code: 'https://github.com/Sapereza/sarah-portfolio',
        },
        {
            id: 5,
            src: reactSmooth,
            demo: 'https://github.com/Sapereza/sarah-portfolio',
            code: 'https://github.com/Sapereza/sarah-portfolio',
        },
        {
            id: 6,
            src: reactWeather,
            demo: 'https://github.com/Sapereza/sarah-portfolio',
            code: 'https://github.com/Sapereza/sarah-portfolio',
        },
    ]


  return (
    <div className="bg-gradient-to-b from-rose-400 to-red-500 w-full text-white md:h-screen">
        <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
            <div name="portfolio" className="pb-6 mt-800 md:mt-72">
                <div className="mt-28 md:mt-36">
                    <h1 className="text-3xl font-bold inline border-b-4 p-2 border-white">Portfolio</h1>
                    <p className="py-6 text-xl">Take a look at some of my work here:</p>
                </div>
            </div>

            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">

                {portfolios.map(({id, src, demo, code}) => 
                    (

                        <div key={id}  className="shadow-md shadow-stone-600 rounded-lg">
                            <img src={src} alt="" className="rounded-md duration-200 hover:scale-105"/>
                            <div className="flex items-center justify-center">
                                <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-110">
                                <a href={demo}>Demo</a>
                                </button>
                                <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-110">
                                <a href={code}>Code</a>
                                </button>
                            </div>
                        </div>
                    ))
                }
            </div> 
            {/*<div className="flex justify-center mt-16">
                <div className="border-t-2 border-b-2 py-2">
                    <p>To View an archive of my work click Here</p>
                </div>
            </div>
            */}
        </div>
    </div>
  )
}

export default Portfolio