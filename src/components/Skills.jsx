import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaReact, FaNodeJs, FaPython, FaWordpress, FaHtml5, FaCss3Alt, FaJs, FaChartLine, FaDatabase, FaRobot } from "react-icons/fa";
import { SiTailwindcss, SiMongodb, SiExpress, SiNextdotjs, SiGoogleads, SiPostgresql, SiMysql, SiSelenium, SiJest, SiN8N, SiTensorflow } from "react-icons/si";
import { MdTrendingUp, MdAutoFixHigh } from "react-icons/md";
import { TbBrain } from "react-icons/tb";

const skillsData = [
  {
    id: "frontend",
    title: "Frontend Development",
    description: "Create stunning, responsive websites and web applications that engage users and drive conversions. My frontend development services focus on performance, usability, and modern design.",
    features: [
      { title: "Responsive Design", desc: "Websites that look and function perfectly on all devices and screen sizes." },
      { title: "Modern Frameworks", desc: "Utilizing React.js and Next.js for fast, scalable applications." },
      { title: "UI/UX Excellence", desc: "Building intuitive interfaces with seamless user experiences." },
      { title: "Performance Optimization", desc: "Lightning-fast load times and smooth interactions." },
    ],
    techStack: [
      { name: "React.js", icon: <FaReact className="text-cyan-400" />, desc: "Library for building user interfaces" },
      { name: "Next.js", icon: <SiNextdotjs className="text-white" />, desc: "React framework for production-grade applications" },
      { name: "Tailwind CSS", icon: <SiTailwindcss className="text-sky-400" />, desc: "Utility-first CSS framework for rapid UI development" },
      { name: "JavaScript", icon: <FaJs className="text-yellow-400" />, desc: "Modern ES6+ JavaScript for dynamic functionality" },
      { name: "HTML5", icon: <FaHtml5 className="text-orange-500" />, desc: "Semantic markup for accessible web pages" },
      { name: "CSS3", icon: <FaCss3Alt className="text-blue-500" />, desc: "Advanced styling and animations" },
    ],
  },
  {
    id: "backend",
    title: "Backend Development",
    description: "Build scalable server-side solutions that power modern web applications. My backend development services help you create robust APIs, databases, and server logic for seamless functionality.",
    features: [
      { title: "RESTful APIs", desc: "Well-structured APIs for seamless frontend-backend communication." },
      { title: "Database Design", desc: "Efficient database schemas optimized for performance and scalability." },
      { title: "Authentication & Security", desc: "Secure user authentication and data protection mechanisms." },
      { title: "Server Optimization", desc: "High-performance server architecture for handling large-scale traffic." },
    ],
    techStack: [
      { name: "Node.js", icon: <FaNodeJs className="text-green-500" />, desc: "JavaScript runtime for scalable backend services" },
      { name: "Express.js", icon: <SiExpress className="text-gray-300" />, desc: "Fast, minimalist web framework for Node.js" },
      { name: "MongoDB", icon: <SiMongodb className="text-green-400" />, desc: "NoSQL database for flexible data storage" },
      { name: "Python", icon: <FaPython className="text-yellow-400" />, desc: "Versatile language for backend development" },
      { name: "PostgreSQL", icon: <SiPostgresql className="text-blue-600" />, desc: "Powerful, open-source relational database" },
      { name: "MySQL", icon: <SiMysql className="text-blue-500" />, desc: "Popular relational database system" },
    ],
  },
  {
    id: "automation",
    title: "Automation & AI",
    description: "Expertise in workflow automation, intelligent process optimization, and machine learning solutions. Specialized in Python automation, n8n workflows, and deep learning models for audio processing and intelligent systems.",
    features: [
      { title: "Workflow Automation", desc: "Streamlining business processes using Python scripts and n8n workflows." },
      { title: "Audio Processing with LSTM", desc: "Research and implementation of LSTM models for audio signal processing and analysis." },
      { title: "Intelligent Bots", desc: "Creating automated solutions for repetitive tasks and data processing." },
      { title: "API Integration", desc: "Connecting multiple services and platforms for seamless automation." },
    ],
    techStack: [
      { name: "Python", icon: <FaPython className="text-yellow-400" />, desc: "Scripting and automation for complex workflows" },
      { name: "n8n", icon: <SiN8N className="text-orange-500" />, desc: "Advanced workflow automation platform" },
      { name: "LSTM Models", icon: <TbBrain className="text-purple-400" />, desc: "Deep learning for audio processing research" },
      { name: "TensorFlow", icon: <SiTensorflow className="text-orange-400" />, desc: "Machine learning framework for AI models" },
      { name: "Selenium", icon: <SiSelenium className="text-green-400" />, desc: "Browser automation and web scraping" },
    ],
  },
  {
    id: "other",
    title: "Other Skills",
    description: "Comprehensive expertise in WordPress development, digital marketing, and SEO to help businesses build optimized websites that not only look great but also rank higher and drive growth.",
    features: [
      { title: "WordPress Solutions", desc: "Custom theme development and plugin integration for powerful websites." },
      { title: "SEO Optimization", desc: "Strategic optimization to improve search rankings and organic traffic." },
      { title: "Digital Marketing", desc: "Data-driven marketing strategies to boost online presence." },
      { title: "Analytics & Tracking", desc: "Performance monitoring and insights for continuous improvement." },
    ],
    techStack: [
      { name: "WordPress", icon: <FaWordpress className="text-blue-600" />, desc: "Leading CMS for flexible website solutions" },
      { name: "Digital Marketing", icon: <MdTrendingUp className="text-amber-400" />, desc: "Strategies for growth and engagement" },
      { name: "SEO & Analytics", icon: <SiGoogleads className="text-green-500" />, desc: "Search optimization and data analysis" },
    ],
  },
];

