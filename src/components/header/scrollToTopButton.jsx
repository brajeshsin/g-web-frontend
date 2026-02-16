import { useEffect, useState } from "react";
import { ChevronUp } from "lucide-react";

const ScrollToTopButton = () => {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const shouldShow = window.scrollY > 300;
      setShowButton((prev) => (prev === shouldShow ? prev : shouldShow));
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  if (!showButton) return null;

  return (
    <button
      type="button"
      aria-label="Scroll to top"
      onClick={scrollToTop}
      className="fixed bottom-6 right-6 bg-[#000000] text-white 
             w-14 h-14 rounded-full shadow-lg 
             flex items-center justify-center 
             hover:scale-110 transition cursor-pointer z-50"
    >
      <ChevronUp size={24} />
    </button>
  );
};

export default ScrollToTopButton;
