import bgImg from "../assets/Img/herosection pic_files/bg-cta.png"
import Blog from "./Blog";

import { cn } from "@/lib/utils";
import Marquee from "@/Components/magicui/Marquee";

const reviews = [
  {
    name: "Jack",
    username: "@jack",
    body: "I've never seen anything like this before. It's amazing. I love it. ",
    img: "https://tailwindui.com/img/logos/158x48/transistor-logo-white.svg" ,
  },
  {
    name: "Jill",
    username: "@jill",
    body: "I don't know what to say. I'm speechless. This is amazing.",
    img: "https://tailwindui.com/img/logos/158x48/reform-logo-white.svg",
  },
  {
    name: "John",
    username: "@john",
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: "https://tailwindui.com/img/logos/158x48/tuple-logo-white.svg",
  },
  {
    name: "Jane",
    username: "@jane",
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: "https://tailwindui.com/img/logos/158x48/savvycal-logo-white.svg",
  },
  {
    name: "Jenny",
    username: "@jenny",
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: "https://tailwindui.com/img/logos/158x48/statamic-logo-white.svg",
  },
  {
    name: "James",
    username: "@james",
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: "https://tailwindui.com/img/logos/158x48/laravel-logo-white.svg",
  },
];

const firstRow = reviews.slice(0, reviews.length / 2);
const secondRow = reviews.slice(reviews.length / 2);

const ReviewCard = ({
  img,
  name,
  username,
  body,
}) => {
  return (
    <figure
      className={cn(
        "relative w-auto cursor-pointer overflow-hidden rounded-xl  p-4",
        // light styles
        "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
        // dark styles
        "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]",
      )}
    >
      <div className="flex flex-row items-center gap-2 ">
        <img className=" text-black" width="250" height="50" alt="" src={img} />
        
      </div>
      
    </figure>
  );
};

const BrandCarosel = () => {
    return (
      <div>
      {/* Blog */}
      
  
        {/* Testimolials */}
        {/* <h2 className="text-center text-4xl font-bold tracking-tight text-gray-900 2xl:text-7xl 2xl:pb-2 xl:pb-10 xl:text-7xl sm:text-5xl lg:text-7xl lg:pb-10 md:text-6xl md:pb-10 pb-10 2xl:mt-36 lg:mt-24 xl:mt-20 md:mt-20 mt-20 mx-11">
  
        <h1>Our Clients</h1>
        
      </h2> */}
        <div className="relative flex 2xl:h-[200px] xl:h-64 lg:h-64 md:h-64 h-36 w-full flex-col items-center justify-center overflow-hidden rounded-lg bg-background md:shadow-xl bg-purple-600">
        <Marquee pauseOnHover className="[--duration:20s]">
          {reviews.map((review) => (
            <ReviewCard key={review.username} {...review} />
          ))}
        </Marquee>
        
        <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-white dark:from-background"></div>
        <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-white dark:from-background"></div>
      </div>
  
        </div>
  
        
        
      
    );
  };
  
  export default BrandCarosel;