const Skills = () => {
  const [activeTab, setActiveTab] = useState("frontend");
  const activeSkill = skillsData.find((skill) => skill.id === activeTab);

  return (
    <section className="relative z-10 py-20 px-6 sm:px-10 lg:px-20 w-full bg-[#0f0f0f]">
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-cyan-500 to-transparent"></div>
      <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-cyan-500 to-transparent"></div>

      {/* Tab Navigation */}
      <div className="flex flex-wrap justify-center gap-4 mb-16 border-b border-gray-800 pb-6">
        {skillsData.map((skill) => (
          <button
            key={skill.id}
            onClick={() => setActiveTab(skill.id)}
            className={`px-6 py-3 font-semibold text-sm sm:text-base transition-all duration-300 relative ${
              activeTab === skill.id
                ? "text-cyan-400"
                : "text-gray-400 hover:text-gray-200"
            }`}
          >
            {skill.title}
            {activeTab === skill.id && (
              <motion.div
                layoutId="activeTab"
                className="absolute bottom-[-25px] left-0 right-0 h-[3px] bg-gradient-to-r from-cyan-400 to-teal-400"
                initial={false}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
              />
            )}
          </button>
        ))}
      </div>

      {/* Content Area */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12"
        >
          {/* Left Side - Description */}
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                {activeSkill.title}
              </h2>
              <p className="text-gray-300 text-base sm:text-lg leading-relaxed">
                {activeSkill.description}
              </p>
            </div>

            {/* Features List */}
            <div className="space-y-5">
              {activeSkill.features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-start gap-3"
                >
                  <div className="mt-1 flex-shrink-0">
                    <svg
                      className="w-6 h-6 text-cyan-500"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-1">
                      {feature.title}
                    </h4>
                    <p className="text-gray-400 text-sm">{feature.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right Side - Tech Stack */}
          <div>
            <div className="rounded-2xl p-8 border border-gray-800 bg-black/40">
              <h3 className="text-2xl font-bold text-white mb-6">
                My {activeSkill.title} Tech Stack
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {activeSkill.techStack.map((tech, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.1 }}
                    className="border border-gray-800 hover:border-cyan-500/50 rounded-xl p-5 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/20 bg-black/60"
                  >
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-3xl">{tech.icon}</span>
                      <h4 className="font-bold text-white text-base">
                        {tech.name}
                      </h4>
                    </div>
                    <p className="text-gray-400 text-sm leading-relaxed">
                      {tech.desc}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
    </section>
  );
};

export default Skills;
