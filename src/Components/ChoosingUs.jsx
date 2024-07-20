import React, { useState } from "react";
import bgcta from "../assets/Img/herosection pic_files/bg-cta.png";
import Countup from "react-countup"
import scrollTriger from "react-scroll-trigger"
import ScrollTrigger from "react-scroll-trigger";
import SimpleParallax from "simple-parallax-js";

const ChoosingUs = () => {
  const[counter,setCounter]=useState(false)
  return (
    <div className="text-white ">
      <div className="relative h-full">
      <SimpleParallax scale={2} delay={0.4}>
        <img
          src={bgcta}
          alt=""
          srcset=""
          className="w-full  object-cover 2xl:h-screen xl:h-[1055px] lg:h-[1055px] md:h-[1355px] h-[220vh]"
        />
        </SimpleParallax>
        <div className="absolute top-0 w-full h-auto 2xl:my-20 xl:my-34 lg:my-36 md:mt-16 mt-20 ">
          <div className="2xl:text-7xl xl:text-7xl text-center font-bold  md:text-6xl text-4xl px-4 font-head">
            Facts For Choosing Us
          </div>
          <p className="2xl:text-4xl text-center 2xl:mt-12 md:text-3xl text-xl px-12 mt-6 font-pragraph">
            Lorem ipsum dolor sit consectetur adipiscing elit.
          </p>
          <p className="2xl:text-4xl text-center xl:mb-10 lg:mb-10 text-2xl px-12 font-pragraph">
            Curabitur placerat tellus site.
          </p>

          <div className="flex 2xl:flex-nowrap xl:flex-row  lg:flex-row lg:flex-wrap lg:w-full   md:flex-col flex-col gap-10  2xl:my-16   lg:mx-auto   relative xl:flex-wrap xl:justify-center md:px-28 md:mt-12 px-10 mt-10">
            <div className="2xl:h-80 h-auto 2xl:py-14 xl:py-0 lg:py-0 md:py-0 py-20 border-2 group relative  md:w-full 2xl:w-full xl:w-96 lg:w-80  lg:mx-auto w-auto md:h-56  rounded-lg  text-lg ">
              <div className="2xl:px-20 px-4 font-bold h-full md:py-10 md:text-center text-center">
                <div className="absolute inset-0 w-0 bg-white transition-all duration-[250ms] ease-out group-hover:w-full"></div>
                <h1 className="relative text-white group-hover:text-purple-500 2xl:text-7xl xl:text-7xl lg:text-7xl md:text-7xl text-5xl font-head">
                  <ScrollTrigger onEnter={()=>setCounter(true)} onExit={()=>setCounter(false)}>
                  {counter ? <Countup start={0} end={52} duration={3} delay={0}/> : `52`}+
                  
                  </ScrollTrigger>
                </h1>
                <p className="relative text-white group-hover:text-purple-500 2xl:text-5xl xl:text-4xl lg:text-4xl  md:text-4xl text-2xl font-head">
                  CLIENTS
                </p>
              </div>
            </div>
            <div className="2xl:h-80 h-auto 2xl:py-14 xl:py-0 lg:py-0 md:py-0 py-20 border-2 group relative lg:w-80 md:w-full 2xl:w-full xl:w-96 lg:mx-auto w-auto md:h-56  rounded-lg  text-lg ">
              <div className="2xl:px-20 px-4 font-bold h-full md:py-10 md:text-center text-center">
                <div className="absolute inset-0 w-0 bg-white transition-all duration-[250ms] ease-out group-hover:w-full"></div>
                <h1 className="relative text-white group-hover:text-purple-500 2xl:text-7xl xl:text-7xl lg:text-7xl md:text-7xl text-5xl font-head">
                <ScrollTrigger onEnter={()=>setCounter(true)} onExit={()=>setCounter(false)}>
                {counter ? <Countup start={0} end={700} duration={3} delay={0}/> : `700`}+
                  
                  </ScrollTrigger>
                </h1>
                <p className="relative text-white group-hover:text-purple-500 2xl:text-4xl xl:text-4xl lg:text-4xl  md:text-4xl text-2xl font-head">
                  EXPERIENCE
                </p>
              </div>
            </div>
            <div className="2xl:h-80 h-auto 2xl:py-14 xl:py-0 lg:py-0 md:py-0 py-20 border-2 group relative lg:w-80 md:w-full 2xl:w-full xl:w-96 lg:mx-auto w-auto md:h-56  rounded-lg  text-lg ">
              <div className="2xl:px-20 px-4 font-bold h-full md:py-10 md:text-center text-center">
                <div className="absolute inset-0 w-0 bg-white transition-all duration-[250ms] ease-out group-hover:w-full"></div>
                <h1 className="relative text-white group-hover:text-purple-500 2xl:text-7xl xl:text-7xl lg:text-7xl md:text-7xl text-5xl font-head">
                <ScrollTrigger onEnter={()=>setCounter(true)} onExit={()=>setCounter(false)}>
                {counter ? <Countup start={0} end={50} duration={3} delay={0}/> : `50`}+
                  
                  </ScrollTrigger>
                </h1>
                <p className="relative text-white group-hover:text-purple-500 2xl:text-4xl xl:text-4xl lg:text-4xl  md:text-4xl text-2xl font-head">
                  MEMBERS
                </p>
              </div>
            </div>
            <div className="2xl:h-80 h-auto 2xl:py-14 xl:py-0 lg:py-0 md:py-0 py-20 border-2 group relative lg:w-80 md:w-full 2xl:w-full xl:w-96 lg:mx-auto w-auto md:h-56  rounded-lg  text-lg ">
              <div className="2xl:px-20 px-4 font-bold h-full md:py-10 md:text-center text-center">
                <div className="absolute inset-0 w-0 bg-white transition-all duration-[250ms] ease-out group-hover:w-full"></div>
                <h1 className="relative text-white group-hover:text-purple-500 2xl:text-7xl xl:text-7xl lg:text-7xl md:text-7xl text-5xl font-head">
                <ScrollTrigger onEnter={()=>setCounter(true)} onExit={()=>setCounter(false)}>
                {counter ? <Countup start={0} end={200} duration={3} delay={0}/> : `200`}+
                  
                  </ScrollTrigger>
                </h1>
                <p className="relative text-white group-hover:text-purple-500 2xl:text-4xl xl:text-4xl lg:text-4xl  md:text-4xl text-2xl font-head">
                  AWWARDS
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChoosingUs;
