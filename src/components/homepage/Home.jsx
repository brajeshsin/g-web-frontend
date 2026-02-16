import Guided from "../header/Guided";
import Discover from "../header/Discover";
import ReserveSpot from "../header/Reserve_spot";
// import ScrollToTopButton from "../header/scrollToTopButton";
import Hero from "../header/Hero";

const Home = () => {
  return (
    <>
      <Hero />
      <Guided />
      <Discover />
      <ReserveSpot />
      {/* <ScrollToTopButton /> */}
    </>
  );
};

export default Home;
