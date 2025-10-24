import React from "react";
import { motion } from "framer-motion";
import { FaReact, FaNodeJs, FaPython, FaJava, FaWordpress } from "react-icons/fa";
import { SiTailwindcss, SiMongodb, SiDjango } from "react-icons/si";
import { FaExplosion } from "react-icons/fa6";

const skills = [
  { name: "React", level: 85, icon: <FaReact className="text-cyan-400" /> },
  { name: "Tailwind CSS", level: 85, icon: <SiTailwindcss className="text-sky-400" /> },
  { name: "Node.js", level: 80, icon: <FaNodeJs className="text-green-500" /> },
  { name: "MongoDB", level: 75, icon: <SiMongodb className="text-green-400" /> },
  { name: "Express.js", level: 75, icon: <span className="text-xl font-bold text-gray-300">Ex</span> },
  { name: "Digital Marketing", level: 80, icon: <span className="text-xl font-bold text-gray-300">DM</span> },

  { name: "Wordpress", level: 85, icon: <FaWordpress className="text-sky-600" /> },
  { name: "Python", level: 70, icon: <FaPython className="text-yellow-400" /> },
];

const Skills = () => {
  return (
<section className="relative z-10 bg-black/60 backdrop-blur-lg py-20 px-6 
                    mx-2 sm:mx-4 md:mx-8 lg:mx-16 xl:mx-32">
      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl font-bold text-center text-cyan-400 mb-12"
      >
        My Skills
      </motion.h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center">
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05 }}
            className="relative bg-white/7 backdrop-blur-lg 
             p-4 sm:p-6  /* 🔹 smaller padding on mobile */
             rounded-xl sm:rounded-2xl shadow-lg border border-white/20 
             w-full max-w-sm /* 🔹 wider cards for mobile */
             transition-all duration-300"
          >
            <div className="flex items-center space-x-3 sm:space-x-4 mb-3 sm:mb-4">
              <span className="text-teal-400 text-2xl sm:text-3xl">{skill.icon}</span>
              <h3 className="text-lg sm:text-xl font-semibold">{skill.name}</h3>
            </div>

            <div className="w-full bg-gray-400/70 rounded-full h-2 sm:h-3">
              <motion.div
                className="bg-gradient-to-r from-teal-400 to-cyan-500 h-2 sm:h-3 rounded-full"
                initial={{ width: 0 }}
                whileInView={{ width: `${skill.level}%` }}
                transition={{ duration: 1.2, ease: "easeOut" }}
              />
            </div>

            <p className="text-gray-300 text-xs sm:text-sm mt-1 sm:mt-2">
              {skill.level}%
            </p>
          </motion.div>

        ))}
      </div>
    </section>
  );
};

export default Skills;
