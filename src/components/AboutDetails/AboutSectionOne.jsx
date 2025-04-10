import React from 'react';
import AWSCert from '/src/assets/AWSCert.png';
import GoogleITCert from '/src/assets/GoogleITCert.png';

const AboutSectionOne = () => {
  return (
    //Adjust this div section by have a crousel & add hover over badge - Possibly add link to Credly for each badge
    <div>
        <div className='flex items-center'>
          <img src={AWSCert} className='w-32 h-32 hover:scale-110 duration-500'>
          </img>

          <img src={GoogleITCert} className='w-32 h-32 hover:scale-110 duration-500'> 
          </img>
          
        </div>
    </div>
  )
}

export default AboutSectionOne