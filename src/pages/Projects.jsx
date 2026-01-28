import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import hqsr1 from "../assets/hqsr1.webp";
import hqsr2 from "../assets/hqsr2.webp";
import hqsrmain from "../assets/hqsrmain.webp";
import stp1 from "../assets/stp1.webp";
import stp2 from "../assets/stp2.webp";  
import stp3 from "../assets/stp3.webp";  
import SkyPulse1 from "../assets/SkyPulse1.png";
import SkyPulse2 from "../assets/SkyPulse2.png";
import SkyPulse3 from "../assets/SkyPulse3.png";
import at1 from "../assets/at1.png";
import at2 from "../assets/at2.png";
import at3 from "../assets/at3.png";
import lmss1 from "../assets/lmss1.png";
import lmss2 from "../assets/lmss2.png";
import lmss3 from "../assets/lmss3.png";
import coverImg from "../assets/projects.jpg";
import SectionHeading from "../components/ui/SectionHeading";
import TechBadge from "../components/ui/TechBadge";


const projectData = {
  "Full-Stack": [
    {
      title: "Alpha Tango Drone Services",
      description:
        "A corporate website for Alpha Tango Drone Services showcasing aviation certifications, training, and service offerings with clear navigation and strong calls to action.",
      tech: ["WordPress", "Elementor", "Custom Styling"],
      live: "https://at-drone.com/",
      images: [at1, at2, at3],
      category: "Business Website",
    },
    {
      title: "Aviation Training LMS",
      description:
        "Aviation Training is a WordPress-based learning management system built using the Astra theme and powered by the Fox LMS plugin. It offers modern navigation, a fast and responsive design, and complete eLearning functionality including course creation, quizzes, student dashboards, and progress tracking.",
      tech: ["WordPress", "Astra Theme", "Fox LMS", "PHP", "MySQL"],
      live: "https://aviation.at-drone.com/",
      images: [lmss1, lmss2, lmss3],
      category: "Web Application",
    },
    {
      title: "Smart Task Planner",
      description:
        "A full-stack task management system with authentication, priority handling, task categories, and dark/light mode support. Built with MERN stack providing seamless user experience and efficient task organization.",
      tech: ["React.js", "Node.js", "Express.js", "MongoDB", "TailwindCSS"],
      video: "https://drive.google.com/file/d/1Aeg4aylhvSncey5XuIIA-7MPKxisDQ6r/preview",
      images: [stp1, stp2, stp3],
      category: "MERN Application",
    },
    {
      title: "SkyPulse",
      description:
        "SkyPulse is a modern weather forecasting web app with real-time API integration, 'Use My Location' feature, hourly charts, 5-day forecast cards, and unit toggle. The background dynamically adapts gradient colors based on live weather conditions for both functionality and aesthetic appeal.",
      tech: ["React.js", "Node.js", "Weather API", "TailwindCSS"],
      live: "https://sky-pulse-five.vercel.app/",
      images: [SkyPulse1, SkyPulse2, SkyPulse3],
      category: "Web Application",
    },
  ],
  "AI & ML": [
    {
      title: "HQSR - Holy Quran Speech Recognition",
      description:
        "Deep Learning based project using LSTM model for Quran recitation recognition. Achieved an F1 score of 97.6% using custom dataset, preprocessing, augmentation, and librosa features. Demonstrates advanced machine learning techniques for audio processing.",
      tech: ["Python", "Librosa", "LSTM", "TensorFlow", "Custom Dataset"],
      video: "https://drive.google.com/file/d/1P-6rImzL2Nk3D9RVogXpboHotFmSBwHr/preview",
      images: [hqsr1, hqsr2, hqsrmain],
      category: "Machine Learning",
    },
  ],
};

// Combine all projects for "All Projects" tab
projectData["All Projects"] = [...projectData["Full-Stack"], ...projectData["AI & ML"]];

