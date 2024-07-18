import React from 'react'
import icon3 from "../assets/Img/herosection pic_files/icon-3.png"
import icon4 from "../assets/Img/herosection pic_files/icon-4.png"
import icon5 from "../assets/Img/herosection pic_files/icon-5.png"
import check from "../assets/Img/herosection pic_files/chek-icon.png" 

const Services2 = () => {
  return (
    
    <div className='2xl:pb-24 xl:my-16 lg:mb-28 md:mb-52 2xl:mt-0 xl:mt-0 lg:mt-0 md:mt-0 mt-[-50px] '>
      <div className='flex 2xl:flex-row xl:flex-row lg:flex-row md:flex-row flex-col  w-[80%] h-72 mx-auto mb-20 2xl:gap-6 xl:gap-6 lg:gap-6 md:gap-6 gap-32 '>
        <div className='2xl:w-[30%] xl:w-[30%] lg:w-[30%] md:w-[30%] w-[80%]   h-80  2xl:px-8 xl:px-8 lg:px-8 md:px-8 mx-auto'>
        <div className='w-full flex place-content-center'>
            <img src={icon3} alt="" />
        </div>
            <p className='text-center 2xl:text-3xl xl:text-5xl lg:text-3xl md:text-3xl text-3xl font-bold my-6 font-head'>Business</p>
            <p className='text-center 2xl:text-lg xl:text-2xl lg:text-xl md:text-lg font-pragraph'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempora eius dicta, a excepturi neque quia ipsam itaque earum similique </p>
            <div className='w-full grid place-content-center my-6'>
            <img src={check} alt="" className='h-10' />
            </div>
        </div>
        <div className='2xl:w-[30%] xl:w-[30%] lg:w-[30%] md:w-[30%] w-[80%]   h-80  2xl:px-8 xl:px-8 lg:px-8 md:px-8 mx-auto'>
        <div className='w-full flex place-content-center'>
            <img src={icon4} alt="" />
        </div>
            <p className='text-center 2xl:text-3xl xl:text-5xl lg:text-3xl md:text-3xl text-3xl font-bold my-6 font-head'>Consulting</p>
            <p className='text-center 2xl:text-lg xl:text-2xl lg:text-xl md:text-lg font-pragraph'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempora eius dicta, a excepturi neque quia ipsam itaque earum similique </p>
            <div className='w-full grid place-content-center my-6'>
            <img src={check} alt="" className='h-10' />
            </div>
        </div>
        <div className='2xl:w-[30%] xl:w-[30%] lg:w-[30%] md:w-[30%] w-[80%]   h-80  2xl:px-8 xl:px-8 lg:px-8 md:px-8 mx-auto '>
        <div className='w-full flex place-content-center'>
            <img src={icon5} alt="" />
        </div>
            <p className='text-center 2xl:text-3xl xl:text-5xl lg:text-3xl md:text-3xl text-3xl font-bold my-6 font-head'>Finance</p>
            <p className='text-center 2xl:text-lg xl:text-2xl lg:text-xl md:text-lg font-pragraph'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempora eius dicta, a excepturi neque quia ipsam itaque earum similique </p>
            <div className='w-full grid place-content-center my-6'>
            <img src={check} alt="" className='h-10' />
            </div>
        </div>
      </div>
    </div>
  )
}

export default Services2
