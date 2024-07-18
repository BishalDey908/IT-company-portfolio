import team1 from "../assets/Img/herosection pic_files/team-1.png"

const Team = () => {
    
  return (
    <div>
    <section id="our-team" className=" py-32 ">
    <div className="container mx-auto px-4">
        <h2 className="font-bold text-center text-primary 2xl:text-7xl 2xl:mb-24 xl:text-7xl xl:mb-28 lg:text-7xl lg:mb-28 md:mb-16 md:text-6xl md:mt-[-20px] mb-24 text-5xl font-head">Our Expert Team</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 2xl:grid-cols-4 xl:grid-cols-3 lg:grid-cols-3 gap-8">
            {/* <!-- Team Member 1 --> */}
            <div
        className="group relative cursor-pointer overflow-hidden bg-white px-6 pt-10 pb-8 shadow-xl ring-1 ring-gray-900/5 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl sm:mx-auto sm:max-w-sm sm:rounded-lg sm:px-10">
        <span className="absolute top-12 left-28 lg:left-24  z-0 h-40 w-40 rounded-full bg-purple-500 transition-all duration-500 group-hover:scale-[10]"></span>
        <div className="relative  mx-auto ">
                <img src="https://spacema-dev.com/elevate/assets/images/team/1.jpg" className="rounded-full" alt="" />
            <span className="grid    rounded-full bg-purple-500 transition-all duration-300 group-hover:bg-purple-500">
            </span>
            <div
                className="mt-8 pt-5 text-base leading-7 text-gray-600 transition-all duration-300 group-hover:text-white/90">
                <h3 className="text-xl font-semibold  text-center font-head">John Doe</h3>
                <p className=" text-center font-pragraph">Role: Software Engineer</p>
            </div>
        </div>
            </div>

            {/* <!-- Team Member 2 --> */}
            <div
        className="group relative cursor-pointer overflow-hidden bg-white px-6 pt-10 pb-8 shadow-xl ring-1 ring-gray-900/5 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl sm:mx-auto sm:max-w-sm sm:rounded-lg sm:px-10">
        <span className="absolute top-12 left-28 lg:left-24 z-0 h-40 w-40 rounded-full bg-purple-500 transition-all duration-500 group-hover:scale-[10]"></span>
        <div className="relative  mx-auto ">
                <img src="https://spacema-dev.com/elevate/assets/images/team/4.jpg" className="rounded-full" alt="" />
            <span className="grid    rounded-full bg-purple-500 transition-all duration-300 group-hover:bg-purple-500">
            </span>
            <div
                className="mt-8 pt-5 text-base leading-7 text-gray-600 transition-all duration-300 group-hover:text-white/90">
                <h3 className="text-xl font-semibold  text-center font-head">Jane Smith</h3>
                <p className=" text-center font-pragraph">Role: Graphic Designer</p>
            </div>
        </div>
            </div>

            <div
        className="group relative cursor-pointer overflow-hidden bg-white px-6 pt-10 pb-8 shadow-xl ring-1 ring-gray-900/5 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl sm:mx-auto sm:max-w-sm sm:rounded-lg sm:px-10">
        <span className="absolute top-12 left-28 lg:left-24 z-0 h-40 w-40 rounded-full bg-purple-500 transition-all duration-500 group-hover:scale-[10]"></span>
        <div className="relative  mx-auto ">
                <img src="https://spacema-dev.com/elevate/assets/images/team/2.jpg" className="rounded-full" alt="" />
            <span className="grid    rounded-full bg-purple-500 transition-all duration-300 group-hover:bg-purple-500">
            </span>
            <div
                className="mt-8 pt-5 text-base leading-7 text-gray-600 transition-all duration-300 group-hover:text-white/90">
                <h3 className="text-xl font-semibold  text-center font-head">Peter Johnson</h3>
                <p className=" text-center font-pragraph">Role: Seo specialist</p>
            </div>
        </div>
            </div>

            <div
        className="group relative cursor-pointer overflow-hidden bg-white px-6 pt-10 pb-8 shadow-xl ring-1 ring-gray-900/5 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl sm:mx-auto sm:max-w-sm sm:rounded-lg sm:px-10">
        <span className="absolute top-12 left-28 lg:left-24 z-0 h-40 w-40 rounded-full bg-purple-500 transition-all duration-500 group-hover:scale-[10]"></span>
        <div className="relative  mx-auto ">
                <img src="https://spacema-dev.com/elevate/assets/images/team/5.jpg" className="rounded-full" alt="" />
            <span className="grid    rounded-full bg-purple-500 transition-all duration-300 group-hover:bg-purple-500">
            </span>
            <div
                className="mt-8 pt-5 text-base leading-7 text-gray-600 transition-all duration-300 group-hover:text-white/90">
                <h3 className="text-xl font-semibold  text-center font-head">Emily Brown</h3>
                <p className=" text-center font-pragraph">Role: UX Designer</p>
            </div>
        </div>
            </div>

        </div>
    </div>
</section>




    
</div>

    

  )
}

export default Team
