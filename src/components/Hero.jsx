import React from 'react'
import image8 from '../assets/image8.jpg'


const Hero = () => {
  return (
    <div className='items-center w-full justify-between flex flex-col sm:flex-row my-5'>
        <div className="text-white px-6 font-medium">
            <h1 className='flex-2 font-thin ss:text-[72px] text-[48px] text-white 
           ss:leading-[100px] leading-[75px]'><span className='text-[54px] font-sans font-semibold text-teal-300'>Compute</span> Computer <span className='text-[45px] text-red-200'>Program</span></h1>
            <p>Lorem ipsum dolor sit amet core red fom.</p>
            <button className='bg-red-500 w-[10em] rounded-full font-semibold h-14 mx-4 my-4'>GET STATED!</button>
        </div>
        <div className="bg-red-800 flex">
            <img src={image8} alt="" className='object-contain' />
        </div>
    </div>
  )
}

export default Hero