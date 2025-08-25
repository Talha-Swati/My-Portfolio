import React from "react";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative mt-10 text-white overflow-hidden font-[Poppins] w-full">
      <div className="absolute inset-0 bg-black opacity-90 border border-white/10"></div>

      <div className="relative z-10 w-full px-6 sm:px-10 lg:px-20 py-10 flex flex-col sm:flex-row gap-6 sm:gap-10 text-center sm:text-left">
        {/* Brand / About */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex-1"
        >
          <h2 className="text-2xl sm:text-3xl font-extrabold tracking-wide mb-4 
            bg-gradient-to-r from-cyan-500 to-teal-300 text-transparent bg-clip-text text-center sm:text-left">
            My Portfolio
          </h2>
          <p className="text-gray-300 text-sm sm:text-base leading-relaxed max-w-md mx-auto sm:mx-0">
            Delivering <span className="text-teal-400 font-semibold">Web Development</span>,
            <span className="text-teal-400 font-semibold"> WordPress Solutions</span>, and
            <span className="text-teal-400 font-semibold"> SEO/Digital Marketing</span> services tailored to grow your brand online.
          </p>
        </motion.div>

        {/* Quick Links */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="flex-1 flex flex-col items-center sm:items-center mt-6 sm:mt-0"
        >
          <h2 className="text-xl sm:text-2xl font-extrabold tracking-wide mb-2 sm:mb-4 
            bg-gradient-to-r from-cyan-500 to-teal-300 text-transparent bg-clip-text text-center">
            Quick Links
          </h2>
          <ul className="grid grid-cols-2 gap-x-4 gap-y-2 text-gray-200 font-medium text-center text-sm sm:text-base">
            {[
              { name: "Home", to: "/" },
              { name: "About", to: "/about" },
              { name: "Projects", to: "/projects" },
              { name: "Services", to: "/services" },
              { name: "Contact", to: "/contact" },
            ].map((link, i) => (
              <li key={i}>
                <Link
                  to={link.to}
                  onClick={scrollToTop}
                  className="relative group transition duration-300"
                >
                  <span className="transition-colors duration-300 text-white/90 group-hover:text-cyan-400">
                    {link.name}
                  </span>
                  <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-gradient-to-r from-cyan-400 to-teal-400 transition-all duration-500 group-hover:w-full"></span>
                </Link>
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Follow Me */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex-1 flex flex-col items-center sm:items-end mt-6 sm:mt-0"
        >
          <h3 className="text-xl sm:text-2xl font-extrabold tracking-wide mb-2 sm:mb-4 
            bg-gradient-to-r from-cyan-500 to-teal-300 text-transparent bg-clip-text text-center sm:text-right">
            Follow Me
          </h3>
          <div className="flex space-x-4 sm:space-x-6 py-2 sm:py-5">
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
                className="text-gray-100 text-xl sm:text-2xl hover:text-cyan-400 transition"
                whileHover={{ scale: 1.2, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
              >
                {social.icon}
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Bottom Copyright */}
      <div className="relative z-10 border-t border-gray-600 text-center py-2 sm:py-4 text-xs sm:text-sm text-gray-300 w-full">
        © {new Date().getFullYear()} My Portfolio. All rights reserved. |{" "}
        <Link to="/privacy-policy" className="text-gray-300 hover:underline" onClick={scrollToTop}>
          Privacy Policy
        </Link>{" "}
        |{" "}
        <Link to="/terms-conditions" className="text-gray-300 hover:underline" onClick={scrollToTop}>
          Terms & Conditions
        </Link>
      </div>
    </footer>
  );
};

export default Footer;