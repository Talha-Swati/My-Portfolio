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
    <div className="relative min-h-screen text-white overflow-hidden">
      {/* Animated Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-teal-900 via-black to-blue-900 animate-gradient-x opacity-90"></div>

      
      {/* Bio Section */}
      <div className="relative z-10 bg-black/60 backdrop-blur-lg py-20 px-6">
        <Bio />
        <Skills />
        <Footer />
      </div>
    </div>
    </>
  );
};

export default Home;
