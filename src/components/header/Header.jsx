import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";

const navItems = [
  { to: "/", label: "HOME" },
  { to: "/about", label: "ABOUT" },
];

const Header = () => {
  const [open, setOpen] = useState(false);
  const closeMenu = () => setOpen(false);

  return (
    <>
      <div className="  flex w-full justify-between items-center p-3 bg-[#e9ecfe] border-b-2 z-50">
        {/* Logo Section */}
        <Link
          to="/"
          className="flex items-center gap-3 cursor-pointer"
          onClick={closeMenu}
        >
          <img src="/assets/Vector.png" alt="Logo" />

          <h1 className="font-bold text-[18px]  md:text-[20px] text-black font-InstrumentSans">
            Brajesh Training
          </h1>
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden md:flex gap-8 items-center">
          {navItems.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="font-GeistMono text-[15px] cursor-pointer"
            >
              {item.label}
            </Link>
          ))}

          <Link
            to="/reserve"
            className="bg-[#7f8df9] text-black font-bold px-4 py-2 rounded-md cursor-pointer"
          >
            RESERVE YOUR SPOT
          </Link>
        </nav>

        {/* Mobile Hamburger */}
        <div className="md:hidden">
          {open ? (
            <button
              type="button"
              aria-label="Close menu"
              className="cursor-pointer"
              onClick={closeMenu}
            >
              <X size={28} />
            </button>
          ) : (
            <button
              type="button"
              aria-label="Open menu"
              className="cursor-pointer"
              onClick={() => setOpen(true)}
            >
              <Menu size={28} />
            </button>
          )}
        </div>
      </div>

      {/* Mobile Drawer (Top → Bottom) */}
      <div
        className={`md:hidden fixed top-0 left-0 w-full bg-[#e9ecfe] transition-all duration-300 z-50 ${
          open ? "h-screen opacity-100" : "h-0 opacity-0 overflow-hidden"
        }`}
      >
        {/* Drawer Header */}
        <div className="flex justify-between items-center p-3 border-b-2">
          <Link to="/" className="flex items-center gap-3" onClick={closeMenu}>
            <img src="/assets/Vector.png" alt="Logo" />
            <h1 className="font-bold text-[18px] font-InstrumentSans">
              Brajesh Training
            </h1>
          </Link>

          <button
            type="button"
            aria-label="Close menu"
            className="cursor-pointer"
            onClick={closeMenu}
          >
            <X size={28} />
          </button>
        </div>

        {/* Drawer Menu */}
        <div className="flex flex-col items-center gap-8 mt-10">
          {navItems.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="font-GeistMono text-[16px] cursor-pointer"
              onClick={closeMenu}
            >
              {item.label}
            </Link>
          ))}

          <Link
            to="/reserve"
            className="bg-[#7f8df9] text-black font-bold px-6 py-3 rounded-md cursor-pointer"
            onClick={closeMenu}
          >
            RESERVE YOUR SPOT
          </Link>
        </div>
      </div>
    </>
  );
};

export default Header;
