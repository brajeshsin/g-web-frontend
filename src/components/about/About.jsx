import About_hero from "./About_hero";

const About = () => {
  return (
    <>
      <div className="border-b-2">
        <h1
          className="px-6 font-AnekTamil 
               uppercase 
               text-[40px] md:text-[116px] 
               md:font-extrabold 
               flex items-center 
               justify-center md:justify-start 
               "
        >
          ABOUT US
        </h1>
      </div>
      <About_hero />
    </>
  );
};

export default About;
