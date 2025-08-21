import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { FaCode, FaProjectDiagram, FaUsers } from "react-icons/fa";

// Counter Component
const Counter = ({ end }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const duration = 2000; // 2s
    const increment = end / (duration / 16);

    const counter = setInterval(() => {
      start += increment;
      if (start >= end) {
        start = end;
        clearInterval(counter);
      }
      setCount(Math.floor(start));
    }, 16);

    return () => clearInterval(counter);
  }, [end]);

  return <>{count}+</>;
};

const About = () => {
  return (
    <>
      <Navbar />
      <div className="relative min-h-screen text-white overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900 via-black to-gray-950 animate-gradient-x opacity-90"></div>

        {/* About Content */}
        <div className="relative z-10 max-w-6xl mx-auto px-6 py-20">
          {/* Section Heading */}
          <motion.h2
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-5xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-teal-400 to-cyan-500"
          >
            About Me
          </motion.h2>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="text-lg text-gray-300 text-center max-w-3xl mx-auto mb-16"
          >
            I’m a passionate developer with expertise in building modern, scalable, and visually stunning web applications. 
            My focus is on creating smooth user experiences with clean and efficient code.
          </motion.p>

          {/* Animated Counters */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center mb-20">
            {[
              { icon: <FaCode size={40} className="text-teal-400" />, value: 500, label: "Hours of Coding" },
              { icon: <FaProjectDiagram size={40} className="text-cyan-400" />, value: 20, label: "Projects Completed" },
              { icon: <FaUsers size={40} className="text-green-400" />, value: 10, label: "Happy Clients" },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: index * 0.2 }}
                className="bg-black/50 backdrop-blur-lg rounded-2xl p-8 shadow-lg hover:shadow-teal-500/30 transition-all"
              >
                <div className="flex justify-center mb-4">{item.icon}</div>
                <motion.h3
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ duration: 0.6 }}
                  className="text-4xl font-bold text-teal-400"
                >
                  <Counter end={item.value} />
                </motion.h3>
                <p className="text-gray-400">{item.label}</p>
              </motion.div>
            ))}
          </div>

          {/* Feature Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-black/60 backdrop-blur-lg rounded-2xl p-8 shadow-lg hover:shadow-cyan-500/30 transition-all"
            >
              <h3 className="text-2xl font-semibold text-cyan-400 mb-4">
                🚀 Mission
              </h3>
              <p className="text-gray-300">
                To craft digital solutions that empower businesses and individuals by blending technology and creativity.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-black/60 backdrop-blur-lg rounded-2xl p-8 shadow-lg hover:shadow-teal-500/30 transition-all"
            >
              <h3 className="text-2xl font-semibold text-teal-400 mb-4">
                🎯 Vision
              </h3>
              <p className="text-gray-300">
                To become a leading developer who delivers innovative solutions with impactful user experiences.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default About;
