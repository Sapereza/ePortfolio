import React from 'react';
import LogoReact from '/src/assets/react.png';
import LogoTailWind from '/src/assets/tailwind.png';
import LogoJavascript from '/src/assets/javascript.png';

const AboutSectionTwo = () => {
  return (
    //Needs work with presentation design of images.
    <div>
            <div className='flex items-center space-x-6'>
              <img src={LogoReact} className='w-32 h-32 hover:scale-110 duration-500'>
              </img>
    
              <img src={LogoTailWind} className='w-32 h-32 hover:scale-110 duration-500'> 
              </img>

              <img src={LogoJavascript} className='w-32 h-32 hover:scale-110 duration-500'> 
              </img>
              
            </div>
        </div>
  )
}

export default AboutSectionTwo