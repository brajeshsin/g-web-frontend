const Hero = () => {
  return (
    <div>
      <div className="w-full bg-white border-b-2  px-2 py-4">
        <h1
          className="font-AnekTamil font-extrabold 
                 text-4xl 
                 sm:text-5xl 
                 md:text-7xl 
                 lg:text-8xl 
                 xl:text-[116px] 
                 text-center leading-tight"
        >
          TRAIN HARD. <span className="text-[#7f8ef9]">LIVE BETTER</span>
        </h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-[65%_35%] w-full">
        <div>
          <img
            src="/assets/Image.png"
            alt="img"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="bg-blue-200 p-5">
          <h1
            className="font-AnekTamil font-bold 
               text-2xl 
               sm:text-3xl 
               md:text-4xl 
               lg:text-5xl 
               xl:text-[65px] 
               "
          >
            FOR THE COMMITTED
          </h1>

          <h1 className="font-Geist font-normal text-[20px] md:mt-20 ">
            Train like an athelete with top-tier equipment <br /> and expert
            programming whether you're <br />
            building muscle or breaking PRs, we help you <br /> push past
            limits.
          </h1>
          <h1 className="font-Geist  font-bold text-[20px] mt-15  md:mt-60 px-4 uppercase">
            About Us
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Hero;
