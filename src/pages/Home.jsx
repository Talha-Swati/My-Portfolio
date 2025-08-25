import React from "react";
import Bio from "../components/Bio";
import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import Skills from "../components/Skills";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <>
      <Navbar />

      {/* Welcome Section */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="flex justify-center mt-4"
      >
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="relative px-6 py-3 rounded-md bg-black/40 backdrop-blur-sm"
        >
          {/* Welcome text with delayed zoom & glow after border animations */}
          <motion.h1
            initial={{ scale: 1, textShadow: "0px 0px 0px rgba(0,0,0,0)" }}
            animate={{ 
              scale: [1, 1.1, 1], 
              textShadow: [
                "0px 0px 0px rgba(0,0,0,0)",
                "0px 0px 8px rgba(56,189,248,0.8)", // cyan glow
                "0px 0px 0px rgba(0,0,0,0)"
              ]
            }}
            transition={{ duration: 1, ease: "easeInOut", delay: 1.6 }} // triggers after borders
            className="text-lg md:text-xl font-medium text-gray-100 tracking-wide text-center"
          >
            Welcome to my Portfolio
          </motion.h1>

          {/* Top border */}
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "100%" }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            className="absolute top-0 left-0 h-[2px] bg-gradient-to-r from-cyan-400 to-blue-500"
          />
          {/* Left border */}
          <motion.div
            initial={{ height: 0 }}
            animate={{ height: "100%" }}
            transition={{ duration: 0.8, ease: "easeInOut", delay: 0.4 }}
            className="absolute top-0 left-0 w-[2px] bg-gradient-to-b from-cyan-400 to-blue-500"
          />
          {/* Right border */}
          <motion.div
            initial={{ height: 0 }}
            animate={{ height: "100%" }}
            transition={{ duration: 0.8, ease: "easeInOut", delay: 0.6 }}
            className="absolute top-0 right-0 w-[2px] bg-gradient-to-b from-cyan-400 to-blue-500"
          />
          {/* Bottom border */}
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "100%" }}
            transition={{ duration: 0.8, ease: "easeInOut", delay: 1.0 }}
            className="absolute bottom-0 left-0 h-[2px] bg-gradient-to-r from-cyan-400 to-blue-500"
          />
        </motion.div>
      </motion.div>

      {/* Bio Section */}
      <div className="relative text-white overflow-hidden mt-6">
        <div className="relative z-10 px-6">
          <Bio />
          <Skills />
          <Footer />
        </div>
      </div>
    </>
  );
};

export default Home;
