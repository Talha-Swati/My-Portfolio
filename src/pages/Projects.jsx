import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaGithub, FaVideo } from "react-icons/fa";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import hqsr1 from "../assets/hqsr1.jpeg";
import hqsr2 from "../assets/hqsr2.jpeg";
import hqsrmain from "../assets/hqsrmain.jpeg";

const projects = [
  {
    title: "Smart Task Planner",
    description:
      "A full-stack task management system with authentication, priority handling, task categories, and dark/light mode support.",
    tech: ["React.js", "Node.js", "Express.js", "MongoDB", "TailwindCSS"],
    github: "https://github.com/Talha-Swati/Smart-Task-Planner.git",
    video: "https://drive.google.com/file/d/1Aeg4aylhvSncey5XuIIA-7MPKxisDQ6r/preview",
    images: ["/stp1.png", "/stp2.png", "/stp3.png"],
  },
  {
    title: "HQSR - Holy Quran Speech Recognition",
    description:
      "Deep Learning based project using LSTM model for Quran recitation recognition. Achieved an F1 score of 97.6% using custom dataset, preprocessing, augmentation, and librosa features.",
    tech: ["Python", "Librosa", "LSTM", "TensorFlow", "Custom Dataset"],
    github: "https://github.com/Talha-Swati/HQSR.git",
    video: "https://drive.google.com/file/d/1P-6rImzL2Nk3D9RVogXpboHotFmSBwHr/preview",
    images: [hqsr1, hqsr2, hqsrmain],
  },
  {
    title: "SkyPulse",
    description:
      "A weather forecasting web app with real-time API integration, clean UI, and dynamic weather updates.",
    tech: ["React.js", "Node.js", "Weather API", "TailwindCSS"],
    github: "https://github.com/yourusername/skypulsehttps://github.com/Talha-Swati/SkyPulse.git",
    video: "https://drive.google.com/your-skypulse-demo-video",
    images: ["/sky1.png", "/sky2.png", "/sky3.png"],
  },
];

const Projects = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedVideo, setSelectedVideo] = useState(null);

  return (
    <div className="relative min-h-screen text-white overflow-hidden">
      <Navbar />

      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-gray-900 via-black to-gray-950 animate-gradient-x opacity-90"></div>

      {/* Projects Section */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20">
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-5xl font-bold text-center mb-16 bg-clip-text text-transparent bg-gradient-to-r from-amber-400 to-pink-500"
        >
          🚀 My Projects
        </motion.h2>

        <div className="space-y-20">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className={`flex flex-col lg:flex-row items-center gap-10 ${
                index % 2 === 1 ? "lg:flex-row-reverse" : ""
              }`}
            >
              {/* Project Images */}
              <div className="flex-1 grid grid-cols-3 gap-4">
                {project.images.map((img, i) => (
                  <motion.div
                    key={i}
                    className="relative h-40 bg-gray-800 rounded-xl overflow-hidden shadow-lg group cursor-pointer"
                    onClick={() => setSelectedImage(img)}
                  >
                    <motion.img
                      src={img}
                      alt={`${project.title} preview ${i + 1}`}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  </motion.div>
                ))}
              </div>

              {/* Project Content */}
              <div className="flex-1">
                <h3 className="text-3xl font-bold text-amber-400 mb-4">
                  {project.title}
                </h3>
                <p className="text-gray-300 mb-6">{project.description}</p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 text-sm rounded-full bg-amber-500/10 text-amber-400 border border-amber-500/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex gap-4">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 bg-gray-800 px-5 py-2 rounded-lg text-sm hover:bg-gray-700 transition"
                    >
                      <FaGithub /> Code
                    </a>
                  )}
                  {project.video && (
                    <button
                      onClick={() => setSelectedVideo(project.video)}
                      className="flex items-center gap-2 bg-gray-700 px-5 py-2 rounded-lg text-sm hover:bg-gray-600 transition"
                    >
                      <FaVideo /> Demo
                    </button>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Image Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50"
          onClick={() => setSelectedImage(null)}
        >
          <motion.img
            src={selectedImage}
            alt="Full preview"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.3 }}
            className="max-w-4xl max-h-[85vh] rounded-lg shadow-2xl"
          />
        </div>
      )}

      {/* Video Modal */}
      {selectedVideo && (
        <div
          className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50"
          onClick={() => setSelectedVideo(null)}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.3 }}
            className="w-[90%] max-w-4xl aspect-video bg-black rounded-lg overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()} // prevent closing on video click
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
