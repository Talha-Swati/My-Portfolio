// src/components/Footer.jsx
import React from "react";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Footer = () => {
  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative mt-10 text-white overflow-hidden font-[Poppins]">
      {/* Animated Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-teal-900 via-black to-blue-950 animate-gradient-x opacity-90"></div>

      {/* Footer Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-12 grid md:grid-cols-3 gap-8">
        
        {/* Brand / About */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-extrabold tracking-wide mb-4 bg-gradient-to-r from-amber-400 to-teal-400 text-transparent bg-clip-text">
            My Portfolio
          </h2>
          <p className="text-gray-300 text-sm leading-relaxed">
            Crafting clean, modern web experiences with React, Tailwind, and
            advanced frontend techniques.
          </p>
        </motion.div>

        {/* Quick Links */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <h3 className="text-xl font-semibold mb-4 text-amber-400">Quick Links</h3>
          <ul className="space-y-3 text-gray-300 font-medium">
            {[
              { name: "Home", to: "/" },
              { name: "About", to: "/about" },
              { name: "Projects", to: "/projects" },
              { name: "Contact", to: "/contact" },
            ].map((link, i) => (
              <li key={i}>
                <Link
                  to={link.to}
                  onClick={scrollToTop}
                  className="relative group transition duration-300"
                >
                  <span className="transition-colors duration-300 group-hover:text-amber-400">
                    {link.name}
                  </span>
                  <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-gradient-to-r from-amber-400 to-teal-400 transition-all duration-500 group-hover:w-full"></span>
                </Link>
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Socials */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h3 className="text-xl font-semibold mb-4 text-amber-400">Follow Me</h3>
          <div className="flex space-x-6">
            {[
              { icon: <FaGithub />, link: "https://github.com/Talha-Swati" },
              { icon: <FaLinkedin />, link: "https://www.linkedin.com/in/talha-riaz-swati/" },
              { icon: <FaInstagram />, link: "https://instagram.com/talha_riaz_swati" },
            ].map((social, i) => (
              <motion.a
                key={i}
                href={social.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 text-2xl hover:text-amber-400 transition"
                whileHover={{ scale: 1.3, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
              >
                {social.icon}
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Bottom Copyright */}
      <div className="relative z-10 border-t border-gray-700 text-center py-4 text-sm text-gray-400">
        © {new Date().getFullYear()} My Portfolio. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
