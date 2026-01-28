import React from "react";
import Bio from "../components/Bio";
import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import Skills from "../components/Skills";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import SectionHeading from "../components/ui/SectionHeading";
import GradientButton from "../components/ui/GradientButton";
import TechBadge from "../components/ui/TechBadge";
import { FaCode, FaLaptopCode, FaBullhorn, FaArrowRight, FaCheckCircle, FaExternalLinkAlt } from "react-icons/fa";
import SkyPulse1 from "../assets/SkyPulse1.png";
import stp1 from "../assets/stp1.webp";
import lmss1 from "../assets/lmss1.png";
import dronelogo from "../assets/dronelogo.png";
import toda from "../assets/toda.png";

const featuredProjects = [
    {
      title: "Aviation Training LMS",
      description: "WordPress-based learning management system with complete eLearning functionality",
      image: lmss1,
      tech: ["WordPress", "Fox LMS", "PHP"],
      link: "/projects",
    },
  {
    title: "Smart Task Planner",
    description: "Full-stack MERN task management with authentication and dark mode",
    image: stp1,
    tech: ["React", "Node.js", "MongoDB"],
    link: "/projects",
  },
  {
    title: "SkyPulse Weather App",
    description: "Real-time weather app with dynamic gradients and location tracking",
    image: SkyPulse1,
    tech: ["React", "Weather API", "TailwindCSS"],
    link: "/projects",
  },
];

const services = [
    {
      icon: <FaCode className="text-3xl sm:text-4xl" />,
    title: "Full-Stack Development",
    points: ["MERN Stack Apps", "RESTful APIs", "Cloud Deployment"],
    description:
      "I build scalable, modern web applications using React.js, Node.js, and MongoDB with best practices, ensuring optimal performance, security, and user experience.",
    link: "/services",
  },
    {
      icon: <FaLaptopCode className="text-3xl sm:text-4xl" />,
    title: "Automation & AI",
    points: ["n8n Workflows", "Python Bots", "Web Scraping"],
    description:
      "I create intelligent automation solutions with n8n, Python, and AI/ML technologies to streamline business processes and increase productivity.",
    link: "/services",
  },
    {
      icon: <FaBullhorn className="text-3xl sm:text-4xl" />,
    title: "Digital Marketing",
    points: ["SEO Optimization", "Social Media", "Google Ads"],
    description:
      "I help businesses grow their online presence with data-driven SEO strategies, social media marketing, and targeted advertising campaigns.",
    link: "/services",
  },
];

