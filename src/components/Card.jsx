import React from 'react'
import { CardItems } from '../costas/idext'
import quotes from '../assets/quotes.svg'
import { Container } from 'postcss'

const Card2Data=[
  {
    image:"src/assets/image10.jpg",
    title:"Basic of Computer",
    Descriptio:"jshasdshjfsdhfvsdhjfvsdhjfvsdhfvs dhfvs dhcfsmdv csdgh"
  }
]
function Card2(){
  return (
    <div  className='Card2' >
      <div className="image"><img src="src/assets/image10.jpg" alt="" /></div>
      <div className="title"><h1>Basic of Computer</h1></div>
      <div className="description"><h2>jshasdshjfsdhfvsdhjfvsdhjfvsdhfvs dhfvs dhcfsmdv csdgh</h2></div>
      <div className="enroll"><button>enroll</button></div>
    </div>
  )
}

const Card = () => {
  return (
    <div className="flex bg-red-300 justify-center flex-wrap px-2 py-12 
    rounded-[20px] max-w-[100%] md:mr-10 sm:mr-5 mr-3 mt-5 rounded-b-none">
      <Card2/>
        
        {CardItems.map((item) =>
         (
            <div key={item.id} className="flex flex-col mx-4">
                <div className="">
                    <img src={quotes} alt="quotes"  className='w-[42px] h-[27px] object-contain'/>
                </div>
                <p className='font-poppins font-normal text-[18px] leading-[32px] text-black my-1'>{item.content}</p>
                <img src={item.Imag} alt="" className='w-[440px] rounded-[20px] mb-9 min:h-[450px] object-contain'/>
            </div>
        ))}
    </div>
  )
}

export default Card
