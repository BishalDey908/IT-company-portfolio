import React from 'react'
import { VelocityScroll } from './magicui/scroll-based-velocity'



const TextCarosel = () => {
  return (
    <div >
      <VelocityScroll text="Business consultant"
      default_velocity={5}
      className="font-display text-center text-8xl font-bold tracking-[-0.02em] text-violet-600  dark:text-white  2xl:text-9xl  xl:text-[160px] lg:text-[160px] lg:pt-14 md:text-9xl md:pt-10   md:leading-[5rem]"
    />
    </div>
  )
}

export default TextCarosel
