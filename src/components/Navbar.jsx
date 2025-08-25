import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import CvModal from "./CvModal";
import logo from "../assets/logo.png"; // ✅ Import your logo

const Navbar = () => {
  const [isCvOpen, setIsCvOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [animateOnce, setAnimateOnce] = useState(true);
  const menuRef = useRef(null);
  const menuButtonRef = useRef(null);

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handler = (e) => {
      const clickedInsideMenu =
        menuRef.current && menuRef.current.contains(e.target);
      const clickedButton =
        menuButtonRef.current && menuButtonRef.current.contains(e.target);
      if (clickedInsideMenu || clickedButton) return;
      setIsMenuOpen(false);
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  // Run underline animation once on load
  useEffect(() => {
    const timer = setTimeout(() => setAnimateOnce(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  const menuItems = ["Home", "About", "Projects", "Services", "Contact"];

  return (
    <header>
      <nav className="p-4 bg-black border-3 border-white/10 text-lg shadow-md sticky top-0 z-50 flex items-center justify-between">
       {/* Logo (fixed height, zoomed inside, minimal hover) */}
<Link to="/" className="flex items-center ml-6"> {/* margin from left */}
  <div className="relative h-12 w-45 overflow-hidden flex items-center">
    <img
      src={logo}
      alt="Logo"
      className="h-full w-full object-contain select-none cursor-pointer scale-600
                 transition-transform duration-300 mt-5 ease-in-out hover:scale-650 hover:brightness-110"
    />
  </div>
</Link>


        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-8 items-center font-semibold">
          {menuItems.map((item, index) => (
            <li key={item} className="relative group">
              <Link
                to={`/${item.toLowerCase() === "home" ? "" : item.toLowerCase()}`}
                className="relative font-[Poppins] tracking-wide text-gray-300 transition-all duration-300"
              >
                {item}
                {/* Underline animation */}
                <span
                  className={`absolute left-0 -bottom-1 h-[2px] bg-teal-400 transition-all duration-500 ${
                    animateOnce ? "w-full" : "w-0 group-hover:w-full"
                  }`}
                  style={{
                    transitionDelay: animateOnce ? `${index * 200}ms` : "0ms",
                  }}
                ></span>
              </Link>
            </li>
          ))}

          {/* View CV Button */}
          <li>
            <button
              onClick={() => setIsCvOpen(true)}
              className="relative px-5 py-2 overflow-hidden font-semibold rounded-xl text-lime-600 border-2 border-lime-500
                        hover:text-white hover:border-lime-600 transition-colors duration-300 group"
            >
              <span className="absolute inset-0 bg-lime-600 -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-in-out"></span>
              <span className="relative z-10 cursor-pointer">View CV</span>
            </button>
          </li>
        </ul>

        {/* Mobile Menu Button */}
        <button
          ref={menuButtonRef}
          className="md:hidden text-gray-400 hover:text-white text-3xl relative z-50"
          onClick={() => setIsMenuOpen((prev) => !prev)}
        >
          ☰
        </button>
      </nav>

      {/* Overlay */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-transparent z-40"
          onClick={() => setIsMenuOpen(false)}
        ></div>
      )}

      {/* Mobile Dropdown Menu */}
      <div
        ref={menuRef}
        className={`absolute top-16 right-4 w-56 bg-black backdrop-blur-md text-gray-200 
        px-6 py-6 space-y-6 z-50 shadow-2xl rounded-xl border border-gray-700
        transform transition-all duration-500 ease-in-out
        ${
          isMenuOpen
            ? "translate-y-0 opacity-100"
            : "-translate-y-4 opacity-0 pointer-events-none"
        }`}
      >
        {menuItems.map((item) => (
          <Link
            key={item}
            to={`/${item.toLowerCase() === "home" ? "" : item.toLowerCase()}`}
            className="relative block w-fit font-semibold text-gray-300 transition-all duration-300 group"
            onClick={() => setIsMenuOpen(false)}
          >
            {item}
            {/* Underline animation (mobile) */}
            <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-teal-400 transition-all duration-500 group-hover:w-full"></span>
          </Link>
        ))}

        {/* Mobile CV Button */}
        <button
          onClick={() => {
            setIsCvOpen(true);
            setIsMenuOpen(false);
          }}
          className="relative px-5 py-2 overflow-hidden font-semibold rounded-xl text-lime-600 border-2 border-lime-500
            hover:text-white hover:border-lime-600 transition-colors duration-300 group"
        >
          <span className="absolute inset-0 bg-lime-600 -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-in-out"></span>
          <span className="relative z-10 cursor-pointer">View CV</span>
        </button>
      </div>

      {/* CV Modal */}
      <CvModal isOpen={isCvOpen} onClose={() => setIsCvOpen(false)} />
    </header>
  );
};

export default Navbar;
