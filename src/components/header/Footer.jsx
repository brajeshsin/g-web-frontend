import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 bg-[#e9ecfe]">
        {/* Left Section */}
        <div className=" flex items-center justify-center md:justify-start p-6 order-2 md:order-0">
          <img
            src="/assets/Vector2.png"
            alt="logo"
            className="w-[180px] md:w-[250px] h-auto"
          />
        </div>

        {/* Right Section */}
        <div className=" flex items-center justify-center md:justify-end p-6">
          <h1
            className="text-black font-InstrumentSans 
          text-2xl sm:text-3xl md:text-4xl lg:text-[52px] font-semibold text-center md:text-right"
          >
            Brajesh TRAINING
          </h1>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 bg-[#e9ecfd] pb-5">
        <div className="md:p-6 text-center md:text-left">
          <h1 className="md:mt-20 font-AnekTamil text-[24px] font-semibold">
            Contact
          </h1>

          <p className="font-Geist font-bold text-[14px] mt-4">
            Email: info@Brajeshtraining.com
          </p>
          <p className="font-Geist font-bold text-[14px]">
            Phone: +1 (123) 456-7890
          </p>
        </div>

        <div className=" flex flex-col items-center justify-center text-center md:p-6">
          <h1 className="mt-5 md:mt-20 font-AnekTamil text-[24px] font-semibold">
            OPENING HOURS
          </h1>
          <h1 className="font-Geist font-bold text-[14px] mt-4">
            MON-FRI 6:00 AM - 10:00 PM
          </h1>
          <h1 className="font-Geist font-bold text-[14px] mt-4">
            SATURDAYS 8:00 AM - 6:00 PM
          </h1>
          <h1 className="font-Geist font-bold text-[14px] mt-4">
            HOLIDAYS 8:00 AM - 2:00 PM
          </h1>
        </div>

        <div className=" flex flex-col items-center justify-center text-center p-6 pb-6 ">
          <h1 className="mt-5 md:mt-20 font-AnekTamil text-[24px] font-semibold">
            SOCIAL
          </h1>
          <Link className="font-Geist font-bold text-[14px] mt-2">
            INSTAGRAM
          </Link>
          <Link className="font-Geist font-bold text-[14px] mt-2">X</Link>
          <Link className="font-Geist font-bold text-[14px] mt-2">
            LINKEDIN
          </Link>
          <Link className="font-Geist font-bold text-[14px] mt-2">SPOTIFY</Link>
        </div>
      </div>
      <div className="flex justify-center items-center text-center bg-[#e9ecfc] pb-5">
        <h1 className="font-Geist font-bold text-[14px]">
          © 2024 Brajesh Training. All rights reserved.
        </h1>
      </div>
    </>
  );
};

export default Footer;
