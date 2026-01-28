import React from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { FaArrowLeft, FaUserShield, FaInfoCircle, FaCookieBite, FaLock, FaGavel, FaEdit } from "react-icons/fa";
import { motion } from "framer-motion";

const policySections = [
  {
    title: "Information Collection",
    icon: <FaInfoCircle className="text-teal-400 text-2xl sm:text-3xl" />,
    content:
      "I may collect details like your name, email, and browsing behavior when you interact with forms, contact sections, or subscribe to newsletters. This helps me improve your experience.",
  },
  {
    title: "Use of Information",
    icon: <FaUserShield className="text-cyan-400 text-2xl sm:text-3xl" />,
    content:
      "Collected information is used to respond to inquiries, send updates, and improve website functionality. I never sell or share your personal data without your consent.",
  },
  {
    title: "Cookies & Tracking",
    icon: <FaCookieBite className="text-yellow-400 text-2xl sm:text-3xl" />,
    content:
      "I use cookies and similar technologies to understand visitor behavior, enhance performance, and deliver a personalized experience. Disabling cookies may limit some features.",
  },
  {
    title: "Data Security",
    icon: <FaLock className="text-indigo-400 text-2xl sm:text-3xl" />,
    content:
      "I implement reasonable measures to protect your data from unauthorized access. However, no internet transmission can be guaranteed completely secure.",
  },
  {
    title: "Your Rights",
    icon: <FaEdit className="text-purple-400 text-2xl sm:text-3xl" />,
    content:
      "You can access, modify, or request deletion of your personal data. Contact me via the form on this website to exercise these rights.",
  },
  {
    title: "Changes to Privacy Policy",
    icon: <FaGavel className="text-red-400 text-2xl sm:text-3xl" />,
    content:
      "I may update this Privacy Policy periodically. Changes will be reflected here, so please check this page regularly.",
  },
];

const PrivacyPolicy = () => {
  const navigate = useNavigate();

  // Back button: go back if history exists, otherwise go to home
  const handleBack = () => {
    if (window.history.length > 1) navigate(-1);
    else navigate("/");
  };

  return (
    <div className="min-h-screen flex flex-col font-sans bg-transparent text-gray-100 transition-colors duration-500">
      <Navbar />

      <main className="flex-1 max-w-6xl mx-auto px-6 py-4 sm:py-6">
        {/* Header Row: Back Button and Privacy Policy Heading */}
        <div className="flex items-center justify-between mb-8">
          {/* Back Button */}
          <button
            onClick={handleBack}
            className="relative flex items-center px-6 py-3 rounded-lg overflow-hidden cursor-pointer bg-black text-gray-400 group hover:bg-gray-800 transition-all duration-300 w-fit"
          >
            <FaArrowLeft className="relative text-gray-400 text-lg sm:text-xl transition-all duration-300 group-hover:left-1/2 group-hover:-translate-x-1/2" />
            <span className="ml-2 transition-opacity duration-300 group-hover:opacity-0">Back</span>
          </button>

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-4xl sm:text-5xl font-semibold text-center bg-clip-text text-transparent bg-gradient-to-r from-teal-400 to-cyan-500 leading-tight flex-1"
          >
            Privacy Policy
          </motion.h1>
          {/* Empty div to balance flex layout */}
          <div className="w-fit px-6 py-3" />
        </div>

        <p className="mb-12 text-center text-gray-300 max-w-3xl mx-auto text-sm sm:text-base leading-relaxed">
          Your privacy is important to me. This Privacy Policy explains how I collect, use, and protect your personal information when you interact with Digital Playground Portfolio.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {policySections.map((section, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="bg-black rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-cyan-500/30 transition-all flex flex-col gap-4"
            >
              <div className="flex items-center mb-2 gap-3">
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

export default PrivacyPolicy;