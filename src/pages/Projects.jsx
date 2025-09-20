import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";
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
import courses from "../assets/courses.png"
import lms1 from "../assets/lms1.png"
import dashboard from "../assets/dashboard.png"
import coverImg from "../assets/projects.jpg"; // <-- cover image


const projects = [
  {
    title: "TeachGen LMS",
    description:
      "TeachGen LMS is a WordPress-based learning management system built using the Astra theme and powered by the Tutor LMS plugin. It offers modern navigation, a fast and responsive design, and complete eLearning functionality including course creation, quizzes, student dashboards, and progress tracking. The project showcases a professional LMS solution that is both scalable and user-friendly.",
    tech: ["WordPress", "Astra Theme", "Tutor LMS", "PHP", "MySQL"],
    live: "https://teachgen.free.nf/",
    images: [courses, lms1, dashboard], // you can add screenshots here later like teachgen1, teachgen2, etc.
  },
  {
    title: "Smart Task Planner",
    description:
      "A full-stack task management system with authentication, priority handling, task categories, and dark/light mode support.",
    tech: ["React.js", "Node.js", "Express.js", "MongoDB", "TailwindCSS"],
    github: "https://github.com/Talha-Swati/Smart-Task-Planner.git",
    video: "https://drive.google.com/file/d/1Aeg4aylhvSncey5XuIIA-7MPKxisDQ6r/preview",
    images: [stp1, stp2, stp3],
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
      "SkyPulse is a modern weather forecasting web app designed with an intuitive UI and real-time API integration. It features a 'Use My Location' button to instantly fetch the user’s local weather, an hourly chart for precise forecasts, elegant 5-day forecast cards, and a unit toggle to seamlessly switch between Celsius and Fahrenheit. The background dynamically adapts its gradient colors based on live weather conditions—for example, a light bluish gradient for clear skies or gray tones for rainy weather—delivering both functionality and aesthetic appeal.",
    tech: ["React.js", "Node.js", "Weather API", "TailwindCSS"],
    github: "https://github.com/Talha-Swati/SkyPulse.git",
    live: "https://sky-pulse-five.vercel.app/",
    images: [SkyPulse1, SkyPulse2, SkyPulse3],
  },
];

const Projects = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedVideo, setSelectedVideo] = useState(null);

  return (
    <div className="relative min-h-screen text-white overflow-hidden">
      <Navbar />
      
       {/* --- COVER / HERO IMAGE (below navbar) --- */}
      <section className="relative text-white overflow-hidden">
        {/* ↓ reduced heights */}
        <div className="relative h-[220px] sm:h-[320px] md:h-[300px]">
       <img
        src={coverImg}
        alt="About cover"
        className="absolute inset-0 w-full h-full object-cover object-[center_34%]"
      />
      
          {/* overlay for readability */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/60 to-black/90" />
      
          {/* centered heading + paragraph */}
          <div className="relative z-10 h-full max-w-6xl mx-auto px-4 flex flex-col items-center justify-center text-center gap-4">
            <motion.h2
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="text-3xl sm:text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-teal-400 to-cyan-500"
            >
             My Projects
            </motion.h2>
                 {/* Section Caption */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-center text-gray-300 text-sm sm:text-base md:text-lg max-w-3xl mx-auto mt-4 mb-12 sm:mb-16"
        >
          A curated collection of my development journey — blending creativity,
          design, and functionality into real-world applications. Each project
          reflects problem-solving, clean code, and modern UI/UX practices.
        </motion.p>
      
          </div>
        </div>
      </section>
      {/* --- END COVER --- */}
      

      {/* Projects Section */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">

        <div className="space-y-12 sm:space-y-16">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-black/60 backdrop-blur-lg rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-teal-500/30 transition-all"
            >
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
                      className="relative h-40 sm:h-48 bg-gray-800 rounded-xl overflow-hidden shadow-md group cursor-pointer"
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
                <div className="flex-1 w-full">
                  <h3 className="text-2xl sm:text-3xl font-bold text-white mb-3 sm:mb-4">
                    {project.title}
                  </h3>
                  <p className="text-sm sm:text-base md:text-lg text-gray-300 mb-4 sm:mb-6">
                    {project.description}
                  </p>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2 mb-4 sm:mb-6">
                    {project.tech.map((tech, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 text-xs sm:text-sm rounded-full bg-amber-500/10 text-amber-400 border border-amber-500/20"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex flex-wrap gap-3">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 bg-black/40 px-4 py-2 text-white rounded-lg text-xs sm:text-sm hover:shadow-cyan-500/20 transition-all"
                      >
                        <FaGithub /> Code
                      </a>
                    )}
                    {project.video && (
                      <button
                        onClick={() => setSelectedVideo(project.video)}
                        className="flex items-center gap-2 bg-black/40 px-4 py-2 rounded-lg text-xs sm:text-sm hover:shadow-cyan-500/20 transition-all"
                      >
                        🎥 Demo
                      </button>
                    )}
                    {project.live && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 bg-black/40 px-4 py-2 rounded-lg text-xs sm:text-sm hover:shadow-cyan-500/20 transition-all"
                      >
                        🔗 Live
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
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
