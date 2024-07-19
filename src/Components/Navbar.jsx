import React, { useState } from "react";
import Logo from "../assets/Img/logo-dark.png";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdClose } from "react-icons/md";

const Navbar = () => {
  const [button, setButton] = useState(false);
  return (
    <div className="h-20 bg-white text-black  z-50 bg-opacity-70 border-b border-black" id="Navbar">
      <nav className="flex justify-between mx-12 py-4 ">
        <div>
          <img src={Logo} alt="Logo" className="h-10" />
        </div>
        <div className="py-2 text-xl font-bold 2xl:block xl:block lg:block md:block sm:hidden hidden">
          <ul className="flex gap-6 font-head">
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#portfolio">Portfolio</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </div>

        <div className="group flex h-auto w-20 cursor-pointer items-center justify-center rounded-3xl  p-2  2xl:hidden xl:hidden lg:hidden md:hidden sm:block my-auto ml-6 block">
          <div className="space-y-2">
            {button ? (
              <MdClose
                className="text-2xl "
                onClick={() => {
                  setButton(false);
                }}
              />
            ) : (
              <GiHamburgerMenu
                className="text-2xl "
                onClick={() => {
                  setButton(true);
                }}
              />
            )}
          </div>
        </div>
      </nav>
      {button && (
        <div className="bg-gray-400 h-[100vh] bg-opacity-90 pt-20 pr-6 mt-2 w-full slide-in-left z-50">
          <ul className="grid  place-content-center gap-28 text-2xl text-center font-bold font-head ">
            <li>
              <a href="#home" onClick={()=>setButton(false)}>Home</a>
            </li>
            <li>
              <a href="#about" onClick={()=>setButton(false)}>About</a>
            </li>
            <li>
              <a href="#portfolio" onClick={()=>setButton(false)}>Portfolio</a>
            </li>
            <li>
              <a href="#contact" onClick={()=>setButton(false)}>Contact</a>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Navbar;
