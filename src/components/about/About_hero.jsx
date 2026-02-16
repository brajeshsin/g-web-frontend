import React from "react";
import { Link } from "react-router-dom";

const About_hero = () => {
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-[65%_35%] w-full">
        <div className="px-6 bg-[#7f8df9]">
          <h1
            className="font-AnekTamil font-bold 
            uppercase
            mt-5
               text-2xl 
               sm:text-3xl 
               md:text-4xl 
               lg:text-5xl 
               xl:text-[65px] 
               "
          >
            Tap into Your Brajesh Power. <br /> Forge a Stronger You.
          </h1>

          <h1 className="font-AnekTamil  font-bold text-[22px] mt-15  md:mt-60 px-6 uppercase">
            OUR VISION
          </h1>
          <h1 className="font-Geist font-normal text-[20px] px-6 mt-4 ">
            Brajesh Training is committed to delivering a training experience
            rooted in raw strength, functional <br /> fitness, and unwavering
            community support. We empower our members to tap into their Brajesh
            power, <br /> achieve their goals, and live a life of strength,
            resilience, and unwavering determination.
          </h1>
        </div>

        <div className="bg-blue-200 ">
          <img
            src="/assets/about1.jpg"
            alt="img"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-[65%_35%] w-full">
        <div>
          <img
            src="/assets/about2.jpg"
            alt="img"
            className="w-full h-160 object-cover"
          />
        </div>

        <div className=" p-5">
          <h1
            className="font-AnekTamil font-bold 
               text-2xl 
               sm:text-3xl 
               md:text-4xl 
               lg:text-5xl 
               xl:text-[65px] 
               "
          >
            DYNAMIC OPEN GYM
          </h1>
          <h1 className="ont-Geist font-normal text-[20px]  md:mt-85 px-4 ">
            At Brajesh Training, we strip away the fluff and focus on the
            fundamentals. Our expert coaches guide you through intense,
            functional workouts designed to build raw strength, resilience, and
            a body capable of anything.
          </h1>
        </div>
      </div>
      <div
        className="  w-full h-200 bg-center bg-no-repeat bg-cover border-b-2 border-t-2"
        style={{ backgroundImage: "url('/assets/about3.png')" }}
      ></div>
      <div>
        <div className="flex flex-col justify-center items-center  pb-28 bg-[#e9ecfe] border-b-2">
          <h1 className="mt-28 font-AnekTamil text-3xl md:text-4xl">
            WHAT WE BELIEVE IN
          </h1>

          <h1
            className="mt-8 font-AnekTamil font-extrabold
        text-4xl sm:text-5xl md:text-7xl lg:text-8xl xl:text-[85px]
        text-center leading-tight"
          >
            JOIN THE Brajesh TRIBE TODAY
          </h1>

          <Link
            to="/reserve"
            className="mt-6 bg-[#7f8df9] text-[#7f8df9] font-bold px-12 py-4 rounded-md cursor-pointer flex justify-center items-center"
          >
            <h1 className="text-black">RESERVE YOUR SPOT</h1>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default About_hero;
