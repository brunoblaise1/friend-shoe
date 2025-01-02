import Image from 'next/image'
import React from 'react'
import Markdown from "react-markdown";

function Imagine() {
     const content =`Still in development mode, check from time to time for new updates about the project.`
  

  return (
    <>

 
       <div className='px-7 py-4  bg-zinc-900 md:flex justify-center items-center p-4 rounded-xl'>
   <div >
               <Markdown className="prose text-zinc-500">
     {content}
       </Markdown>
          </div>
      </div>
      
      
       <div className="md:hidden flex flex-cols gap-2 py-4 mt-4">
           <button className="bg-zinc-800 py-2  px-7 rounded-xl">Prev</button>
        <button className="py-2 rounded-xl px-7  bg-[#8A2BE2]">Next</button>
        </div>
  
    </>
   
  )
}

export default Imagine
