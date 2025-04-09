// Home.jsx
import React, { useRef, useState, useEffect, useMemo } from "react";
import useIntersectionObserver from "../hooks/useIntersectionObserver";
import HeroImage from "../assets/heroImage.png";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-scroll";

const Home = () => {
  const homeRef = useRef(null);
  const isVisible = useIntersectionObserver([homeRef]);

  const sectionTitle =
    isVisible[0]
      ? "text-xl md:text-3xl font-bold mb-4 whitespace-nowrap mt-28 md:mt-36 animate-fade-in-scale"
      : "text-xl md:text-3xl font-medium mb-4 whitespace-nowrap mt-28 md:mt-36 animate-fade-out-scale";

  const toRotate = useMemo(() => ["Front End Dev", "Designer", "Creator", "Streamer"], []);
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(150);
  const period = 1000;

  useEffect(() => {
    const ticker = setTimeout(() => {
      const i = loopNum % toRotate.length;
      const fullText = toRotate[i];
      const updatedText = isDeleting
        ? fullText.substring(0, text.length - 1)
        : fullText.substring(0, text.length + 1);

      setText(updatedText);

      if (isDeleting) {
        setDelta(50); // faster delete
      } else {
        setDelta(120); // slower type
      }

      if (!isDeleting && updatedText === fullText) {
        setIsDeleting(true);
        setDelta(period);
      } else if (isDeleting && updatedText === "") {
        setIsDeleting(false);
        setLoopNum((prev) => prev + 1);
        setDelta(300);
      }
    }, delta);

    return () => clearTimeout(ticker);
  }, [text, delta, loopNum, isDeleting, toRotate]);

  return (
    <div
      ref={homeRef}
      name="home"
      className="h-screen w-full bg-slate-100"
    >
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-between h-full px-4 md:flex-row md:space-x-28">
        <div className="flex flex-col justify-center h-full">
          <h1 className={`text-5xl md:text-6xl text-black font-bold mb-4 whitespace-nowrap mt-36 ${sectionTitle}`}>
            I am a 
            <br />
            <span className="container md:w-96 h-12 flex items-center text-lime-600">
              {text}
            </span>
          </h1>
          <p className="text-black pb-4 max-w-md my-4">
           Welcome! this e-Portfolio was created using Vite, React, and TailwindCSS. (Edits are currently being made, but the links to my projects in my portfolio are active.)
          </p>
          <div className="relative z-0">
            <Link
              to="portfolio"
              smooth
              duration={500}
              className="group text-white w-fit px-6 py-3 my-8 flex items-center rounded-md bg-lime-600 shadow-md shadow-lime-600 cursor-pointer hover:scale-110 hover:shadow-lg hover:shadow-lime-500/60 transition-transform duration-300"
            >
              Portfolio
              <span className="group-hover:rotate-90 duration-300">
                <MdOutlineKeyboardArrowRight size={25} className="ml-1" />
              </span>
            </Link>
          </div>
        </div>

        <div className="mt-20 md:mt-24">
          <img
            src={HeroImage}
            alt="my profile"
            className="rounded-full mx-auto w-2/3 md:w-full shadow-md shadow-lime-600 hover:shadow-lg hover:shadow-lime-500/60 hover:scale-105 transition-transform duration-300"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
