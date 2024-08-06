import React from "react";
import { studets } from "../costas/idext";



export const styles = {
  // cursor : "poiter",
  clipPath : "polygon(0% 0%, 100% 20%, 100% 100%, 0% 100%)",
}

function Cliets() {
    return (
        <div style={styles} className="bg-white py-10">
            <h1 className="mt-5 text-red-400 text-center text-[32px] py-5 font-semibold font-mono">Start Your World Tech With Us...</h1>
            <p className="text-black text-[19px] font-semibold text-center">Lorem ipsum, dolor amet consectetur adipisicing elit.</p>
            <div className="flex bg-white justify-center items-center flex-wrap w-full">
                {studets.map( (std) => ( 
                    
                        <div key={std.id} className={`flex items-center lg:justify-around flex-wrap flex-row ml-3 `}>
                          <h4 className="font-poppins font-semibold xs:text[40px] text-[30px] 
                           xs:leading-[53px] text-black">{std.figures}</h4>
                          <p className="font-poppins font-normal text-dimWhite ml-1 text-[18px]  mb-1">{std.title}</p>
                        </div>
                    
                ))}
            </div>
            
        </div>
    )
}



export default Cliets