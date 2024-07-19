
import { useEffect } from 'react'
import About from '../Components/About'
// import Blog from '../Components/Blog'


import ChoosingUs from '../Components/ChoosingUs'

import Feature2 from '../Components/Feature2'
import Features from '../Components/Features'
import Footer from '../Components/Footer'
import Herosection from '../Components/Herosection'
// import InfiniteCrousel from '../Components/InfiniteCrousel'
import Navbar from '../Components/Navbar'
import Portfolio from '../Components/Portfolio'
import Services from '../Components/Services'
import Services2 from '../Components/Services2'
import Team from '../Components/Team'
import Testimonials from '../Components/Testimonials'
import aos from "aos"
import 'aos/dist/aos.css'
import Try from '@/Components/Try'
import TextCarosel from '@/Components/TextCarosel'
import BrandCarosel from '@/Components/BrandCarosel'
import { LandingPage } from '@/Components/LandingPage'

// import { Review } from '@/Components/Review'






const Home = () => {
 

  useEffect(()=>{
    aos.init({
      duration: 1000,
    });

  },[])
  return (
    <div>
      {/* <Review/> */}
      
      <Navbar/>
      {/* <LandingPage/> */}
      <Herosection/>
      <Try/>
      <TextCarosel/>
      <About/>
      

      <div data-aos="zoom-out" data-aos-offset="350">
      <Services/>
      <Services2/>
      </div>
      <Features/>
      <Feature2/>
      <ChoosingUs/>
      <Portfolio/>
      <Team/>
      <Testimonials/>
      <BrandCarosel/>

      
      <div className="conatct" id='contact'>
      <div className=' h-96 lg:h-auto md:h-80 bg-white py-16 '>
      
      <div className='lg:pt-12'>
        <h1 className='2xl:text-7xl xl:text-7xl 2xl:px-32 font-bold text-center lg:text-6xl md:text-3xl md:text-balance text-2xl w-[100%] px-10 font-head' >Call us now 123-456-7890 or send an email on info@Melvin.com</h1>
        <div className='text-center py-16'>
        <div className="b mx-auto  h-16 w-64 flex justify-center items-center">
    <div className="i 2xl:h-16 2xl:w-64 xl:h-20 xl:w-72 lg:h-20 lg:w-80 md:h-16 md:w-72 h-[10%] w-[70%] bg-gradient-to-br from-gray-100 to-gray-400 items-center rounded-full shadow-2xl cursor-pointer absolute overflow-hidden transform hover:scale-x-110 hover:scale-y-105 transition duration-300 ease-out">
    </div>
    <a className="text-center text-black z-10 pointer-events-none uppercase 2xl:text-lg xl:text-xl lg:text-xl md:text-lg sm:text-2xl text-[90%] font-pragraph font-bold">Ask For Demostration</a>
  </div>
        </div>
      </div>
</div>
      </div>
      <Footer/>
      
    </div>
  )
}

export default Home
