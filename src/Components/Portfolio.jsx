import React from 'react'

const Portfolio = () => {
  // max-w-screen-2xl
  return (
    <div className=''>
    <section className="bg-zinc-50 overflow-hidden">
 <div className="2xl:w-[90%] xl:w-[90%] lg:w-[95%] md:w-[90%] w-[80%] 2xl:h-[100vh] xl:h-[80vh] 2xl:max-w-screen-3xl px-8 md:px-12 mx-auto py-12 lg:py-24 space-y-24  flex flex-col justify-center">
    <div className='2xl:my-24 xl:my-24 lg:my-12 md:my-10 my-12 2xl:mt-0 xl:mt-0 lg:mt-0 md:mt-0 '>
        <h1 className='2xl:text-6xl xl:text-7xl lg:text-6xl md:text-6xl text-5xl font-bold text-center font-head'>Take A Look Our Portfolio</h1>
        <p className='2xl:text-4xl xl:text-4xl lg:text-3xl md:text-4xl text-2xl text-center 2xl:mt-6 xl:mt-8 lg:mt-6 md:mt-6 mt-6 font-pragraph'>Take A Look Our Portfolio</p>
    </div>
  <div className="flex flex-col sm:flex-row mx-auto">
   {/* <!--- Starts component --> */}
    <a href="#_"> <img src="https://images.unsplash.com/photo-1530035415911-95194de4ebcc?q=80&amp;w=2670&amp;auto=format&amp;fit=crop&amp;ixlib=rb-4.0.3&amp;ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="rounded-xl  rotate-6 hover:rotate-0 duration-500 hover:-translate-y-12 h-full w-full object-cover hover:scale-150 transform origin-bottom" alt="#_"/> </a><a href="#_"> <img src="https://images.unsplash.com/photo-1487180144351-b8472da7d491?q=80&amp;w=2672&amp;auto=format&amp;fit=crop&amp;ixlib=rb-4.0.3&amp;ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D " className="rounded-xl  -rotate-12 hover:rotate-0 duration-500 hover:-translate-y-12 h-full w-full object-cover hover:scale-150 transform origin-bottom" alt="#_"/> </a><a href="#_"> <img src="https://images.unsplash.com/photo-1586996292898-71f4036c4e07?q=80&amp;w=2670&amp;auto=format&amp;fit=crop&amp;ixlib=rb-4.0.3&amp;ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="rounded-xl  rotate-6 hover:rotate-0 duration-500 hover:-translate-y-12 h-full w-full object-cover hover:scale-150 transform origin-bottom" alt="#_"/> </a><a href="#_"> <img src="https://images.unsplash.com/photo-1522775417749-29284fb89f43?q=80&amp;w=2574&amp;auto=format&amp;fit=crop&amp;ixlib=rb-4.0.3&amp;ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="rounded-xl  -rotate-12 hover:rotate-0 duration-500 hover:-translate-y-12 h-full w-full object-cover hover:scale-150 transform origin-bottom" alt="#_"/> </a>
   {/* <!--- Ends component --> */}
  </div> 
  
 </div>
    </section>
    </div>
  )
}

export default Portfolio
