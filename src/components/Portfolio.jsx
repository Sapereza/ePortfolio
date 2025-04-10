import React, { useRef } from 'react';
import useIntersectionObserver from '../hooks/useIntersectionObserver';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import DictionaryImg from '../assets/Dictionary.png';
import CurrencyImg from '../assets/ccpic.png';
import CalculatorImg from '../assets/calculator1.png';

// Example project data
const projects = [
  {
    id: 1,
    title: 'Currency Converter',
    image: CurrencyImg,
    projectLink: 'https://currency-converter-nine-pied.vercel.app/', // Link to the live project
    codeLink: 'https://github.com/Sapereza/currencyConverter/blob/master/src/components/Converter.jsx', // Link to the project code
  },
  {
    id: 2,
    title: 'Calculator (Desktop Only)',
    image: CalculatorImg,
    projectLink: 'https://calculator-eta-dusky.vercel.app/',
    codeLink: 'https://github.com/Sapereza/calculator/blob/master/src/Components/Calculator.jsx',
  },
  {
    id: 3,
    title: 'Dictionary',
    image: DictionaryImg,
    projectLink: 'https://dictionary-aqli.vercel.app/',
    codeLink: 'https://github.com/Sapereza/dictionary/blob/master/src/components/dictionary.jsx',
  },
];

const Portfolio = () => {
  const portfolioRef = useRef(null);
  const isVisible = useIntersectionObserver([portfolioRef]);

  const sectionTitle = isVisible[0]
    ? 'text-xl md:text-3xl font-bold mb-4 whitespace-nowrap mt-28 md:mt-36 underline underline-offset-2 animate-fade-in-scale'
    : 'text-xl md:text-3xl font-medium mb-4 whitespace-nowrap mt-28 md:mt-36 underline underline-offset-2 animate-fade-out-scale';

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <div ref={portfolioRef} name="portfolio" className="min-h-screen w-full bg-slate-100">
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center px-4 py-16">
        <h1 className={sectionTitle}>Portfolio</h1>

        <div className="w-full mt-8">
          <Slider {...settings}>
            {projects.map(({ id, title, image, projectLink, codeLink }) => (
              <div key={id} className="p-4 flex justify-center items-center">
                <div className="bg-white rounded-lg shadow-md shadow-lime-600 p-6 w-[90%] max-w-lg mx-auto hover:scale-105 transition-transform duration-300">
                  <img
                    src={image}
                    alt={title}
                    className="w-full h-64 object-cover rounded-md mb-4"
                  />
                  <h2 className="text-xl font-semibold text-black mb-2 text-center">{title}</h2>
                  <div className="flex justify-center space-x-4">
                    {/* View Project Button */}
                    <a
                      href={projectLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-center bg-lime-600 text-white px-4 py-2 rounded-md hover:shadow-lg hover:shadow-lime-500/60 hover:scale-105 transition-transform duration-300"
                    >
                      View Project
                    </a>
                    {/* View Code Button */}
                    <a
                      href={codeLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-center bg-blue-600 text-white px-4 py-2 rounded-md hover:shadow-lg hover:shadow-blue-500/60 hover:scale-105 transition-transform duration-300"
                    >
                      View Code
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
