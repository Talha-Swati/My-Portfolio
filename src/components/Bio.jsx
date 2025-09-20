import React, { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import CvModal from "./CvModal";
import dp3 from "../assets/dp3.png";

const Bio = () => {
  const [isCvOpen, setIsCvOpen] = useState(false);
  const [isImageOpen, setIsImageOpen] = useState(false);

  const buttonVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.2, duration: 0.6, ease: "easeOut" },
    }),
  };

  return (
    <section className="relative my-6 sm:my-12 py-10 sm:py-16 px-4 sm:px-10 md:px-20 rounded-xl sm:rounded-2xl shadow-xl overflow-hidden w-full sm:max-w-6xl mx-auto">
      <div className="absolute inset-0 bg-gradient-to-br from-teal-900 via-black to-blue-950 animate-gradient opacity-90 rounded-xl sm:rounded-2xl"></div>

      <div className="relative z-10 grid grid-cols-1 md:grid-cols-12 gap-6 sm:gap-10 items-center">
        {/* Profile Image */}
        <motion.div
          className="col-span-1 md:col-span-5 flex justify-center md:justify-start"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <img
            src={dp3}
            alt="Profile"
            className="w-32 h-32 sm:w-48 sm:h-48 md:w-72 md:h-72 rounded-full object-cover shadow-lg border-4 border-amber-400 cursor-pointer hover:scale-105 transition-transform duration-300"
            onClick={() => setIsImageOpen(true)}
          />
        </motion.div>

        {/* Text Section */}
        <motion.div
          className="col-span-1 md:col-span-7 text-center md:text-left"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
            Hi, I'm <span className="text-cyan-500">Talha Riaz</span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-200 leading-relaxed mb-6">
            A focused{" "}
            <span className="font-semibold text-amber-400">
              Frontend Developer
            </span>
            , crafting modern, responsive, and high-performance web
            applications. My toolkit includes{" "}
            <span className="text-amber-400">React.js</span>,{" "}
            <span className="text-amber-400">Tailwind CSS</span>, and a
            commitment to accessible, user-centered interfaces. Alongside
            development, I bring expertise in{" "}
            <span className="text-amber-400">Digital Marketing </span> and{" "}
            <span className="text-amber-400">SEO</span>, helping businesses
            build user-friendly, optimized websites that not only look great but
            also rank higher, drive traffic, and boost growth.
          </p>

          {/* Buttons */}
<div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
  {/* View My Work */}
  <motion.div
    custom={0}
    variants={buttonVariants}
    initial="hidden"
    animate="visible"
    whileTap={{ scale: 0.95 }}
  >
    <Link
      to="/projects"
      className="bg-transparent border border-blue-500 text-blue-400 px-6 py-3 rounded-lg font-semibold shadow-md block text-center transition-shadow duration-300 hover:shadow-[2px_4px_6px_rgba(59,130,246,0.6)]"
    >
      View My Work
    </Link>
  </motion.div>

  {/* Contact Me */}
  <motion.div
    custom={1}
    variants={buttonVariants}
    initial="hidden"
    animate="visible"
    whileTap={{ scale: 0.95 }}
  >
    <Link
      to="/contact"
      className="bg-transparent border border-amber-400 text-amber-400 px-6 py-3 rounded-lg font-semibold shadow-md block text-center transition-shadow duration-300 hover:shadow-[2px_4px_6px_rgba(251,191,36,0.6)]"
    >
      📩 Contact Me
    </Link>
  </motion.div>

  {/* View CV */}
  <motion.button
    custom={2}
    variants={buttonVariants}
    initial="hidden"
    animate="visible"
    whileTap={{ scale: 0.95 }}
    onClick={() => setIsCvOpen(true)}
    className="bg-transparent border border-teal-400 text-teal-400 px-6 py-3 rounded-lg font-semibold shadow-md block text-center transition-shadow duration-300 hover:shadow-[2px_4px_6px_rgba(20,184,166,0.6)]"
  >
    📄 View CV
  </motion.button>
</div>

        </motion.div>
      </div>

      {/* CV Modal */}
      <CvModal isOpen={isCvOpen} onClose={() => setIsCvOpen(false)} />

      {/* Profile Image Modal */}
      {isImageOpen && (
        <div
          className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-start justify-center z-50 px-4 sm:px-0"
          onClick={() => setIsImageOpen(false)}
        >
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 50, scale: 0.9 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="mt-[10vh] p-4"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={dp3}
              alt="Profile Zoomed"
              className="w-full max-w-md sm:max-w-lg max-h-[70vh] rounded-xl shadow-2xl border-4 border-gray-900 object-cover"
            />
          </motion.div>
        </div>
      )}
    </section>
  );
};

export default Bio;
