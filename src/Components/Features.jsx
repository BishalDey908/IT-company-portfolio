import React from 'react'
import bgcta from "../assets/Img/herosection pic_files/bg-cta.png"
import about2 from "../assets/Img/herosection pic_files/about-2.png"
import check from "../assets/Img/herosection pic_files/check.png"

const Features = () => {
  return (
    <div className='text-white h-screen 2xl:mt-16 xl:mt-80 lg:mt-80 md:mt-96 mt-[1111px]   ' >
      <div className='relative' >
            <img src={bgcta} alt="" className='2xl:w-full 2xl:h-full xl:h-[80vh]  lg:h-[100vh] lg:pt-[-50px]  h-screen' />
      <div className='absolute top-0 '>
      <div className='flex 2xl:flex-row-reverse xl:flex-row-reverse  lg:flex-col     w-screen justify-between 2xl:px-32 2xl:py-36 xl:py-20 lg:my-[-50px] px-12  '>
      <div>
            <img src={about2} alt="" className='aboutimg2 xl:my-10 2xl:block xl:block lg:hidden md:hidden hidden'/>
      </div>
      <div className='2xl:my-auto xl:my-24 lg:my-[30%] md:my-32 my-[40%] lg:mx-auto'>
        <div>
            <h1 className='2xl:text-6xl font-bold xl:text-6xl lg:text-6xl md:text-5xl md:mt-[-50px] mt-[-50px] text-3xl font-head'>We Make Your Brand More Powerful</h1>
        </div>
        <div className='my-14 xl:my-10 2xl:text-3xl xl:text-3xl lg:text-3xl md:text-3xl text-xl font-pragraph'>
        Lorem ipsum dolor sit amet, adipiscing elit Nulla accumsan, metus tellus site.
        </div>
        <ul>
            <li className=' my-8 flex 2xl:text-3xl xl:text-3xl lg:text-3xl md:text-3xl text-xl font-pragraph'><span><img src={check} className='mt-1.5 mr-4 h-6 ' alt="" /></span>24/7 Traffic Updates</li>
            <li className='my-8 flex 2xl:text-3xl xl:text-3xl lg:text-3xl md:text-3xl text-xl font-pragraph'><span><img src={check} className='mt-1.5 mr-4 h-6' alt="" /></span>Keyword Rankings</li>
            <li className='my-8 flex 2xl:text-3xl xl:text-3xl lg:text-3xl md:text-3xl text-xl font-pragraph'><span><img src={check} className='mt-1.5 mr-4 h-6' alt="" /></span>Reputation Management Brief</li>
        </ul>
        <div>
            <button className='bg-white 2xl:text-2xl xl:text-2xl lg:text-3xl text-lg text-black py-4 px-8 my-4 font-head'>Read More</button>
        </div>
      </div>
      </div>
      </div>
      </div>
    </div>
  )
}

export default Features
