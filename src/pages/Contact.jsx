import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { FaEnvelope, FaPhone, FaLinkedin, FaGithub, FaMapMarkerAlt, FaClock } from "react-icons/fa";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";

const Contact = () => {
  const [loading, setLoading] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedBudget, setSelectedBudget] = useState("");
  const [clientType, setClientType] = useState("Individual");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      // Send email via EmailJS
      const templateParams = {
        client_type: clientType,
        from_name: e.target.user_name.value,
        company_name: clientType === "Company" ? e.target.company_name.value : "N/A",
        email: e.target.user_email.value,
        phone: e.target.user_phone.value || "Not provided",
        category: selectedCategory,
        budget: selectedBudget,
        message: e.target.message.value,
      };

      console.log("Sending email with params:", templateParams);

      const result = await emailjs.send(
        "service_hir6x6i",
        "template_gu9gbrb",
        templateParams,
        "NTAXYgwkYqoNSYeG4"
      );

      console.log("Email sent successfully:", result);
      alert("✅ Message sent successfully! I'll get back to you within 4 hours.");
      e.target.reset();
      setSelectedCategory("");
      setSelectedBudget("");
      setClientType("Individual");
    } catch (err) {
      console.error("EmailJS Error Details:", err);
      console.error("Error Text:", err.text);
      console.error("Error Status:", err.status);
      alert("❌ Error: " + (err.text || err.message || "Failed to send message. Please email talhariaz797@gmail.com directly."));
    } finally {
      setLoading(false);
    }
  };

  // Animation variants
  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: "easeOut" },
    },
  };

  const stagger = {
    visible: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  return (
    <div className="text-white min-h-screen flex flex-col">
      {/* Navbar */}
      <Navbar />

      {/* Clean CTA Text */}
      <section className="py-12 px-6 text-center bg-gradient-to-b from-[#1a2332] to-[#0a0a0a] relative">
        <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-cyan-500 to-transparent"></div>
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-3xl md:text-5xl font-bold mb-4"
        >
          Let's Build Something{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-cyan-500">
            Amazing Together
          </span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-2xl mx-auto text-base sm:text-lg md:text-xl text-gray-300"
        >
          Whether it's a web app, automation, or AI solution — I'm here to transform your ideas into reality.
        </motion.p>
      </section>

      {/* Contact Section */}
      <motion.div
        className="flex-grow container mx-auto px-4 sm:px-6 py-16"
        initial="hidden"
        animate="visible"
        variants={stagger}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-7xl mx-auto">
          {/* Contact Form */}
          <motion.div
            id="contact-form"
            variants={fadeUp}
            className="bg-[#0f1419] p-6 md:p-8 rounded-3xl shadow-2xl border border-gray-800/50 hover:border-cyan-500/30 transition-all duration-500 relative overflow-hidden"
          >
            {/* Decorative gradient overlay */}
            <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-cyan-400 to-transparent"></div>
            <div className="absolute -top-24 -right-24 w-48 h-48 bg-cyan-500/5 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-24 -left-24 w-48 h-48 bg-teal-500/5 rounded-full blur-3xl"></div>
            
            <div className="relative z-10">
              <h3 className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-teal-400 text-3xl md:text-4xl font-bold mb-2 text-center">
                Send us a Message
              </h3>
              <p className="text-gray-400 text-sm text-center mb-6">Fill out the form and I'll respond within 4 hours</p>
              
              <form className="flex flex-col space-y-4" onSubmit={handleSubmit}>
                {/* Client Type Toggle */}
                <div>
                  <label className="block text-sm font-semibold text-gray-300 mb-3">
                    I am a/n
                  </label>
                  <div className="grid grid-cols-2 gap-3">
                    <button
                      type="button"
                      onClick={() => setClientType("Individual")}
                      className={`py-3 px-6 rounded-xl font-semibold text-sm transition-all duration-300 ${
                        clientType === "Individual"
                          ? "bg-gradient-to-r from-cyan-500 to-teal-500 text-white"
                          : "bg-[#1a2332] text-gray-400 border border-gray-700 hover:border-gray-600"
                      }`}
                    >
                      Individual
                    </button>
                    <button
                      type="button"
                      onClick={() => setClientType("Company")}
                      className={`py-3 px-6 rounded-xl font-semibold text-sm transition-all duration-300 ${
                        clientType === "Company"
                          ? "bg-gradient-to-r from-cyan-500 to-teal-500 text-white"
                          : "bg-[#1a2332] text-gray-400 border border-gray-700 hover:border-gray-600"
                      }`}
                    >
                      Company
                    </button>
                  </div>
                </div>

                {/* Name */}
                <div>
                  <label className="block text-sm font-semibold text-gray-300 mb-2">
                    Full Name <span className="text-cyan-400">*</span>
                  </label>
                  <input
                    type="text"
                    name="user_name"
                    placeholder="John Doe"
                    className="p-4 rounded-xl bg-[#1a2332] border border-gray-700 focus:outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 w-full text-white transition-all hover:border-gray-600 placeholder:text-gray-500"
                    required
                  />
                </div>

                {/* Company Name (Conditional) */}
                {clientType === "Company" && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <label className="block text-sm font-semibold text-gray-300 mb-2">
                      Company Name <span className="text-cyan-400">*</span>
                    </label>
                    <input
                      type="text"
                      name="company_name"
                      placeholder="Your Company Name"
                      className="p-4 rounded-xl bg-[#1a2332] border border-gray-700 focus:outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 w-full text-white transition-all hover:border-gray-600 placeholder:text-gray-500"
                      required={clientType === "Company"}
                    />
                  </motion.div>
                )}

                {/* Email & Phone */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold text-gray-300 mb-2">
                      Email Address <span className="text-cyan-400">*</span>
                    </label>
                    <input
                      type="email"
                      name="user_email"
                      placeholder="john@example.com"
                      className="p-4 rounded-xl bg-[#1a2332] border border-gray-700 focus:outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 w-full text-white transition-all hover:border-gray-600 placeholder:text-gray-500"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-300 mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      name="user_phone"
                      placeholder="+1 (555) 123-4567"
                      className="p-4 rounded-xl bg-[#1a2332] border border-gray-700 focus:outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 w-full text-white transition-all hover:border-gray-600 placeholder:text-gray-500"
                    />
                  </div>
                </div>

                {/* Category & Budget in one row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold text-gray-300 mb-2">
                      Project Type <span className="text-cyan-400">*</span>
                    </label>
                    <select
                      value={selectedCategory}
                      onChange={(e) => setSelectedCategory(e.target.value)}
                      className="p-4 rounded-xl bg-[#1a2332] border border-gray-700 focus:outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 w-full text-white transition-all cursor-pointer hover:border-gray-600"
                      required
                    >
                      <option value="">Select project type</option>
                      <option value="Full-Stack Development">Full-Stack Development</option>
                      <option value="Automation & AI">AI Integrations</option>
                      <option value="WordPress Development">WordPress Development</option>
                      <option value="Digital Marketing">Digital Marketing</option>
                      <option value="Web Scraping">Web Scraping</option>
                      <option value="UI/UX Design">UI/UX Design</option>
                      <option value="IT Consultation">IT Consultation</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-300 mb-2">
                      Budget Range <span className="text-cyan-400">*</span>
                    </label>
                    <select
                      value={selectedBudget}
                      onChange={(e) => setSelectedBudget(e.target.value)}
                      className="p-4 rounded-xl bg-[#1a2332] border border-gray-700 focus:outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 w-full text-white transition-all cursor-pointer hover:border-gray-600"
                      required
                    >
                      <option value="">Select budget range</option>
                      <option value="Under $500">Under $500</option>
                      <option value="$500 - $1,000">$500 - $1,000</option>
                      <option value="$1,000 - $3,000">$1,000 - $3,000</option>
                      <option value="$3,000 - $5,000">$3,000 - $5,000</option>
                      <option value="$5,000+">$5,000+</option>
                      <option value="Not sure yet">Not sure yet</option>
                    </select>
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label className="block text-sm font-semibold text-gray-300 mb-2">
                    Project Details <span className="text-cyan-400">*</span>
                  </label>
                  <textarea
                    name="message"
                    placeholder="Tell us about your project, requirements, and goals..."
                    rows="5"
                    className="p-4 rounded-xl bg-[#1a2332] border border-gray-700 focus:outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 w-full text-white transition-all resize-none hover:border-gray-600 placeholder:text-gray-500"
                    required
                  ></textarea>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={loading}
                  className="relative px-8 py-4 overflow-hidden font-bold rounded-xl text-white bg-gradient-to-r from-cyan-600 to-teal-600 hover:from-cyan-500 hover:to-teal-500 transition-all duration-300 w-full text-center disabled:opacity-50 disabled:cursor-not-allowed transform hover:scale-[1.02] active:scale-[0.98]"
                >
                  {loading ? (
                    <span className="flex items-center justify-center gap-2">
                      <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Sending...
                    </span>
                  ) : (
                    "Send Message"
                  )}
                </button>
              </form>
            </div>
          </motion.div>

          {/* Contact Info Cards */}
          <motion.div variants={fadeUp} className="flex flex-col space-y-6">
            {/* Email */}
            <div className="flex items-center p-5 bg-black rounded-xl shadow-lg border border-gray-800 hover:shadow-2xl hover:shadow-teal-500/40 hover:border-teal-500/50 transition duration-300">
              <FaEnvelope className="text-3xl mr-5 text-teal-400" />
              <div>
                <p className="text-base font-semibold text-teal-300">Email</p>
                <p className="text-sm text-gray-300">talhariaz797@gmail.com</p>
                <p className="text-md text-gray-500">Response within 4 hours</p>
              </div>
            </div>

            {/* Phone */}
            <div className="flex items-center p-5 bg-black rounded-xl shadow-lg border border-gray-800 hover:shadow-2xl hover:shadow-cyan-500/40 hover:border-cyan-500/50 transition duration-300">
              <FaPhone className="text-3xl mr-5 text-teal-400" />
              <div>
                <p className="text-base font-semibold text-teal-300">Phone</p>
                <p className="text-sm text-gray-300">+92 328 5000209</p>
                <p className="text-md text-gray-500">Mon-Sat 9AM-6PM PKT</p>
              </div>
            </div>

            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/talha-riaz-swati/"
              target="_blank"
              rel="noreferrer"
              className="flex items-center p-5 bg-black rounded-xl shadow-lg border border-gray-800 hover:shadow-2xl hover:shadow-cyan-500/40 hover:border-cyan-500/50 transition duration-300"
            >
              <FaLinkedin className="text-3xl mr-5 text-teal-400" />
              <div>
                <p className="text-base font-semibold text-teal-300">LinkedIn</p>
                <p className="text-sm text-gray-300">talha-riaz-swati</p>
                <p className="text-xs text-gray-500">Let’s connect </p>
              </div>
            </a>
          </motion.div>
        </div>
      </motion.div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Contact;