const Home = () => {
  return (
    <>
      <Navbar />

      {/* Welcome Section */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="flex justify-center pt-4 pb-2 relative bg-[#0a0a0a]"
      >
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="relative px-8 py-4 rounded-xl bg-black/80 border border-gray-800 shadow-2xl"
        >
          <motion.h1
            initial={{ scale: 1, textShadow: "0px 0px 0px rgba(0,0,0,0)" }}
            animate={{ 
              scale: [1, 1.1, 1], 
              textShadow: [
                "0px 0px 0px rgba(0,0,0,0)",
                "0px 0px 15px rgba(6,182,212,0.8)",
                "0px 0px 8px rgba(6,182,212,0.5)"
              ]
            }}
            transition={{ duration: 1, ease: "easeInOut", delay: 1.6 }}
            className="text-lg md:text-2xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-teal-300 tracking-wide text-center"
          >
            Welcome to my Portfolio
          </motion.h1>

          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "100%" }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            className="absolute top-0 left-0 h-[3px] bg-gradient-to-r from-cyan-400 via-teal-400 to-cyan-400 shadow-lg shadow-cyan-400/50"
          />
          <motion.div
            initial={{ height: 0 }}
            animate={{ height: "100%" }}
            transition={{ duration: 0.8, ease: "easeInOut", delay: 0.4 }}
            className="absolute top-0 left-0 w-[3px] bg-gradient-to-b from-cyan-400 via-teal-400 to-cyan-400 shadow-lg shadow-cyan-400/50"
          />
          <motion.div
            initial={{ height: 0 }}
            animate={{ height: "100%" }}
            transition={{ duration: 0.8, ease: "easeInOut", delay: 0.6 }}
            className="absolute top-0 right-0 w-[3px] bg-gradient-to-b from-cyan-400 via-teal-400 to-cyan-400 shadow-lg shadow-cyan-400/50"
          />
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "100%" }}
            transition={{ duration: 0.8, ease: "easeInOut", delay: 1.0 }}
            className="absolute bottom-0 left-0 h-[3px] bg-gradient-to-r from-cyan-400 via-teal-400 to-cyan-400 shadow-lg shadow-cyan-400/50"
          />
        </motion.div>
      </motion.div>

      {/* Main Content */}
      <div className="relative text-white overflow-hidden">
        {/* Hero/Bio Section - Black Background */}
        <div className="bg-black">
          <Bio />
        </div>

        {/* Featured Projects Section - Dark Gray */}
        <section className="bg-[#0f0f0f] py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-12"
            >
              <SectionHeading
                title={
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-teal-400">
                    Featured Projects
                  </span>
                }
                subtitle="Explore selected work and recent client projects"
              />
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              {featuredProjects.map((project, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className="bg-gradient-to-br from-gray-900 to-black border border-gray-800 rounded-2xl overflow-hidden hover:border-cyan-500/50 transition-all group"
                >
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-white mb-2">{project.title}</h3>
                    <p className="text-gray-400 text-sm mb-4">{project.description}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tech.map((tech, i) => (
                        <TechBadge
                          key={i}
                          className="bg-cyan-500/10 text-cyan-400 border-cyan-500/20"
                        >
                          {tech}
                        </TechBadge>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <GradientButton as={Link} to="/projects" className="inline-flex items-center gap-2">
                View All Projects
                <FaArrowRight />
              </GradientButton>
            </motion.div>
          </div>
        </section>

        {/* Skills Section - Carbon Black */}
        <div className="bg-[#0a0a0a]">
          <Skills />
        </div>

        {/* Services Preview Section - Light Gray */}
        <section className="bg-[#1a1a1a] py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-12"
            >
              <SectionHeading
                title={
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-teal-400">
                    What I Offer
                  </span>
                }
                subtitle="Services designed to turn ideas into reliable products"
              />
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              {services.map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className="h-64 sm:h-72 md:h-80 flip-card-container"
                  style={{ perspective: '2000px' }}
                >
                  <div className="flip-card-inner">
                    {/* ========== FRONT FACE ========== */}
                    <div className="flip-card-front">
                      {/* Background Layer (at Z-depth 0) */}
                      <div 
                        className="absolute inset-0 w-full h-full rounded-2xl bg-[#0a0a0a] border border-cyan-500/30 shadow-lg"
                        style={{ transform: 'translateZ(0px)' }}
                      />
                      
                      {/* Content Layer (floating at Z-depth 40px) */}
                      <div 
                        className="absolute inset-0 w-full h-full flex flex-col items-center justify-center p-6"
                        style={{ transform: 'translateZ(40px)' }}
                      >
                        <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-cyan-500/10 flex items-center justify-center mb-4 text-cyan-400">
                          {service.icon}
                        </div>
                        <h3 className="text-lg sm:text-xl font-semibold text-center text-white">
                          {service.title}
                        </h3>
                      </div>
                    </div>

                    {/* ========== BACK FACE ========== */}
                    <div className="flip-card-back">
                      {/* Background Layer (at Z-depth 0) */}
                      <div 
                        className="absolute inset-0 w-full h-full rounded-2xl bg-gradient-to-br from-[#0f1419] to-[#1a252f] border border-cyan-500/40 shadow-lg"
                        style={{ transform: 'translateZ(0px)' }}
                      />
                      
                      {/* Content Layer (floating at Z-depth 40px) */}
                      <div 
                        className="absolute inset-0 w-full h-full flex flex-col items-center justify-center p-6"
                        style={{ transform: 'translateZ(40px)' }}
                      >
                        <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-cyan-500/20 flex items-center justify-center mb-4 text-cyan-400">
                          {service.icon}
                        </div>
                        <p className="text-white text-center text-sm leading-relaxed mb-3 sm:mb-4">
                          {service.description}
                        </p>
                        <ul className="space-y-1 sm:space-y-2">
                          {service.points.map((point, i) => (
                            <li key={i} className="flex items-center gap-2 text-cyan-300 text-xs">
                              <FaCheckCircle className="text-cyan-400 flex-shrink-0" />
                              <span>{point}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <GradientButton as={Link} to="/services" className="inline-flex items-center gap-2">
                Explore All Services
                <FaArrowRight />
              </GradientButton>
            </motion.div>
          </div>
        </section>

        {/* Trusted Affiliations Section - Black */}
        <section className="bg-black py-12 sm:py-16 px-4 sm:px-6 lg:px-8 border-t border-gray-900">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-12"
            >
              <SectionHeading
                title={
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-teal-400">
                    Trusted by Startups Worldwide
                  </span>
                }
              />
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {/* Alpha Tango */}
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="flex flex-col items-center"
              >
                <div className="w-28 h-28 sm:w-36 sm:h-36 md:w-40 md:h-40 mb-4 sm:mb-6 flex items-center justify-center">
                  <img 
                    src={dronelogo} 
                    alt="Alpha Tango Drone Services" 
                    className="w-full h-full object-contain"
                  />
                </div>
                <div className="bg-gradient-to-br from-gray-900 to-black border border-cyan-500/30 rounded-2xl p-4 sm:p-6 w-full text-center hover:border-cyan-500/50 transition-all">
                  <h3 className="text-lg sm:text-xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-teal-400 mb-2">
                     ALPHA TANGO
                  </h3>
                  <p className="text-gray-400 text-xs sm:text-sm mb-3 sm:mb-4">DRONE SERVICES</p>
                  <a 
                    href="https://at-drone.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 text-xs sm:text-sm transition-colors"
                  >
                    <FaExternalLinkAlt className="text-xs" />
                    Visit Website
                  </a>
                </div>
              </motion.div>

              {/* Jointoda */}
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="flex flex-col items-center"
              >
                <div className="w-28 h-28 sm:w-36 sm:h-36 md:w-40 md:h-40 mb-4 sm:mb-6 flex items-center justify-center">
                  <img 
                    src={toda} 
                    alt="Jointoda Truck Owners & Drivers" 
                    className="w-full h-full object-contain"
                  />
                </div>
                <div className="bg-gradient-to-br from-gray-900 to-black border border-cyan-500/30 rounded-2xl p-4 sm:p-6 w-full text-center hover:border-cyan-500/50 transition-all">
                  <h3 className="text-lg sm:text-xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-teal-400 mb-2">
                     JOINTODA
                  </h3>
                  <p className="text-gray-400 text-xs sm:text-sm mb-3 sm:mb-4">TRUCK OWNERS & DRIVERS</p>
                  <a 
                    href="https://jointoda.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 text-xs sm:text-sm transition-colors"
                  >
                    <FaExternalLinkAlt className="text-xs" />
                    Visit Website
                  </a>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* CTA Section - Black */}
        <section className="bg-black py-20 px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h2 className="text-3xl md:text-5xl font-semibold mb-6">
              Ready to Start Your{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-teal-400">
                Next Project?
              </span>
            </h2>
            <p className="text-gray-300 text-lg mb-8">
              Let's collaborate and turn your vision into reality. I’m available for remote work worldwide.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <GradientButton
                as={Link}
                to="/contact"
                className="px-10 py-4 text-lg"
              >
                Get in Touch
              </GradientButton>
              <Link
                to="/about"
                className="bg-gray-800 hover:bg-gray-700 text-white px-10 py-4 rounded-lg font-bold text-lg transition-all duration-300 border border-gray-700 hover:border-cyan-500/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500/60"
              >
                Learn More About Me
              </Link>
            </div>
          </motion.div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default Home;
