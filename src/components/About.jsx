// About.jsx
import React, { useRef } from 'react';
import useIntersectionObserver from '../hooks/useIntersectionObserver';
import AboutSectionOne from '../components/AboutDetails/AboutSectionOne';
import AboutSectionTwo from '../components/AboutDetails/AboutSectionTwo';
import AboutSectionThree from '../components/AboutDetails/AboutSectionThree';
import visual1 from "../assets/visual1.jpg";

const About = () => {
  const containerRef = useRef(null);
  const mainTitleRef = useRef(null);
  const sectionRefs = [
    useRef(null),
    useRef(null),
    useRef(null),
  ];

  const aboutSections = [
    {
      id: 1,
      src: visual1,
      title: 'Certifications',
      style: 'shadow-lime-600',
      text: <AboutSectionOne />,
    },
    {
      id: 2,
      src: visual1,
      title: 'Two',
      style: 'shadow-lime-600',
      text: <AboutSectionTwo />,
    },
    {
      id: 3,
      src: visual1,
      title: 'Three',
      style: 'shadow-lime-600',
      text: <AboutSectionThree />,
    },
  ];

  // Observe visibility
  const isMainTitleVisible = useIntersectionObserver([mainTitleRef]);
  const isSectionVisible = useIntersectionObserver(sectionRefs);

  // Main title animation
  const mainTitleClass = isMainTitleVisible[0]
    ? 'text-xl md:text-3xl font-bold mb-8 md:mb-12 whitespace-nowrap mt-28 md:mt-36 underline underline-offset-2 animate-fade-in-scale'
    : 'text-xl md:text-3xl font-medium mb-8 md:mb-12 whitespace-nowrap mt-28 md:mt-36 underline underline-offset-2 animate-fade-out-scale';

  // Section animation logic
  const sectionTitleClasses = sectionRefs.map((_, index) =>
    isSectionVisible[index]
      ? 'text-lg md:text-xl animate-fade-in-scale'
      : 'text-lg md:text-xl animate-fade-out-scale'
  );

  return (
    <div ref={containerRef} name="about" className="min-h-screen w-full bg-slate-100">
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-between px-2 md:px-4 md:flex-row md:space-x-28 py-16">
        <div className="w-full flex flex-col justify-center">
          <h1 ref={mainTitleRef} className={mainTitleClass}>About</h1>
          <div className="w-full">
            {aboutSections.map(({ id, src, title, style, text }, index) => (
              <div
                key={id}
                ref={sectionRefs[index]}
                className={`shadow-md hover:scale-105 duration-500 py-6 md:py-10 my-6 md:my-8 rounded-lg w-full flex flex-col ${style} ${sectionTitleClasses[index]}`}
              >
                <div className="flex items-center pl-4">
                  <img
                    src={src}
                    alt=""
                    className="w-16 md:w-24 h-16 md:h-24 rounded-full mr-6"
                  />
                  <h2 className="mt-4 text-lg md:text-2xl font-signature font-bold">
                    {title}
                  </h2>
                </div>
                <div className="mr-10 ml-24 md:mx-32 pb-4 indent-6 md:indent-9 text-wrap">
                  {text}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
