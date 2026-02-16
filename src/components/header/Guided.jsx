const Guided = () => {
  return (
    <>
      <div
        className="
        grid grid-cols-1 
        md:grid-cols-[32.5%_32.5%_35%]
        w-full
        md:h-[380px] lg:h-[420px] xl:h-[460px]"
      >
        {/* -------- First Column -------- */}
        <div className="border-r-2 bg-[#e9ecfe] h-full flex flex-col justify-between p-4 border-b-2">
          <h1
            className="
            font-AnekTamil font-bold
            text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-[50px]
          "
          >
            GUIDED BY EXPERTS
          </h1>

          <p className="font-Geist text-[16px] md:text-[18px] lg:text-[20px]">
            Train like an athlete with top-tier equipment and expert programming
            whether you're building muscle or breaking PRs, we help you push
            past limits.
          </p>
        </div>

        {/* -------- Second Column -------- */}
        <div className="bg-[#e9ecfe] h-full flex flex-col justify-between p-4 border-b-2">
          <h1
            className="
            font-AnekTamil font-bold
            text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-[50px]
          "
          >
            GUIDED BY EXPERTS
          </h1>

          <p className="font-Geist text-[16px] md:text-[18px] lg:text-[20px]">
            Train like an athlete with top-tier equipment and expert programming
            whether you're building muscle or breaking PRs, we help you push
            past limits.
          </p>
        </div>

        {/* -------- Third Column -------- */}
        <div className="bg-blue-200 h-full border-b">
          <img
            src="/assets/img2.png"
            alt="Guided Training"
            loading="lazy"
            decoding="async"
            className="w-200 h-120 object-cover"
          />
        </div>
      </div>
      <div className="w-full bg-white border-b-2 px-2 py-4 justify-center flex overflow-hidden">
        <h1
          className="font-AnekTamil font-extrabold 
                 text-4xl 
                 sm:text-5xl 
                 md:text-7xl 
                 lg:text-8xl 
                 xl:text-[116px] 
                 text-center leading-tight"
        >
          JOIN THE. <span className="text-[#7f8ef9]">COMMUNITY</span>
        </h1>
      </div>
    </>
  );
};

export default Guided;
