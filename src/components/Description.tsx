import React from 'react'
import Markdown from "react-markdown";

function Description() {
    const content =`Welcome! This is an interactive website on genetically modified organisms. In this website you'll:
                  
* Learn What GMOs Are.
* Learn the benefits of GMOs.
* Learn the controversies around GMOs.
* Play around with some interactive datasets.
* And more!

**Press the Start button to begin!**`
  

  return (
    <>
       <section className='md:hidden'>
          <div>
              <h1 className='font-bold uppercase text-3xl w-80 '>We’re Constructing a Real-Time Interface to Human Biology
</h1>
          </div>

          <div className='pt-5'>
               <Markdown className="prose text-zinc-500">
     {content}
       </Markdown>
          </div>
         
    </section>
    
     <section className='hidden md:flex flex-col'>
          <div>
              <h1 className='font-bold uppercase text-3xl w-80 '>We’re Constructing a Real-Time Interface to Human Biology
</h1>
          </div>

          <div className='pt-5'>
               <Markdown className="prose text-zinc-500">
     {content}
       </Markdown>
          </div>
         
    </section>
    </>
  )
}

export default Description
