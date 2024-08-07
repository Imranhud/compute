import React from 'react'

export const styless = {
    // cursor : "poiter",
    // clipPath : "polygon(0% 0%, 100% 5%, 100% 100%, 0% 100%)",
  }
  

  const PricingBanner = () => {
    return (
      <div className="flex flex-col lg:flex-row items-center justify-center bg-gray-100 p-8 rounded-lg shadow-lg">
        {/* Left Side */}
        <div className="bg-blue-500 text-white p-6 m-4 rounded-lg flex-1 flex items-center justify-center">
          <p className="text-xl lg:text-2xl font-semibold">
            It's only 5,000 Naira to get Access to the Course
          </p>
        </div>
        {/* Right Side */}
        <div className="bg-green-500 text-white p-6 m-4 rounded-lg flex-1 flex items-center justify-center">
          <p className="text-xl lg:text-2xl font-semibold">
            Get access to all courses at 30,000 naira only
          </p>
        </div>
      </div>
    );
  };
  
  export default PricingBanner;
  

const GetStated = () => {
  return (
    <div style={styless} className="bg-cyan-600 flex sm:flex-row text-white flex-col py-11 px-4 justify-center w-full">
          <div className="flex-1 justify-center text-center flex-col">
            <h1 className='text-[32px] font-bold font-sans'>Ready to Get <br /> Stated?</h1>
            <p className='text-[30px] font-sans'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus, excepturi aliquid! Vitae rerum quod consectetur est soluta perspiciatis velit autem.</p>
          </div>
          <button type="button" className='bg-teal-400 sm:h-[65px] justify-center items-center text-center sm:w-[230px] flex px-3 mt-7 py-5 rounded-full'>GET STATED</button>
        </div>
  )
}

// export default GetStated
