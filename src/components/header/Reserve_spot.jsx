import { Link } from "react-router-dom";

const ReserveSpot = () => {
  return (
    <div className="flex flex-col justify-center items-center bg-[#7f8df9] pb-28">
      <h1 className="mt-28 font-AnekTamil text-3xl md:text-4xl">
        WHAT WE BELIEVE IN
      </h1>

      <h1
        className="mt-8 font-AnekTamil font-extrabold
        text-4xl sm:text-5xl md:text-7xl lg:text-8xl xl:text-[85px]
        text-center leading-tight"
      >
        JOIN THE Elvora TRIBE <br />
        TODAY
      </h1>

      <Link
        to="/reserve"
        className="mt-6 bg-white text-[#7f8df9] font-bold px-12 py-4 rounded-md cursor-pointer flex justify-center items-center"
      >
        <h1 className="text-black">RESERVE YOUR SPOT</h1>
      </Link>
    </div>
  );
};

export default ReserveSpot;
