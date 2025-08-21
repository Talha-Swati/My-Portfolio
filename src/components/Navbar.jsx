import React, { useState } from "react";
import { Link } from "react-router-dom";
import CvModal from "./CvModal";

const Navbar = () => {
  const [isCvOpen, setIsCvOpen] = useState(false);

  return (
    <header>
      <nav className="p-4 bg-transparent text-lg shadow-md sticky top-0 z-50 flex items-center justify-between">
<h1 className="font-[Orbitron] text-4xl font-extrabold tracking-wide select-none 
  bg-gradient-to-r from-gray-200 via-gray-400 to-gray-600 
  text-transparent bg-clip-text">
  Digital <span className="ml-1.5">Playground</span>
</h1>




        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-8 items-center font-semibold text-amber-400">
          {["Home", "About", "Projects", "Contact"].map((item) => (
            <li key={item} className="relative group">
              <Link
                to={`/${item.toLowerCase() === "home" ? "" : item.toLowerCase()}`}
            className="relative px-5 py-2 font-[Poppins] tracking-wide text-gray-300 
            rounded-lg transition-all duration-300 ease-in-out
            hover:text-amber-400 hover:scale-110
            hover:drop-shadow-[0_0_10px_rgba(251,191,36,0.6)]
            after:absolute after:left-1/2 after:bottom-0 after:h-[2px] after:w-0
            after:-translate-x-1/2 after:bg-gradient-to-r from-amber-500 to-lime-500
            after:rounded-full after:transition-all after:duration-500
            hover:after:w-3/4"


              >
                {item}
              </Link>
              {/* Underline Reveal Animation */}
              <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-amber-400 group-hover:w-full transition-all duration-300"></span>
            </li>
          ))}

          {/* View CV Button */}
          <li>
            <button
              onClick={() => setIsCvOpen(true)}
              className="relative px-5 py-2 overflow-hidden font-semibold rounded-xl text-lime-600 border-2 border-lime-500
                        hover:text-white hover:border-lime-600 transition-colors duration-300 group"
            >
              <span className="absolute inset-0 bg-lime-600 translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-500 ease-in-out"></span>
              <span className="relative z-10">View CV</span>
            </button>
          </li>
        </ul>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-amber-400 hover:text-amber-300 text-3xl">
          ☰
        </button>
      </nav>

      {/* CV Modal */}
      <CvModal isOpen={isCvOpen} onClose={() => setIsCvOpen(false)} />
    </header>
  );
};

export default Navbar;
