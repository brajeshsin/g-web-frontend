import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/header/Header";
import Home from "./components/homepage/Home";
import About from "./components/about/About";
import Reserve from "./components/Reserve/Reserve";
import Footer from "./components/header/Footer";
import { Toaster } from "react-hot-toast";
import ScrollToTopButton from "./components/header/scrollToTopButton";
import ScrollToTop from "./components/utils/ScrollToTop";

const App = () => {
  return (
    <>
      <Toaster position="top-right" />
      <ScrollToTopButton />

      <BrowserRouter>
        <ScrollToTop />
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/reserve" element={<Reserve />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
};

export default App;
