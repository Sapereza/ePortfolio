import React from 'react'

const Contact = () => {
  return (
    <div name="contact" className="bg-gradient-to-b from-rose-400 to-red-500 w-full text-white md:h-screen">
        <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
            <div className="pb-8 mt-20 md:mt-44">
                <h1 className="text-3xl font-bold inline border-b-4 p-2 border-white">Contact</h1>
                <p className="py-6 text-xl">Get in touch with me:</p>
            </div>

            <div className="flex justify-center items-center">
                <form action="https://getform.io/f/e59cc3ac-6ecc-48f2-ba3c-5b4fcac43537" method="POST" className="flex flex-col w-full md:1/2">
                    <input type="text" name="name" required placeholder="Enter your name" className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"/>
                    <input type="text" name="email" required placeholder="Enter your email" className="my-4 p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"/>
                    <textarea name="message" required placeholder="Enter your message" rows="10" className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"></textarea>
                    <button className="text-white w-fit px-6 py-3 my-8 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-indigo-500 shadow drop-shadow-md cursor-pointer hover:scale-110 duration-300">Submit</button>
                </form>
            </div>
        </div>
    </div>
  )
}

export default Contact