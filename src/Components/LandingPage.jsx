import React from "react";
import { BackgroundGradientAnimation } from "./ui/background-gradient-animation";
import { NavLink, useNavigate } from "react-router-dom";
// import { BackgroundGradientAnimation } from "../ui/background-gradient-animation";

export function LandingPage() {
  const navigater = useNavigate()
  const handleButton = () =>{
    navigater('/home')
    console.log("czxcxzcz")
  }
  return (
    <div onClick={handleButton}>
    <BackgroundGradientAnimation >
      <div className="absolute z-50 inset-0 flex flex-col  items-center justify-center text-white font-bold px-4 pointer-events-none text-3xl text-center md:text-4xl lg:text-7xl">
        <p className="bg-clip-text text-transparent drop-shadow-2xl bg-gradient-to-b from-white/80 to-white/20">
          <span onClick={handleButton}>Welcome To Melvin</span>
        <p className="my-10 text-2xl bg-clip-text text-transparent drop-shadow-2xl bg-gradient-to-b from-white/80 to-white/20">Click anywhare to Explore </p>
          
        </p>
      </div>
    </BackgroundGradientAnimation>
      {/* <button onClick={handleButton} className="text-8xl">click me</button> */}
    </div>
  );
}
