import bgImg from "../assets/Img/herosection pic_files/bg-cta.png"
import Blog from "./Blog";

import { cn } from "@/lib/utils";
import Marquee from "@/Components/magicui/Marquee";

const reviews = [
  {
    name: "Jane Smith",
    username: "@jJane Smith",
    body: "I've never seen anything like this before. It's amazing. I love it. ",
    img: "https://spacema-dev.com/elevate/assets/images/team/4.jpg",
  },
  {
    name: "Alex Johnson",
    username: "@Alex Johnson",
    body: "I don't know what to say. I'm speechless. This is amazing.",
    img: "https://spacema-dev.com/elevate/assets/images/team/3.jpg",
  },
  {
    name: "Peter Johnson",
    username: "@Peter Johnson",
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: "https://spacema-dev.com/elevate/assets/images/team/2.jpg",
  },
  {
    name: "Emily Brown",
    username: "@Emily Brown",
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: "https://spacema-dev.com/elevate/assets/images/team/5.jpg",
  },
  {
    name: "Michael Davis",
    username: "@Michael Davis",
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: "https://spacema-dev.com/elevate/assets/images/team/6.jpg",
  },
  {
    name: "Sarah Johnson",
    username: "@Sarah Johnson",
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: "https://spacema-dev.com/elevate/assets/images/team/7.jpg",
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
        "relative 2xl:w-96 xl:w-[450px] lg:w-80 md:w-80 w-64 cursor-pointer overflow-hidden rounded-xl border p-4",
        // light styles
        "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
        // dark styles
        "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]",
      )}
    >
      <div className="flex flex-row  items-center gap-2">
        <img className="rounded-full" width="50" height="50" alt="" src={img} />
        <div className="flex flex-col">
          <figcaption className="text-sm xl:text-xl font-medium dark:text-white">
            {name}
          </figcaption>
          <p className="text-xs  font-medium dark:text-white/40">{username}</p>
        </div>
      </div>
      <blockquote className="mt-2 2xl:text-xl  xl:text-2xl">{body}</blockquote>
    </figure>
  );
};



const Testimonials = () => {
  return (
    <div>
    {/* Blog */}
    <h1 className='2xl:text-7xl xl:text-7xl lg:text-7xl md:text-7xl text-5xl text-center 2xl:my-6  mx-6 xl:mt-8   font-bold '>Our Latest Blog</h1>
      <p className='2xl:text-4xl xl:text-4xl lg:text-4xl md:text-4xl text-2xl text-center mx-6 mt-8 mb-16'>Lorem ipsum dolor sit consectetur adipiscing elit.
      Curabitur placerat tellus site.</p>
      <div className='flex flex-wrap gap-10 px-10 py-10 h-auto w-full   place-content-center'>
      <Blog/>
      <Blog/>
      <Blog/>
      <Blog/>
      </div>
      <div>

      {/* Testimolials */}
      <h2 className="text-center text-4xl font-bold tracking-tight text-gray-900 2xl:text-7xl 2xl:pb-2 xl:pb-10 xl:text-7xl sm:text-5xl lg:text-7xl lg:pb-10 md:text-6xl md:pb-10 pb-10 2xl:mt-36 lg:mt-24 xl:mt-20 md:mt-20 mt-20 mx-11">

      Read trusted reviews from our customers
    </h2>
      <div className="relative flex 2xl:h-[500px]  xl:h-[450px] xl:mb-10 lg:h-[450px] md:h-[450px] h-[450px] w-full flex-col items-center justify-center overflow-hidden rounded-lg bg-background ">
      <Marquee pauseOnHover className="[--duration:20s]">
        {reviews.map((review) => (
          <ReviewCard key={review.username} {...review} />
        ))}
      </Marquee>
      <Marquee reverse pauseOnHover className="[--duration:20s]">
        {secondRow.map((review) => (
          <ReviewCard key={review.username} {...review} />
        ))}
      </Marquee>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-white dark:from-background"></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-white dark:from-background"></div>
    </div>

      </div>

      {/* Contact */}
      
    </div>
  );
};

export default Testimonials;
