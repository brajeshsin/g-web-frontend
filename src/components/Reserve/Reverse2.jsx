import React, { useState } from "react";
import { Link } from "react-router-dom";
import BrajeshModal from "../modal/PrimalModal";

const Reverse2 = () => {
  const [openModal, setOpenModal] = useState(false);

  return (
    <div>
      {/* ===== GRID SECTION ===== */}
      <div className="grid grid-cols-1 md:grid-cols-3 border-b-2">
        {/* ---------- Grid 1 ---------- */}
        <div className="bg-[#e9ecfe] px-6 pb-6 border-b-2 md:border-b-0 md:border-r">
          <h1 className="font-AnekTamil font-bold mt-5 text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-[40px] uppercase">
            Strength
          </h1>

          <p className="mt-10 font-Geist text-[19px]">Weekdays at 6AM</p>
          <div className="border-t border-black my-3"></div>
          <p className="mt-5">Weekends and Holidays at 8AM</p>
          <div className="border-t border-black my-3"></div>

          <p className="mt-5">
            Build a foundation of raw power with <br />
            our comprehensive weightlifting and strength <br />
            training programs.
          </p>

          <button
            onClick={() => setOpenModal(true)}
            className=" font-bold cursor-pointer w-full bg-[#7f8df9] text-black py-2 my-3 rounded-lg mt-10 uppercase"
          >
            Reserve Your Spot
          </button>
        </div>

        {/* ---------- Grid 2 ---------- */}
        <div className="bg-[#e9ecfe] px-6 pb-6 border-b-2 md:border-b-0 md:border-r">
          <h1 className="font-AnekTamil font-bold mt-5 text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-[40px] uppercase">
            Conditioning
          </h1>

          <p className="mt-10 font-Geist text-[19px]">Weekdays at 8AM</p>
          <div className="border-t border-black my-3"></div>
          <p className="mt-5">Weekends and Holidays at 10AM</p>
          <div className="border-t border-black my-3"></div>

          <p className="mt-5">
            Push your limits with high-intensity workouts <br />
            that challenge your cardiovascular <br />
            endurance and build functional fitness.
          </p>

          <button
            onClick={() => setOpenModal(true)}
            className=" font-bold cursor-pointer w-full bg-[#7f8df9] text-black py-2 my-3 rounded-lg mt-10 uppercase"
          >
            Reserve Your Spot
          </button>
        </div>

        {/* ---------- Grid 3 ---------- */}
        <div className="bg-[#e9ecfe] px-6 pb-6 border-b md:border-b-0">
          <h1 className="font-AnekTamil font-bold mt-5 text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-[40px] uppercase">
            COMMUNITY CLASSES
          </h1>

          <p className="mt-10 font-Geist text-[19px]">Weekdays at 9AM</p>
          <div className="border-t border-black my-3"></div>
          <p className="mt-5">Weekends and Holidays at 11AM</p>
          <div className="border-t border-black my-3"></div>

          <p className="mt-5">
            Experience the power of collective effort <br /> with our custom
            Workout of the Day. Push <br /> your limits alongside like-minded
            individuals.
          </p>

          <button
            onClick={() => setOpenModal(true)}
            className=" font-bold w-full bg-[#7f8df9] text-black py-2 my-3 rounded-lg mt-10 uppercase cursor-pointer"
          >
            Reserve Your Spot
          </button>
        </div>
      </div>

      {/* ===== PERSONAL TRAINING SECTION ===== */}
      <div className="flex flex-col justify-center items-center py-28 bg-[#7f8df9] border-b-2">
        <h1 className="font-AnekTamil font-extrabold text-4xl sm:text-5xl md:text-7xl lg:text-8xl xl:text-[85px] text-center leading-tight uppercase">
          Brajesh Personal Training
        </h1>

        <p className="max-w-3xl text-center mt-6 px-6">
          Receive personalized guidance and tailored programs designed to unlock
          your individual Brajesh potential. Our expert coaches will guide you
          every step of the way.
        </p>

        <button
          onClick={() => setOpenModal(true)}
          className="mt-6 bg-white text-[#7f8df9] font-bold px-12 py-4 rounded-md cursor-pointer flex justify-center items-center"
        >
          <span className="text-black uppercase">Reserve Your Spot</span>
        </button>
      </div>

      {/* ===== MODAL ===== */}
      <BrajeshModal open={openModal} onClose={() => setOpenModal(false)} />
    </div>
  );
};

export default Reverse2;
