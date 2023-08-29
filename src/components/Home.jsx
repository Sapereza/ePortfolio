
import HeroImage from "../assets/heroImage.png";
import {MdOutlineKeyboardArrowRight} from "react-icons/md";
import { useState, useEffect } from "react";
import {Link} from "react-scroll";

const Home = () => {

    const [loopNum, setLoopNum] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const toRotate = [
        "Front End Dev",
        "Designer",
        "Creator",
        "Streamer",
    ];
    const [text, setText] = useState('');
    const [delta, setDelta] = useState(300 - Math.random() * 100);
    const period = 1000;

    useEffect(() => {
        let ticker = setInterval(() => {
            tick();
        }, delta)

        return () => { clearInterval(ticker)};
    }, [text])

    const tick = () => {
        let i = loopNum % toRotate.length;
        let fullText = toRotate[i];
        let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

        setText(updatedText);

        if (isDeleting) {
            setDelta(prevDelta => prevDelta /2)
        }

        if (!isDeleting && updatedText === fullText) {
            setIsDeleting(true);
            setDelta(period);
        } else if(isDeleting && updatedText === '') {
            setIsDeleting(false);
            setLoopNum(loopNum + 1);
            setDelta(500);
        }
    }

  return (
    <div name="home" className="h-screen w-full bg-gradient-to-b from-red-500 via-red-500 to-rose-400">
        
        <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-between h-full px-4 md:flex-row md:space-x-28">
            <div className="flex flex-col justify-center h-full">
                <h1 className="text-5xl md:text-6xl text-white font-bold mb-4 whitespace-nowrap mt-36">
                    I am a 
                    <br></br>
                    <div className="container md:w-96 h-12 flex items-center text-yellow-200">
                        {text}
                    </div>
                    
                </h1>
                <p className="text-white pb-4 max-w-md my-4">
                    I like to work on web applications using React and Tailwind CSS.
                    I would like to invite your to view my portfolio and if you would like to get in touch with me head to the contact section.
                </p>
                <div className="relative z-0">
                    <Link to="portfolio" smooth duration={500} className="group text-white w-fit px-6 py-3 my-8 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-indigo-500 shadow drop-shadow-md cursor-pointer hover:scale-110 duration-300">
                        Portfolio
                        <span className="group-hover:rotate-90 duration-300">
                        <MdOutlineKeyboardArrowRight size={25} className="ml-1" />
                        </span>
                        
                    </Link>
                </div>
            </div>

            <div className="mt-20 md:mt-24">
                <img src={HeroImage} alt="my profile" className="rounded-full mx-auto w-2/3 md:w-full"/>
            </div>

        </div>

    </div>
 
  );
};

export default Home;