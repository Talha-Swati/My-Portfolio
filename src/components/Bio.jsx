import React, { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import CvModal from "./CvModal";

const Bio = () => {
  const [isCvOpen, setIsCvOpen] = useState(false);

  // 🔥 Animation variants for staggered button entry
  const buttonVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.2, duration: 0.6, ease: "easeOut" },
    }),
  };

  return (
    <section className="relative my-12 py-16 px-6 md:px-20 rounded-2xl shadow-xl overflow-hidden">
      {/* 🔥 Animated Dark Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-teal-900 via-black to-blue-950 animate-gradient opacity-90 rounded-2xl"></div>

      <div className="relative z-10 max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-10 items-center">
        {/* Profile Image */}
        <motion.div
          className="col-span-5 flex justify-center md:justify-start"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <img
            src="dp1.jpg"
            alt="Profile"
            className="w-48 h-48 md:w-72 md:h-72 rounded-full object-cover shadow-lg border-4 border-amber-400"
          />
        </motion.div>

        {/* Text Section */}
        <motion.div
          className="col-span-7 text-center md:text-left"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Hi, I'm <span className="text-amber-500">Talha Riaz</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-200 leading-relaxed mb-6">
            A passionate{" "}
            <span className="font-semibold text-amber-400">
              Frontend Developer
            </span>
            , crafting modern, responsive, and high-performance web
            applications. Skilled in{" "}
            <span className="text-amber-400">React.js</span>,{" "}
            <span className="text-amber-400">Tailwind CSS</span>, and
            user-centric design. I thrive on creating engaging digital
            experiences that blend functionality with aesthetics.
          </p>

          {/* Buttons */}
          <div className="flex flex-col md:flex-row gap-4 justify-center md:justify-start">
            {/* View My Work */}
            <motion.div
              custom={0}
              variants={buttonVariants}
              initial="hidden"
              animate="visible"
              whileHover={{
                scale: 1.08,
                boxShadow: "0px 0px 12px rgba(59, 130, 246, 0.8)",
              }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                to="/projects"
                className="bg-transparent border border-blue-500 text-blue-400 px-6 py-3 rounded-lg font-semibold shadow-md hover:bg-blue-700 hover:text-black transition-all duration-300 block text-center"
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
              whileHover={{
                scale: 1.08,
                boxShadow: "0px 0px 12px rgba(251, 191, 36, 0.8)",
              }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                to="/contact"
                className="bg-transparent border border-amber-400 text-amber-400 px-6 py-3 rounded-lg font-semibold shadow-md hover:bg-amber-500 hover:text-gray-900 transition-all duration-300 block text-center"
              >
                📩 Contact Me
              </Link>
            </motion.div>

            {/* CV Button */}
            <motion.button
              custom={2}
              variants={buttonVariants}
              initial="hidden"
              animate="visible"
              whileHover={{
                scale: 1.08,
                boxShadow: "0px 0px 12px rgba(20, 184, 166, 0.8)",
              }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsCvOpen(true)}
              className="bg-transparent border border-teal-400 text-teal-400 px-6 py-3 rounded-lg font-semibold shadow-md hover:bg-teal-700 hover:text-black transition-all duration-300 block text-center"
            >
              📄 View CV
            </motion.button>
          </div>
        </motion.div>
      </div>

      {/* CV Modal */}
      <CvModal isOpen={isCvOpen} onClose={() => setIsCvOpen(false)} />
    </section>
  );
};

export default Bio;
