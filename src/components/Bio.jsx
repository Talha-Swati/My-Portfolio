import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { SiReact, SiNodedotjs, SiMongodb, SiPython, SiTailwindcss, SiWordpress } from "react-icons/si";
import profileImage from "../assets/dp2.jpg";
import GradientButton from "./ui/GradientButton";

const buttonVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.6, ease: "easeOut" },
  }),
};

const techStack = [
  { icon: <SiReact />, name: "React.js", color: "text-cyan-400" },
  { icon: <SiNodedotjs />, name: "Node.js", color: "text-green-400" },
  { icon: <SiMongodb />, name: "MongoDB", color: "text-green-500" },
  { icon: <SiPython />, name: "Python", color: "text-yellow-400" },
  { icon: <SiTailwindcss />, name: "Tailwind", color: "text-cyan-300" },
  { icon: <SiWordpress />, name: "WordPress", color: "text-blue-400" },
];

const Bio = () => {

  return (
    <section className="relative py-10 sm:py-16 px-4 sm:px-10 md:px-20 shadow-2xl overflow-hidden w-full bg-[#0a0a0a]">
      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Main Hero Content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left Side - Profile Card */}
          <motion.div
            className="lg:col-span-4"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="bg-gradient-to-br from-gray-900 to-black border border-gray-800 rounded-2xl p-6 shadow-xl">
              {/* Profile Avatar */}
              <div className="w-32 h-32 mx-auto mb-4 rounded-full bg-gradient-to-br from-cyan-500 to-teal-500 p-1">
                <img 
                  src={profileImage} 
                  alt="Talha Riaz" 
                  className="w-full h-full rounded-full object-cover"
                />
              </div>
              
              <h3 className="text-2xl font-semibold text-center text-white mb-2">
                Talha Riaz
              </h3>
              <p className="text-cyan-400 text-center mb-4 font-medium">
                Full-Stack Developer
              </p>
              
              {/* Quick Info */}
              <div className="space-y-2 text-sm text-gray-300">
                <div className="flex items-center gap-2">
                  <span className="text-cyan-400">📍</span>
                  <span>Pakistan</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-cyan-400">🎓</span>
                  <span>BS Computer Science</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-cyan-400">💼</span>
                  <span>Open to Opportunities</span>
                </div>
              </div>
              
              {/* Social Links */}
              <div className="flex gap-3 mt-6 justify-center">
                <a
                  href="https://www.linkedin.com/in/talha-riaz-swati/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-blue-600/20 border border-blue-500/50 flex items-center justify-center hover:bg-blue-600/40 transition-all"
                >
                  <span className="text-blue-400">in</span>
                </a>
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-gray-600/20 border border-gray-500/50 flex items-center justify-center hover:bg-gray-600/40 transition-all"
                >
                  <span className="text-gray-400">gh</span>
                </a>
              </div>
            </div>
          </motion.div>

          {/* Right Side - Main Content */}
          <motion.div
            className="lg:col-span-8"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-white mb-4">
              Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-teal-300">Talha Riaz</span>
            </h2>
            
            <p className="text-base sm:text-lg text-gray-300 leading-relaxed mb-6">
              I’m a{" "}
              <span className="font-semibold text-cyan-400">Full-Stack Developer</span>
              {" "}focused on modern, scalable, and high-performance web applications. With expertise in{" "}
              <span className="text-cyan-400">React.js</span>,{" "}
              <span className="text-cyan-400">Node.js</span>, and{" "}
              <span className="text-cyan-400">MongoDB</span>, I build user-centered products that pair clean code with great UX.
            </p>

            <p className="text-base sm:text-lg text-gray-300 leading-relaxed mb-6">
              I currently work with{" "}
              <span className="text-cyan-400">US-based projects</span>, including a logistics platform for{" "}
              <a href="https://jointoda.com" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:text-cyan-300 underline">
                Truck Owners and Drivers Association (jointoda.com)
              </a>
              {" "}and working with{" "}
              <a href="https://at-drone.com" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:text-cyan-300 underline">
                at-drone.com
              </a>
              . I’m actively seeking{" "}
              <span className="font-semibold text-amber-400">remote opportunities</span>
              {" "}for IT solutions, automation, and full-stack development projects.
            </p>

            <p className="text-base sm:text-lg text-gray-300 leading-relaxed mb-8">
              I also bring strong experience in{" "}
              <span className="text-amber-400">Digital Marketing</span>,{" "}
              <span className="text-amber-400">SEO</span>, and{" "}
              <span className="text-amber-400">WordPress Development</span>, helping businesses build a strong online presence with optimized, conversion-focused websites.
            </p>

            {/* Tech Stack Icons */}
            <div className="mb-8">
              <h4 className="text-sm font-semibold text-gray-400 mb-4 uppercase tracking-wider">Tech Stack & Expertise</h4>
              <div className="flex flex-wrap gap-4">
                {techStack.map((tech, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                    className="flex items-center gap-2 bg-gradient-to-br from-gray-900 to-black border border-gray-800 rounded-lg px-4 py-2 hover:border-cyan-500/50 transition-all group"
                  >
                    <div className={`text-2xl ${tech.color} group-hover:scale-125 transition-transform`}>
                      {tech.icon}
                    </div>
                    <span className="text-sm text-gray-300 font-medium">{tech.name}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <motion.div
                custom={0}
                variants={buttonVariants}
                initial="hidden"
                animate="visible"
                whileTap={{ scale: 0.95 }}
              >
                <GradientButton
                  as={Link}
                  to="/projects"
                  className="border border-cyan-400/30 block text-center"
                >
                  View My Work
                </GradientButton>
              </motion.div>

              <motion.div
                custom={1}
                variants={buttonVariants}
                initial="hidden"
                animate="visible"
                whileTap={{ scale: 0.95 }}
              >
                <GradientButton
                  as={Link}
                  to="/contact"
                  className="border border-cyan-400/30 block text-center"
                >
                  📩 Get in Touch
                </GradientButton>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Bio;
