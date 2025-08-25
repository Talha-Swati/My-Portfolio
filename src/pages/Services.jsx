// Components/Services.jsx
import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { motion } from "framer-motion";
import {
    FaCode, FaPaintBrush, FaBullhorn, FaWordpress, FaComments, FaCheckCircle
} from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Services = () => {
    const navigate = useNavigate();

    // Animation Variants
    const fadeUp = {
        hidden: { opacity: 0, y: 40 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
    };

    const stagger = {
        visible: { transition: { staggerChildren: 0.2 } },
    };

    const services = [
        {
            title: "Web Development",
            icon: <FaCode className="text-5xl text-cyan-400 mb-5 self-center" />,
            description:
                "High-performance, scalable websites that drive conversions and elevate your brand presence.",
            includes: [
                "Custom Development",
                "E-Commerce Solutions",
                "CMS Integration",
                "Performance Optimization",
            ],
        },
        {
            title: "UI/UX Designing",
            icon: <FaPaintBrush className="text-5xl text-cyan-400 mb-5 self-center" />,
            description:
                "Engaging, user-focused interfaces designed for smooth navigation and impactful experiences.",
            includes: [
                "Wireframing & Prototyping",
                "Interactive UI Designs",
                "Responsive Layouts",
                "User Journey Mapping",
            ],
        },
        {
            title: "Digital Marketing",
            icon: <FaBullhorn className="text-5xl text-cyan-400 mb-5 self-center" />,
            description:
                "Data-driven strategies to grow your online presence and amplify brand recognition.",
            includes: [
                "Social Media Marketing",
                "Content Marketing",
                "SEO & Analytics",
                "Paid Campaigns",
            ],
        },
        {
            title: "WordPress Development",
            icon: <FaWordpress className="text-5xl text-cyan-400 mb-5 self-center" />,
            description:
                "Tailored WordPress solutions — fast, secure, and flexible to meet your business needs.",
            includes: [
                "Theme Customization",
                "Plugin Integration",
                "SEO-Friendly Setup",
                "Maintenance & Support",
            ],
        },
        {
            title: "Consultation",
            icon: <FaComments className="text-5xl text-cyan-400 mb-5 self-center" />,
            description:
                "Expert insights for process improvement, technology adoption, and digital strategy.",
            includes: [
                "Business Process Improvement",
                "Technology Strategy",
                "Project Roadmaps",
                "Ongoing Support",
            ],
        },
    ];

    return (
        <div className="text-white min-h-screen flex flex-col bg-transparent">
            {/* Navbar */}
            <Navbar />

            {/* CTA Section */}
            <section className="py-12 px-6 text-center">
                <motion.h1
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-3xl md:text-5xl font-bold mb-4"
                >
                    
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-cyan-500">
                       My Services
                    </span>
                </motion.h1>
                <p className="max-w-2xl mx-auto text-base sm:text-lg md:text-xl text-gray-400">
                    Transforming your vision into impactful digital solutions — blending
                    design, technology, and strategy for measurable growth.
                </p>
            </section>

            {/* Services Section */}
            <motion.div
                className="flex-grow container mx-auto px-8 sm:px-6 lg:px-16 py-12"
                initial="hidden"
                animate="visible"
                variants={stagger}
            >
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            variants={fadeUp}
                            initial={{ boxShadow: "none" }}   // 🔹 ensures no shadow at start
                            whileHover={{
                                scale: 1.05,
                                boxShadow: "0px 8px 20px rgba(34,211,238,0.35), 0px 6px 12px rgba(34,211,238,0.2)"
                            }}
                            className="p-6 md:p-8 rounded-2xl 
                bg-black/40 
             hover:border border-cyan-800 transition-all duration-300 flex flex-col  
               font-bold"
                        >
                            {service.icon}
                            <h3 className="text-xl md:text-2xl font-extrabold mb-3 text-teal-400">
                                {service.title}
                            </h3>
                            <p className="text-sm md:text-base text-gray-300 mb-5 font-medium">
                                {service.description}
                            </p>
                            <ul className="space-y-2 text-gray-400 text-sm md:text-base flex-grow">
                                {service.includes.map((item, i) => (
                                    <li key={i} className="flex items-center gap-2">
                                        <FaCheckCircle className="text-teal-400 flex-shrink-0" />
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    ))}

                </div>

                {/* CTA to Contact Page */}
                <div className="text-center mt-14">
                    <button
                        onClick={() => navigate("/contact")}
                        className="relative px-8 py-3 font-semibold rounded-xl text-teal-400 border-2 border-teal-500
              transition-all duration-300 hover:shadow-[0_6px_15px_rgba(34,211,238,0.35)]"
                    >
                        Contact for Pricing & Details
                    </button>
                </div>
            </motion.div>

            {/* Footer */}
            <Footer />
        </div>
    );
};

export default Services;
