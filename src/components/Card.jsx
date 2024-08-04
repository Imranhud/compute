import React from 'react'
import { CardItems } from '../costas/idext'
import quotes from '../assets/quotes.svg'
import { Container } from 'postcss'



const Card = () => {
  return (
    <div className="flex bg-zinc-500 justify-center flex-wrap px-10 py-12 
    rounded-[20px] max-w-[100%] md:mr-10 sm:mr-5 mr-5 my-5">
        
        {CardItems.map((item) => (
            <div key={item.id} className="flex flex-col mx-4">
                <div className="">
                    <img src={quotes} alt="quotes"  className='w-[42px] h-[27px] object-contain'/>
                </div>
                <p className='font-poppins font-normal text-[18px] leading-[32px] text-white my-5'>{item.content}</p>
                <img src={item.Imag} alt="" className='w-[360px] rounded-full h-[360px] object-contain'/>
            </div>
        ))}
    </div>
  )
}

export default Card