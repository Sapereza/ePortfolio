import { useEffect, useState } from 'react';
import { FaGithub, FaLinkedin, FaBars } from 'react-icons/fa';
import { HiOutlineMailOpen } from 'react-icons/hi';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import { BsThreeDotsVertical } from 'react-icons/bs';
import { IoClose } from 'react-icons/io5';

const SocialLinks = () => {
  const [isAtBottom, setIsAtBottom] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);

  const links = [
    {
      id: 1,
      child: (
        <>
          GitHub <FaGithub size={25} />
        </>
      ),
      href: 'https://github.com/Sapereza',
    },
    {
      id: 2,
      child: (
        <>
          LinkedIn <FaLinkedin size={25} />
        </>
      ),
      href: 'https://www.linkedin.com/in/sapereza/',
    },
    {
      id: 3,
      child: (
        <>
          Mail <HiOutlineMailOpen size={25} />
        </>
      ),
      href: 'mailto:foo@gmail.com',
    },
    {
      id: 4,
      child: (
        <>
          Resume <BsFillPersonLinesFill size={25} />
        </>
      ),
      href: '/resume.pdf',
      download: true,
    },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      const bodyHeight = document.body.scrollHeight;

      // Check if near bottom
      const atBottom = scrollY + windowHeight >= bodyHeight - 50;
      setIsAtBottom(atBottom);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Run on mount

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      {/* Desktop Sidebar */}
      <div className="hidden lg:flex flex-col top-[35%] left-0 fixed z-50">
        <ul>
          {links.map(({ id, child, href, download }) => (
            <li
              key={id}
              className="flex justify-between items-center w-40 h-14 px-4 ml-[-100px] hover:ml-[-10px] hover:rounded-md duration-300 bg-stone-500/60 text-white"
            >
              <a
                href={href}
                className="flex justify-between items-center w-full"
                download={download}
                target="_blank"
                rel="noreferrer"
              >
                {child}
              </a>
            </li>
          ))}
        </ul>
      </div>

      {/* Mobile Bottom Menu */}
      <div
        className={`lg:hidden fixed bottom-0 left-0 w-full bg-stone-500/60 backdrop-blur-md z-50 transition-all duration-500 ease-in-out ${
          isAtBottom || isExpanded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-full pointer-events-none'
        }`}
      >
        <ul className="flex justify-around items-center w-full py-2">
          {links.map(({ id, child, href, download }) => (
            <li key={id}>
              <a
                href={href}
                className="flex flex-col items-center text-white text-sm"
                download={download}
                target="_blank"
                rel="noreferrer"
              >
                {child}
              </a>
            </li>
          ))}
        </ul>
      </div>

      {/* Floating Button (FAB) */}
      {!isAtBottom && (
        <button
          className="lg:hidden fixed bottom-18 right-4 z-50 bg-stone-600 text-white p-3 rounded-full shadow-lg transition-transform hover:scale-105 focus:outline-none"
          onClick={() => setIsExpanded((prev) => !prev)} // Toggle the menu open/close
        >
          {isExpanded ? <IoClose size={20} /> : <BsThreeDotsVertical size={20} />}
        </button>
      )}
    </>
  );
};

export default SocialLinks;
