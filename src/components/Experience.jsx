

import html from "../assets/html.png";
import css from "../assets/css.png";
import javascript from "../assets/javascript.png";
import reactImage from "../assets/react.png";
import github from "../assets/github.png";
import tailwind from "../assets/tailwind.png";

const Experience = () => {

  const techs = [
    {
      id: 1,
      src: html,
      title: 'HTML',
      text: '100%',
      style: 'shadow-orange-500'
    },
    {
      id: 2,
      src: css,
      title: 'CSS',
      text: '100%',
      style: 'shadow-blue-500'
    },
    {
      id: 3,
      src: tailwind,
      title: 'Tailwind CSS',
      text: '100%',
      style: 'shadow-sky-400'
    },
    {
      id: 4,
      src: github,
      title: 'GitHub',
      text: '85%',
      style: 'shadow-gray-400'
    },
    {
      id: 5,
      src: javascript,
      title: 'JavaScript',
      text: '70%',
      style: 'shadow-yellow-500'
    },
    {
      id: 6,
      src: reactImage,
      title: 'React',
      text: '70%',
      style: 'shadow-blue-600'
    },
  ]



  return (
    <div name="experience" className="bg-gradient-to-b from-rose-400 to-red-500 w-full text-white md:h-screen">
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-6 mt-20 md:mt-96">
          <h1 className="text-3xl font-bold inline border-b-4 p-2 border-white">
            Experience
          </h1>
          <p className="py-6 text-xl">
            These are the technologies that I have worked with:
          </p>

          <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0">

            {
              techs.map(({id, src, title, text, style}) => 
              (

                <div key={id} className={`shadow-md hover:scale-105 duration-500 py-6 md:py-20 rounded-full ${style}`}>
                  <img src={src} alt="" className="w-16 md:w-24 mx-auto"/>
                  <p className="mt-4">{title} <br /> {text}</p>
                </div>

              ))
            }

          </div>
            
          {/*}
          <div className="flex justify-center items-center">
            <div className="w-52 h-52 border-black border-2 rounded-full flex justify-center items-center">
              <div className="w-48 h-48 border-black border-2 p-2 rounded-full flex flex-col justify-center items-center">
                <img src={tailwind} alt="" className="w-8"></img>
                <p className="text-sm">Tailwind CSS</p>
                <p>36%</p>
              </div>
            </div>
          </div>
          */}
        </div>
      </div>
    </div>
  )
}

export default Experience