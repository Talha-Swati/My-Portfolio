import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import {
  FaCode,
  FaProjectDiagram,
  FaUsers,
  FaGraduationCap,
  FaCertificate,
  FaFileAlt,
} from "react-icons/fa";
import coverImg from "../assets/dp3.png"; // <-- cover image

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
  // Modal state
  const [showModal, setShowModal] = useState(false);
  const [docUrl, setDocUrl] = useState("");

  const openModal = (url) => {
    setDocUrl(url);
    setShowModal(true);
    document.body.style.overflow = "hidden"; // lock background scroll
  };

  const closeModal = () => {
    setShowModal(false);
    setDocUrl("");
    document.body.style.overflow = "auto"; // restore scroll
  };

  const certifications = [
    {
      icon: <FaCertificate className="text-teal-400 text-2xl" />,
      text: "Introduction to Artificial Intelligence by IBM (Completed May 2024)",
      url: "https://drive.google.com/file/d/1lRjmIesUmMm4yUkTwUQdA1kwGNU7r9UM/preview",
    },
    {
      icon: <FaCertificate className="text-teal-400 text-2xl" />,
      text: "Introduction to Web Development with HTML, CSS & JavaScript by IBM (Completed Aug 2023)",
      url: "https://drive.google.com/file/d/17eblrwEsEMuHC0hC6RnYjFoKNNwxUc_Q/preview",
    },
    {
      icon: <FaCertificate className="text-cyan-400 text-2xl" />,
      text: "Freelancing by DigiSkills",
      url: "https://drive.google.com/file/d/1L5PGsoY8zC6vAQRnxTgjkA-mMNoqr6PI/preview",
    },
    {
      icon: <FaCertificate className="text-cyan-400 text-2xl" />,
      text: "Graphic Design by DigiSkills",
      url: "https://drive.google.com/file/d/1BRpuZJyBaCiRGB-_PEUacJd5zziRBbLR/preview",
    },
    {
      icon: <FaFileAlt className="text-green-400 text-2xl" />,
      text: "Internship at Codexcue Tech Sol",
      url: "https://drive.google.com/file/d/1zMQnubVIJgVIY_vdQyGFi7iVEX8ytchh/preview",
    },
    {
      icon: <FaFileAlt className="text-yellow-400 text-2xl" />,
      text: "Recommendation Letter from Codexcue Tech Sol",
      url: "https://drive.google.com/file/d/1nPoiu64Afwon8h4NFCs2YNRvH-IaQxjr/preview",
    },
  ];

  return (
    <>
      <Navbar />

 {/* --- COVER / HERO IMAGE (below navbar) --- */}
<section className="relative text-white overflow-hidden">
  {/* ↓ reduced heights */}
  <div className="relative h-[220px] sm:h-[320px] md:h-[300px]">
 <img
  src={coverImg}
  alt="About cover"
  className="absolute inset-0 w-full h-full object-cover object-[center_34%]"
/>

    {/* overlay for readability */}
    <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/60 to-black/90" />

    {/* centered heading + paragraph */}
    <div className="relative z-10 h-full max-w-6xl mx-auto px-4 flex flex-col items-center justify-center text-center gap-4">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="text-3xl sm:text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-teal-400 to-cyan-500"
      >
        About Me
      </motion.h2>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="text-sm sm:text-base md:text-lg text-gray-200 max-w-3xl"
      >
        I’m a passionate developer with expertise in building modern, scalable, and visually stunning web applications.
        My process starts with understanding the user and ends with measurable results: faster load times,
        better mobile interactions, and intuitive navigation that visitors love.
      </motion.p>
    </div>
  </div>
</section>
{/* --- END COVER --- */}



      <div className="relative min-h-screen text-white overflow-hidden bg-[#0a0a0a]">
        {/* About Content */}
        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
          <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-cyan-500 to-transparent"></div>
         

          {/* Animated Counters */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 text-center mb-16 sm:mb-20">
            {[
              { icon: <FaCode size={30} className="text-teal-400 sm:text-3xl" />, value: 500, label: "Hours of Coding" },
              { icon: <FaProjectDiagram size={30} className="text-cyan-400 sm:text-3xl" />, value: 20, label: "Projects Completed" },
              { icon: <FaUsers size={30} className="text-green-400 sm:text-3xl" />, value: 10, label: "Happy Clients" },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: index * 0.2 }}
                className="bg-black/50 backdrop-blur-lg rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-teal-500/30 transition-all flex flex-col items-center"
              >
                <div className="flex justify-center items-center mb-3 sm:mb-4">
                  {item.icon}
                </div>
                <motion.h3
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ duration: 0.6 }}
                  className="text-2xl sm:text-3xl md:text-4xl font-bold text-teal-400"
                >
                  <Counter end={item.value} />
                </motion.h3>
                <p className="text-xs sm:text-sm md:text-base text-gray-400">{item.label}</p>
              </motion.div>
            ))}
          </div>

          {/* Mission & Vision */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-10 mb-16 sm:mb-20">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-black rounded-2xl p-6 sm:p-8 shadow-lg border-2 border-gray-800 hover:border-cyan-500/50 hover:shadow-cyan-500/30 transition-all relative"
            >
              <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-cyan-500 to-transparent"></div>
              <h3 className="text-xl sm:text-2xl font-semibold text-cyan-400 mb-3">
                🚀 Mission
              </h3>
              <p className="text-sm sm:text-base text-gray-300">
                To create scalable, user-friendly web applications that not only solve problems for businesses but also meet the high
                standards companies look for in a modern frontend developer.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-black rounded-2xl p-6 sm:p-8 shadow-lg border-2 border-gray-800 hover:border-teal-500/50 hover:shadow-teal-500/30 transition-all relative"
            >
              <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-teal-500 to-transparent"></div>
              <h3 className="text-xl sm:text-2xl font-semibold text-teal-400 mb-3">
                🎯 Vision
              </h3>
              <p className="text-sm sm:text-base text-gray-300">
                To grow as a frontend developer by contributing to innovative teams, partnering with businesses, and delivering solutions that excel
                in performance, usability, and design impact.
              </p>
            </motion.div>
          </div>

          {/* Education & Certifications */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-[#171717] rounded-2xl p-6 sm:p-10 shadow-lg border-2 border-gray-800 hover:shadow-teal-500/30 transition-all relative"
          >
            <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-cyan-500 to-transparent"></div>
            <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-cyan-500 to-transparent"></div>
            <h3 className="text-2xl sm:text-3xl font-bold text-center mb-6 bg-clip-text text-transparent bg-gradient-to-r from-teal-400 to-cyan-500">
              🎓 Education & Certifications
            </h3>

            <div className="space-y-6">
              {/* Degree */}
              <div className="flex flex-col sm:flex-row items-center sm:items-center text-center sm:text-left bg-black border border-gray-800 p-4 rounded-xl shadow-md hover:shadow-cyan-500/20 hover:border-cyan-500/50 transition-all">
                <FaGraduationCap className="text-cyan-400 text-2xl mb-2 sm:mb-0 sm:mr-3" />
                <p className="text-sm sm:text-base md:text-lg text-gray-300">
                  Completed <span className="text-teal-400 font-semibold">Bachelor's of Science in Computer Science</span> from NUML University Islamabad, Pakistan.
                </p>
              </div>

              {/* Certifications */}
              {certifications.map((cert, i) => (
                <div
                  key={i}
                  className="flex flex-col sm:flex-row items-center sm:items-center text-center sm:text-left bg-black border border-gray-800 p-4 rounded-xl shadow-md hover:shadow-cyan-500/20 hover:border-cyan-500/50 transition-all"
                >
                  <div className="mb-2 sm:mb-0 sm:mr-3 flex justify-center">{cert.icon}</div>
                  <p className="text-sm sm:text-base md:text-lg text-gray-300">
                    {cert.text}
                    <button
                      onClick={() => openModal(cert.url)}
                      className="text-cyan-400 underline ml-2 hover:text-cyan-300"
                    >
                      View
                    </button>
                  </p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Modal */}
      {showModal && (
        <div
          className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4"
          onClick={closeModal}
        >
          <div
            className="bg-black rounded-2xl shadow-lg w-full max-w-4xl h-[80vh] relative"
            onClick={(e) => e.stopPropagation()} // prevent closing on iframe click
          >
            <button
              onClick={closeModal}
              className="absolute top-3 right-3 bg-gray-200 text-black px-3 py-1 rounded-full text-lg font-bold hover:bg-gray-300 transition"
            >
              ✕
            </button>
            <iframe
              src={docUrl}
              title="Certificate"
              className="w-full h-full rounded-xl"
              allow="autoplay"
            ></iframe>
          </div>
        </div>
      )}

      <Footer />
    </>
  );
};

export default About;
