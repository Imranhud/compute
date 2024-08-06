import { list } from 'postcss'
import React, { useState } from 'react'
import menu from '../assets/menu.svg'
import close from '../assets/close.svg'




const lists = [
  {id : 1 , list : "Register"},
  {id : 2 , list : "Studet"},
  {id : 3 , list : "Courses"},
  {id : 4 , list : "About"}
];

const HeadV = () => {

  const [toggle, setToggle] = useState(false)

  function HashChangeMe(){
    setToggle( prev => !prev )
  }

  return (
    <div className='bg-black'>
      <div className="text-white flex border-b-2 justify-between ml-2 pt-2 items-center">
        <div className="flex">
          <img src={menu} alt="Logo" /><span className='mx-2 font-serif font-semibold'>COMPUTE</span>
        </div>
        <div className="flex justify-between items-center">
          <img onClick={HashChangeMe} src={ toggle ? close : menu} alt="MEU" className='flex mr-5 sm:hidden' />
          <ul className='sm:flex hidden justify-between items-center text-red-600'>
            {lists.map( lis => 
              <li key={lis.id} className='text-white mr-2'>{lis.list}</li>
            )}
          </ul>
        </div>
        <div 
            className={`${toggle ? 'flex' : 'hidden'} 
            p-6 bg-white absolute top-20 right-0 mx-4 
            my-2 min-w-[140px] rounded-xl sidebar`}
          >
           <ul>
            <li className='text-red-500 text-[20px]'>HOME</li>
            <li className='text-red-500 text-[20px]'>STUDETS</li>
            <li className='text-red-500 text-[20px]'>REGISTER</li>
            <li className='text-red-500 text-[20px]'>AUTHOR</li>
           </ul>
          </div>

      </div>
    </div>
  )
}

export default HeadV