import React from "react";
import { motion } from "framer-motion";
import { FaReact, FaNodeJs, FaPython, FaJava, FaWordpress } from "react-icons/fa";
import { SiTailwindcss, SiMongodb, SiDjango } from "react-icons/si";

const skills = [
  { name: "React", level: 90, icon: <FaReact className="text-cyan-400" /> },
  { name: "Tailwind CSS", level: 85, icon: <SiTailwindcss className="text-sky-400" /> },
  { name: "Node.js", level: 80, icon: <FaNodeJs className="text-green-500" /> },
  { name: "MongoDB", level: 75, icon: <SiMongodb className="text-green-400" /> },
    { name: "Wordpress", level: 85, icon: <FaWordpress className="text-sky-600" /> },

  { name: "Python", level: 70, icon: <FaPython className="text-yellow-400" /> },
  { name: "Java", level: 65, icon: <FaJava className="text-red-400" /> }
];

const Skills = () => {
  return (
    <section className="relative z-10 bg-black/60 backdrop-blur-lg py-20 px-6">
      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl font-bold text-center text-orange-400 mb-12"
      >
        My Skills
      </motion.h2>

     <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
  {skills.map((skill, index) => (
    <motion.div
  key={index}
  whileHover={{ scale: 1.05 }}
  className="relative bg-white/10 backdrop-blur-lg p-8 rounded-2xl shadow-lg border border-white/20 w-80 transition-all duration-300"
>
  <div className="flex items-center space-x-4 mb-4">
    <span className="text-teal-400 text-3xl">{skill.icon}</span>
    <h3 className="text-xl font-semibold">{skill.name}</h3>
  </div>
  <div className="w-full bg-gray-800/70 rounded-full h-3">
    <motion.div
      className="bg-gradient-to-r from-teal-400 to-cyan-500 h-3 rounded-full"
      initial={{ width: 0 }}
      whileInView={{ width: `${skill.level}%` }}
      transition={{ duration: 1.2, ease: "easeOut" }}
    />
  </div>
  <p className="text-gray-300 text-sm mt-2">{skill.level}%</p>
</motion.div>

  ))}
</div>

    </section>
  );
};

export default Skills;
