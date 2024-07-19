import React, { useEffect } from 'react'
import about from "../assets/Img/herosection pic_files/about-1.png"
import icon1 from "../assets/Img/herosection pic_files/icon-1.png"
import icon2 from "../assets/Img/herosection pic_files/icon-2.png"


const About = () => {
  
  return (
    <div className=' 2xl:px-20 xl:mt-20 h-full ' >
      <div className='2xl:flex 2xl:flex-row 2xl:gap-16 xl:gap-16 lg:gap-16 md:gap-16 gap-12 justify-center py-20 md:flex-col lg:px-36 md:px-16 flex-col' id='about' data-aos="zoom-out" data-aos-offset="350">
        <div className=' '>
            <img src={about} alt="" srcset="" className='2xl:h-[555px] 2xl:w-[750px] xl:h-[550px] xl:w-[550px] lg:w-[450px] md:w-[450px] h-80 mx-auto lg:mx-auto lg:mb-20 md:h-[500px] md:mb-20 md:mt-[-10px]  md:mx-auto mb-16 aboutimg1' />
        </div>
        <div className='my-auto 2xl:mx-0 xl:mx-0 lg:mx-0 md:mx-0 mx-8'>
        <h1 className='2xl:text-5xl xl:text-7xl lg:text-6xl md:text-5xl text-2xl font-bold mb-8 font-head '>About Our Company</h1>
        <p className='2xl:text-xl xl:text-3xl lg:text-xl md:text-xl text-lg mb-16 font-pragraph' >Lorem ipsum dolor sit amet, consectetur adipiscing elit Nulla accumsan, metus.</p>
        <div className='flex 2xl:flex-row xl:flex-row lg:flex-row md:flex-row flex-col 2xl:gap-16 xl:gap-16 lg:gap-32 md:gap-40 '>
            <div className='2xl:w-[555px] 2xl:mb-0 xl:mb-0 lg:mb-0 md:mb-0 mb-16 2xl:pr-0 xl:pr-0 lg:pr-0 md:pr-0 pr-4'>
                <div className=''>
                    <img src={icon1} alt="" srcset="" className='2xl:h-20 xl:h-20 lg:h-20 md:h-20 h-14   '/>
                </div>
                <div>
                    <h1 className='2xl:text-3xl lg:text-3xl xl:text-5xl md:text-3xl text-xl  font-bold my-4 font-head'>Our Vision</h1>
                    <p className='2xl:text-xl xl:text-3xl lg:text-xl md:text-xl text-lg font-pragraph'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi, odit?</p>
                </div>
            </div>
            <div className='ww-80 2xl:mb-0 xl:mb-0 lg:mb-0 md:mb-0 mb-16 2xl:pr-0 xl:pr-0 lg:pr-0 md:pr-0 pr-4'>
                <div className=''>
                <img src={icon2} alt="" srcset="" className='2xl:h-20 xl:h-20 lg:h-20 md:h-20 h-14   '/>
                </div>
                <div>
                    <h1 className='2xl:text-3xl lg:text-3xl xl:text-5xl md:text-3xl text-xl  font-bold my-4 font-head'>Our Mission</h1>
                    <p className='2xl:text-xl xl:text-3xl lg:text-xl md:text-xl text-lg font-pragraph'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi, odit?</p>
                </div>
            </div>
        </div>
        </div>
      </div>
    </div>
  )
}

export default About
