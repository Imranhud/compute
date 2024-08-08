import React from 'react'
import image8 from '../../public/assets/image8.jpg'


const Hero = () => {
  return (
    <div className='items-center w-full justify-between flex flex-col sm:flex-row'>
        <div className="text-white">
            <h1 className='items'>
            <p>Join Compute <b/> Today!</p>
            </h1>
              {/* <span className='text-[54px] sm: font-sans font-semibold text-teal-300' id='hero-'>
            Join Compute <b/> Today! khguyg</span></h1>  */}
            <p id='aud'>The Secret to Technology Mastery.</p>
            <button className='press bg-red-500 w-[20rem] rounded-full font-semibold h-14 mx-4 my-4'>GET STATED!</button>
        </div>
        <div className="bg-red-800 flex">
            <img src={image8} alt="" className='object-contain' />
        </div>
    </div>
  )
}

export default Hero;