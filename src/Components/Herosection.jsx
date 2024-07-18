// import React from 'react'
import HeroSecPic from "../assets/Img/herosection pic_files/header.png"
import BoxReveal from './magicui/box-reveal'
// import { Button } from "@/components/ui/button";


const Herosection = () => {
  return (
    <div className='text-white '>
      <div className='relative h-screen w-full bg-red-400'>
        <img src={HeroSecPic} alt="" srcset="" className='w-full h-full  object-cover' />
      
      
      <div className='h-auto  w-[80%] absolute   left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%] '>
        <div className='bg-purple-500 h-auto     2xl:p-16 xl:p-16 lg:p-16 md:p-16 p-6  bg-opacity-70 '>
            {/* <p className='text-center font-extrabold mb-4 2xl:text-3xl lg:text-xl md:text-lg text-sm'>Easy Customize</p>
            <p className='2xl:text-8xl xl:text-7xl lg:text-6xl md:text-5xl text-center font-bold text-3xl'>Website and User </p>
            <p className='2xl:text-8xl xl:text-7xl lg:text-6xl md:text-5xl text-center font-bold mt-4 text-2xl'>Interface Designer</p>
            <p className='my-6 text-center xl:text-xl 2xl:block xl:block lg:block md:hidden hidden'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus nihil ea asperiores architecto, facere in porro iure sunt molestiae inventore. Illum vitae repellendus, voluptate cupiditate eaque sequi quia nesciunt maiores ea, impedit alias autem fugit aliquam dolorum recusandae quidem suscipit perspiciatis, tempore nisi eum provident? Voluptate sunt explicabo minus optio ducimus enim facere aliquid ipsa consequatur placeat nihil ex repellendus quaerat, quam officiis facilis odio pariatur tempore consequuntur odit! Asperiores sunt eius delectus quis natus sint aliquid rem aspernatur dolor porro, blanditiis cumque labore sequi nemo esse maiores officia accusamus animi exercitationem. Alias quis, sit tenetur debitis dolores incidunt! </p>
            <p className='my-6 text-center xl:text-xl 2xl:hidden xl:hidden lg:hidden md:block hidden'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus nihil ea asperiores architecto, facere in porro iure sunt molestiae inventore. Illum vitae repellendus, voluptate cupiditate eaque sequi quia nesciunt maiores ea, impedit alias autem fugit aliquam dolorum recusandae quidem suscipit perspiciatis, tempore nisi eum provident?   </p>
            <p className='my-6 text-center 2xl:hidden xl:hidden lg:hidden md:hidden block'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus nihil ea asperiores architecto, facere in porro iure sunt </p>
            <div className='grid place-content-center'>
            <button className='my-8 bg-white py-4 px-8 rounded-full text-purple-500 font-bold lg:text-2xl md:text-lg text-xs'>SEND REQUEST</button>
            </div> */}


            <div className="h-full w-full  items-center justify-center overflow-hidden pt-8">
      <BoxReveal boxColor={"#ffff"} duration={0.5}>
        <p className="2xl:text-7xl xl:text-6xl lg:text-5xl lg:mb-2 md:text-4xl md:mb-4 text-2xl font-head font-bold">
        Easy Customize Website and User Interface Designer<span className="text-[#ef33f3]">.</span>
        </p>
      </BoxReveal>
 
      <BoxReveal boxColor={"#ffff"} duration={0.5}>
        <h2 className=" 2xl:text-xl xl:text-xl lg:text-xl md:text-sm text-sm mt-4 font-pragraph">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus nihil ea asperiores architecto, facere in porro iure sunt molestiae inventore. Illum vitae repellendus, 
          
        </h2>
      </BoxReveal>
 
      {/* <BoxReveal boxColor={"#5046e6"} duration={0.5}>
        <div className="mt-[1.5rem]">
          <p>
            -&gt; 20+ free and open-source animated components built with
            <span className="font-semibold text-[#5046e6]"> React</span>,
            <span className="font-semibold text-[#5046e6]"> Typescript</span>,
            <span className="font-semibold text-[#5046e6]"> Tailwind CSS</span>,
            and
            <span className="font-semibold text-[#5046e6]"> Framer Motion</span>
            . <br />
            -&gt; 100% open-source, and customizable. <br />
          </p>
        </div>
      </BoxReveal> */}
 
      <BoxReveal boxColor={"#ffff"} duration={0.5}>
      <button className='mt-8 bg-white py-4 px-8 rounded-full text-purple-500 font-bold 2xl:text-2xl xl:text-2xl lg:text-2xl md:text-lg text-xs  font-pragraph'>SEND REQUEST</button>
      </BoxReveal>
    </div>
        </div>
      </div>
</div>
    </div>
  )
}

export default Herosection