const Projects = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [activeTab, setActiveTab] = useState("All Projects");

  useEffect(() => {
    const onKeyDown = (event) => {
      if (event.key === "Escape") {
        setSelectedImage(null);
        setSelectedVideo(null);
      }
    };
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, []);

  const tabs = ["All Projects", "Full-Stack", "AI & ML"];
  const currentProjects = projectData[activeTab] || [];

  return (
    <div className="relative min-h-screen text-white overflow-hidden bg-[#0a0a0a]">
      <Navbar />
      
      {/* Cover / Hero Image */}
      <section className="relative text-white overflow-hidden">
        <div className="relative h-[220px] sm:h-[320px] md:h-[300px]">
          <img
            src={coverImg}
            alt="Projects cover"
            className="absolute inset-0 w-full h-full object-cover object-[center_34%]"
            loading="eager"
            decoding="async"
            fetchpriority="high"
          />
          
          <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/60 to-black/90" />
      
          <div className="relative z-10 h-full max-w-6xl mx-auto px-4 flex flex-col items-center justify-center text-center gap-4">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
            >
              <SectionHeading
                title={
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-cyan-500">
                    My Projects
                  </span>
                }
                subtitle={
                  "A curated selection of projects that blend design, functionality, and clean code into real-world results."
                }
                titleClassName="text-3xl sm:text-4xl md:text-5xl"
                subtitleClassName="text-gray-300 text-sm sm:text-base md:text-lg max-w-3xl mx-auto"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Tabs Navigation */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12">
        <div className="flex flex-wrap gap-3 justify-center mb-8">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-6 py-3 rounded-lg font-semibold text-sm sm:text-base transition-all duration-300 ${
                activeTab === tab
                  ? "bg-gradient-to-r from-cyan-500 to-teal-500 text-white shadow-lg shadow-cyan-500/50"
                  : "bg-gray-800 text-gray-300 hover:bg-gray-700 border border-gray-700"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      {/* Projects Section */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12 sm:pb-16">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="space-y-12 sm:space-y-16"
          >
            {currentProjects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="bg-black rounded-2xl p-6 sm:p-8 shadow-lg border-2 border-gray-800 hover:border-cyan-500/50 hover:shadow-cyan-500/30 transition-all relative"
              >
                <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-cyan-500 to-transparent"></div>
                
                {/* Category Badge */}
                <div className="absolute top-6 right-6 sm:top-8 sm:right-8">
                  <span className="px-3 py-1 text-xs rounded-full bg-cyan-500/10 text-cyan-400 border border-cyan-500/30">
                    {project.category}
                  </span>
                </div>

                <div
                  className={`flex flex-col lg:flex-row items-center gap-6 sm:gap-8 ${
                    index % 2 === 1 ? "lg:flex-row-reverse" : ""
                  }`}
                >
                  {/* Project Images */}
                  <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 w-full">
                    {project.images.map((img, i) => (
                      <motion.div
                        key={i}
                        className="relative h-40 sm:h-48 bg-gray-800 rounded-xl overflow-hidden shadow-md group cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500/60"
                        onClick={() => setSelectedImage(img)}
                        onKeyDown={(event) => {
                          if (event.key === "Enter" || event.key === " ") {
                            event.preventDefault();
                            setSelectedImage(img);
                          }
                        }}
                        role="button"
                        tabIndex={0}
                        aria-label={`Open ${project.title} preview ${i + 1}`}
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.3 }}
                      >
                        <motion.img
                          src={img}
                          alt={`${project.title} preview ${i + 1}`}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                          loading="lazy"
                          decoding="async"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end justify-center pb-4">
                          <span className="text-white text-sm font-semibold">Click to expand</span>
                        </div>
                      </motion.div>
                    ))}
                  </div>

                  {/* Project Content */}
                  <div className="flex-1 w-full">
                    <h3 className="text-2xl sm:text-3xl font-semibold text-white mb-3 sm:mb-4">
                      {project.title}
                    </h3>
                    <p className="text-sm sm:text-base md:text-lg text-gray-300 mb-4 sm:mb-6 leading-relaxed">
                      {project.description}
                    </p>

                    {/* Tech Stack */}
                    <div className="flex flex-wrap gap-2 mb-4 sm:mb-6">
                      {project.tech.map((tech, i) => (
                        <TechBadge
                          key={i}
                          className="bg-amber-500/10 text-amber-400 border-amber-500/20"
                        >
                          {tech}
                        </TechBadge>
                      ))}
                    </div>

                    {/* Action Buttons */}
                    <div className="flex flex-wrap gap-3">
                      {project.video && (
                        <button
                          onClick={() => setSelectedVideo(project.video)}
                          className="flex items-center gap-2 bg-gradient-to-r from-cyan-600 to-teal-600 hover:from-cyan-500 hover:to-teal-500 px-5 py-2.5 rounded-lg text-xs sm:text-sm font-semibold transition-all shadow-lg hover:shadow-cyan-500/50"
                        >
                          🎥 Watch Demo
                        </button>
                      )}
                      {project.live && (
                        <a
                          href={project.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-500 hover:to-orange-500 px-5 py-2.5 rounded-lg text-xs sm:text-sm font-semibold transition-all shadow-lg hover:shadow-amber-500/50"
                        >
                          🔗 View Live
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Image Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50 px-4 sm:px-6"
          onClick={() => setSelectedImage(null)}
        >
          <motion.img
            src={selectedImage}
            alt="Full preview"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.3 }}
            className="w-full max-w-6xl max-h-[85vh] rounded-lg shadow-2xl object-contain"
            decoding="async"
          />
        </div>
      )}

      {/* Video Modal */}
      {selectedVideo && (
        <div
          className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50 px-4 sm:px-6"
          onClick={() => setSelectedVideo(null)}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.3 }}
            className="w-full sm:w-[90%] max-w-4xl aspect-video bg-black rounded-lg overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <iframe
              src={selectedVideo}
              title="Demo Video"
              className="w-full h-full"
              allow="autoplay; fullscreen"
            />
          </motion.div>
        </div>
      )}

      <Footer />
    </div>
  );
};

export default Projects;
