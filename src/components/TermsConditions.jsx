import React from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import {
  FaArrowLeft,
  FaUserShield,
  FaInfoCircle,
  FaCookieBite,
  FaLock,
  FaGavel,
  FaEdit,
} from "react-icons/fa";
import { motion } from "framer-motion";

const termsSections = [
  {
    title: "Acceptance of Terms",
    icon: <FaGavel className="text-teal-400 text-2xl sm:text-3xl" />,
    content:
      "By accessing or using Digital Playground Portfolio, you agree to comply with these Terms & Conditions. If you disagree, please refrain from using my services.",
  },
  {
    title: "Use of Services",
    icon: <FaUserShield className="text-cyan-400 text-2xl sm:text-3xl" />,
    content:
      "You may use my services only for lawful purposes. You are responsible for ensuring your actions comply with all applicable laws and these terms.",
  },
  {
    title: "Intellectual Property",
    icon: <FaLock className="text-indigo-400 text-2xl sm:text-3xl" />,
    content:
      "All content, designs, and materials on this website are owned by me or my licensors. Reproduction or distribution without permission is prohibited.",
  },
  {
    title: "User Content",
    icon: <FaEdit className="text-purple-400 text-2xl sm:text-3xl" />,
    content:
      "Any content you submit (e.g., comments, feedback) grants me a non-exclusive, royalty-free license to use, modify, and display it responsibly.",
  },
  {
    title: "Limitation of Liability",
    icon: <FaInfoCircle className="text-yellow-400 text-2xl sm:text-3xl" />,
    content:
      "Digital Playground is not liable for damages arising from your use of my services, including indirect or consequential losses.",
  },
  {
    title: "Changes to Terms",
    icon: <FaCookieBite className="text-red-400 text-2xl sm:text-3xl" />,
    content:
      "I may update these Terms & Conditions periodically. Continued use of my services after updates constitutes acceptance of the revised terms.",
  },
];

const TermsConditions = () => {
  const navigate = useNavigate();

  const handleBack = () => {
    if (window.history.length > 1) navigate(-1);
    else navigate("/");
  };

  return (
    <div className="min-h-screen flex flex-col font-sans bg-transparent text-gray-100 transition-colors duration-500">
      <Navbar />

      <main className="flex-1 max-w-6xl mx-auto px-6 py-8 sm:py-12">
        {/* Header Row */}
        <div className="flex flex-col sm:flex-row items-center justify-between mb-8 gap-4 sm:gap-0">
          <button
            onClick={handleBack}
            className="relative flex items-center px-5 py-3 rounded-lg cursor-pointer bg-black text-gray-400 group hover:bg-gray-800 transition-all duration-300 w-fit"
          >
            <FaArrowLeft className="relative text-gray-400 text-lg sm:text-xl transition-all duration-300 group-hover:left-1/2 group-hover:-translate-x-1/2" />
            <span className="ml-2 transition-opacity duration-300 group-hover:opacity-0">Back</span>
          </button>

          <motion.h1
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-3xl sm:text-5xl font-semibold text-center bg-clip-text text-transparent bg-gradient-to-r from-teal-400 to-cyan-500 leading-tight flex-1"
          >
            Terms & Conditions
          </motion.h1>

          <div className="w-fit" />
        </div>

        <p className="mb-12 text-center text-gray-300 max-w-3xl mx-auto text-sm sm:text-base leading-relaxed">
          These Terms & Conditions govern your use of the Digital Playground Portfolio. Please read carefully to understand your rights and responsibilities while using my website and services.
        </p>

        {/* Terms Sections */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {termsSections.map((section, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="bg-black rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-cyan-500/30 transition-all flex flex-col gap-4"
            >
              <div className="flex items-center gap-3">
                {section.icon}
                <h2 className="text-xl sm:text-2xl font-semibold text-teal-400">{section.title}</h2>
              </div>
              <p className="text-gray-300 text-sm sm:text-base leading-relaxed">{section.content}</p>
            </motion.div>
          ))}
        </div>

        <p className="text-gray-200 mt-16 text-sm text-center">
          © {new Date().getFullYear()} Digital Playground. All rights reserved.
        </p>
      </main>

      <Footer />
    </div>
  );
};

export default TermsConditions;
