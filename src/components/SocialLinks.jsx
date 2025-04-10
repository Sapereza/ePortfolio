import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { HiOutlineMailOpen } from 'react-icons/hi';
import { BsFillPersonLinesFill } from 'react-icons/bs';

const SocialLinks = () => {
  const links = [
    {
      id: 1,
      child: (
        <>
          GitHub <FaGithub size={25} />
        </>
      ),
      href: 'https://github.com/Sapereza',
      style: 'rounded-tr-md',
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
      style: 'rounded-br-md',
      download: true,
    },
  ];

  return (
    <>
      {/* Desktop (left vertical bar) */}
      <div className="hidden lg:flex flex-col top-[35%] left-0 fixed z-50">
        <ul>
          {links.map(({ id, child, href, style, download }) => (
            <li
              key={id}
              className={`flex justify-between items-center w-40 h-14 px-4 ml-[-100px] hover:ml-[-10px] hover:rounded-md duration-300 bg-stone-500/60 text-white ${style}`}
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

      {/* Mobile/Tablet (bottom bar) */}
      <div className="flex lg:hidden fixed bottom-0 left-0 w-full bg-stone-500/60 backdrop-blur-md z-50">
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
    </>
  );
};

export default SocialLinks;
