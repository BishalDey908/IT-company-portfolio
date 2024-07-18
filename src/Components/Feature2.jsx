import React from 'react'
import about3 from "../assets/Img/herosection pic_files/about-3.png"
import icon6 from "../assets/Img/herosection pic_files/icon-6.png"
import icon7 from "../assets/Img/herosection pic_files/icon-7.png"

const Feature2 = () => {
  return (
    <div className='2xl:py-40 xl:pb-36 xl:pt-2 xl:px-24 lg:px-24 lg:py-24 flex 2xl:flex-row gap-6 w-auto  2xl:px-56 xl:flex-row lg:flex-col lg:gap-16 md:flex-col md:py-24 md:gap-20 px-0 py-24 '>
      <div>
        <img src={about3} alt="" srcset="" className='lg:mx-auto md:mx-auto 2xl:h-[100%] xl:h-[100%] lg:h-[100%] md:h-[450px] 2xl:block xl:block lg:block md:block hidden' />
      </div>
      <div className='h-full  my-auto  lg:px-16 md:px-12 feature2'>
        <div>
            <h1 className='2xl:text-5xl xl:text-6xl font-bold lg:text-6xl md:text-6xl text-4xl 2xl:px-0 xl:px-0 lg:px-0 md:px-0 px-2'>With Care and Attention Over 15 Years</h1>
            <p className='2xl:text-2xl xl:text-2xl lg:text-2xl md:text-2xl 2xl:my-10 xl:my-8 md:my-8 lg:my-8 my-2 text-xl'>Lorem ipsum dolor sit amet, consectetur adipiscing elit Nulla accumsan, metus.</p>
        </div>
        <div className='flex 2xl:flex-row xl:flex-row lg:flex-row md:flex-row flex-col my-4 2xl:gap-6 xl:gap-6 md:gap-6 gap-2   2xl:px-0 xl:px-0 lg:px-0 md:px-0 px-4 pb-4 2xl:pt-0 xl:pt-0 lg:pt-0 md:pt-0 pt-8'>
            <div className='2xl:mx-0 xl:mx-0 lg:mx-0 md:mx-0 mx-auto'><img src={icon6} alt="" srcset="" className='2xl:h-20 xl:h-20 lg:h-20 md:h-20 h-28' /></div>
            <div className='my-auto '>
                <h1 className='text-4xl font-bold my-2'>First Working Prosses</h1>
                <p className='2xl:text-2xl xl:text-2xl lg:text-2xl md:text-2xl text-xl'>Lorem ipsum dolor sit amet, consectetur adipiscing</p>
            </div>
        </div>
        <div className='flex 2xl:flex-row xl:flex-row lg:flex-row md:flex-row flex-col my-4 2xl:gap-6 xl:gap-6 md:gap-6 gap-2 2xl:px-0 xl:px-0 lg:px-0 md:px-0 px-4'>
            <div className='2xl:mx-0 xl:mx-0 lg:mx-0 md:mx-0 mx-auto'><img src={icon7} alt="" srcset="" className='2xl:h-20 xl:h-20 lg:h-20 md:h-20 h-28' /></div>
            <div className='my-auto '>
                <h1 className='text-4xl font-bold my-2'>First Working Prosses</h1>
                <p className='2xl:text-2xl xl:text-2xl lg:text-2xl md:text-2xl text-xl'>Lorem ipsum dolor sit amet, consectetur adipiscing</p>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Feature2
