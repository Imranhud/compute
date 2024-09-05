import React from "react";
import { studets } from "../constants/indext";



export const styles = {
  // cursor : "poiter",
  // clipPath : "polygon(0% 0%, 100% 20%, 100% 100%, 0% 100%)",
}

function Cliets() {
    return (
        <div style={styles} className="bg-white text-center py-10">
            <h1 className="mt-5 text-red-400 text-center text-[32px] py-5 font-semibold ">Start Your Tech World With Us...</h1>
            <span className="text-black text-[50px] font-semibold text-center">We tech in.</span>
            <div className="language">
              <div className="lang text-[1.5rem] text-red-300"></div>
              <div className="lang text-[1.5rem] text-red-300">HAUSA</div>
              <div className="lang text-[1.5rem] text-red-300"></div>
              </div>
              {/* <span className="text-black text-[50px] font-semibold text-center">ARABIC HAUSA AND ENGLISH.</span></div> */}
            {/* <div className="flex bg-white justify-center items-center flex-wrap w-full">
                {studets.map( (std) => ( 
                    
                        <div key={std.id} className={`flex items-center lg:justify-around flex-wrap flex-row ml-3 `}>
                          <h4 className="font-poppins font-semibold xs:text[40px] text-[30px] 
                           xs:leading-[53px] text-black">{std.figures}</h4>
                          <span className="font-poppins font-normal text-dimWhite ml-1 text-[18px]  mb-1">{std.title}</span>
                        </div>
                    
                ))}
            </div> */}
            
        </div>
    )
}



export default Cliets