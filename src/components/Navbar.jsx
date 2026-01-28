import React, { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { navLinks } from "../constants/navLinks";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [animateOnce, setAnimateOnce] = useState(true);
  const menuRef = useRef(null);
  const menuButtonRef = useRef(null);
  const { pathname } = useLocation();

  const isActive = (to) => (to === "/" ? pathname === "/" : pathname.startsWith(to));

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

  return (
    <header>
      <nav className="p-4 bg-black border-b border-gray-900 text-lg shadow-2xl sticky top-0 z-50 flex items-center justify-between font-sans">
        <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-cyan-500 to-transparent"></div>
        {/* TR Logo */}
        <Link to="/" className="flex items-center ml-6 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500/60 rounded-full">
          <div className="flex items-center gap-3 select-none">
            <div className="h-11 w-11 rounded-full bg-gradient-to-br from-cyan-400 via-teal-400 to-emerald-500 p-[2px] transition-transform duration-300 group-hover:scale-110">
              <div className="h-full w-full rounded-full bg-black flex items-center justify-center">
                <span className="font-extrabold text-white tracking-tight text-lg">
                  <span className="text-cyan-300">T</span>
                  <span className="text-teal-400">R</span>
                </span>
              </div>
            </div>
            <div className="hidden sm:flex flex-col leading-none">
              <span className="text-white font-semibold tracking-wide">Talha</span>
              <span className="text-cyan-400 text-xs tracking-[0.2em]">Riaz</span>
            </div>
          </div>
        </Link>


        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-8 items-center font-light">
          {navLinks.map((item, index) => (
            <li key={item.name} className="relative group">
              <Link
                to={item.to}
                className={`relative font-sans font-light tracking-normal transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500/60 rounded ${
                  isActive(item.to) ? "text-white" : "text-gray-300 hover:text-cyan-400"
                }`}
              >
                {item.name}
                {/* Underline animation */}
                <span
                  className={`absolute left-0 -bottom-1 h-[2px] bg-gradient-to-r from-cyan-400 to-teal-400 shadow-lg shadow-cyan-500/50 transition-all duration-500 ${
                    animateOnce ? "w-full" : "w-0 group-hover:w-full"
                  }`}
                  style={{
                    transitionDelay: animateOnce ? `${index * 200}ms` : "0ms",
                  }}
                ></span>
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <button
          ref={menuButtonRef}
          className="md:hidden text-gray-400 hover:text-white text-3xl relative z-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500/60 rounded"
          onClick={() => setIsMenuOpen((prev) => !prev)}
          aria-label="Toggle menu"
          aria-expanded={isMenuOpen}
          aria-controls="mobile-menu"
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
        id="mobile-menu"
        className={`absolute top-16 right-4 w-56 bg-black text-gray-200 
        px-6 py-6 space-y-6 z-50 shadow-2xl rounded-xl border-2 border-gray-800
        transform transition-all duration-500 ease-in-out
        ${
          isMenuOpen
            ? "translate-y-0 opacity-100"
            : "-translate-y-4 opacity-0 pointer-events-none"
        }`}
      >
        {navLinks.map((item) => (
          <Link
            key={item.name}
            to={item.to}
            className={`relative block w-fit font-light transition-all duration-300 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500/60 rounded ${
              isActive(item.to) ? "text-white" : "text-gray-300"
            }`}
            onClick={() => setIsMenuOpen(false)}
          >
            {item.name}
            {/* Underline animation (mobile) */}
            <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-teal-400 transition-all duration-500 group-hover:w-full"></span>
          </Link>
        ))}
      </div>
    </header>
  );
};

export default Navbar;
