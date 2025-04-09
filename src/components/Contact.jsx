// Contact.jsx
import React, { useRef } from 'react';
import useIntersectionObserver from '../hooks/useIntersectionObserver';

const Contact = () => {
  const containerRef = useRef(null);
  const titleRef = useRef(null);
  const formRef = useRef(null);

  const isTitleVisible = useIntersectionObserver([titleRef]);
  const isFormVisible = useIntersectionObserver([formRef]);

  const titleClass = isTitleVisible[0]
    ? 'text-xl md:text-3xl font-bold mb-8 md:mb-12 mt-28 md:mt-36 underline underline-offset-2 animate-fade-in-scale'
    : 'text-xl md:text-3xl font-medium mb-8 md:mb-12 mt-28 md:mt-36 underline underline-offset-2 animate-fade-out-scale';

  const formClass = isFormVisible[0]
    ? 'animate-fade-in-scale'
    : 'animate-fade-out-scale';

  return (
    <div ref={containerRef} name="contact" className="min-h-screen w-full bg-slate-100 text-black">
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-between px-2 md:px-4 md:flex-row md:space-x-28 py-16">
        <div className="w-full flex flex-col justify-center">
          <h1 ref={titleRef} className={titleClass}>Contact Sarah</h1>
          <p className="text-lg md:text-xl mb-8 text-center">Get in touch with me:</p>

          <div className="w-full flex justify-center">
            <form
              ref={formRef}
              action="https://getform.io/f/e59cc3ac-6ecc-48f2-ba3c-5b4fcac43537"
              method="POST"
              className={`flex flex-col w-full md:w-3/4 lg:w-1/2 ${formClass}`}
            >
              <input
                type="text"
                name="name"
                required
                placeholder="Enter your name"
                className="p-2 mb-4 bg-transparent border-2 rounded-md text-black placeholder-black focus:outline-none"
              />
              <input
                type="email"
                name="email"
                required
                placeholder="Enter your email"
                className="p-2 mb-4 bg-transparent border-2 rounded-md text-black placeholder-black focus:outline-none"
              />
              <textarea
                name="message"
                required
                rows="8"
                placeholder="Enter your message"
                className="p-2 mb-6 bg-transparent border-2 rounded-md text-black placeholder-black focus:outline-none"
              ></textarea>
              <button className="w-fit mx-auto px-6 py-3 text-white rounded-md bg-gradient-to-r from-cyan-500 to-indigo-500 shadow-md hover:scale-110 transition-transform duration-300">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
