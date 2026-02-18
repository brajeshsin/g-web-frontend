import { Link } from "react-router-dom";

const Discover = () => {
  return (
    <div className="flex flex-col sm:flex-row w-full">
      <div className="w-full sm:w-1/2 bg-[#e9ecfe] flex flex-col">
        <div className="border-b-2 flex-1 flex items-center">
          <h1
            className="font-AnekTamil font-bold
      text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-[60px] px-6"
          >
            Discover your <br /> potential
          </h1>
        </div>

        <div className="border-b-2 flex-1 flex flex-col justify-center">
          <h1
            className="font-AnekTamil font-bold
      text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-[40px] px-6 pb-2"
          >
            EXPERT COACHING
          </h1>
          <p className="px-6 font-AnekTamil">
            Trainers who are passionate about your progress.
          </p>
        </div>

        <div className="border-b-2 flex-1 flex flex-col justify-center">
          <h1
            className="font-AnekTamil font-bold
      text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-[40px] px-6 pb-2"
          >
            RESULT DRIVEN PROGRAMS
          </h1>
          <p className="px-6 font-AnekTamil">
            Workout that delivers tangible, measurable results.
          </p>
        </div>

        <div className="border-b-2 flex-1 flex flex-col justify-center">
          <h1
            className="font-AnekTamil font-bold
      text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-[40px] px-6 pb-2"
          >
            A SUPPORTIVE TRIBE
          </h1>
          <p className="px-6 font-AnekTamil">
            A community that pushes you to be your best.
          </p>
        </div>

        <div
          className="flex-1 flex items-center p-10 md:p-0
        justify-center md:justify-start"
        >
          <Link
            to={"/reserve"}
            className="px-6 capitalize font-AnekTamil  rounded-full bg-[#0000] font-bold underline cursor-pointer "
          >
            View Classes
          </Link>
        </div>
      </div>

      {/* Second Section */}
      <div className="w-full sm:w-1/2 ">
        <img
          src="/assets/Discover.png"
          alt="discover"
          loading="lazy"
          decoding="async"
          className="h-100 w-100 md:h-230 w-250"
        />
      </div>
    </div>
  );
};

export default Discover;
