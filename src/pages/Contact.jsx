import React, { useRef, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { FaEnvelope, FaPhone, FaLinkedin } from "react-icons/fa";
import ReCAPTCHA from "react-google-recaptcha";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";

const Contact = () => {
  const recaptchaRef = useRef();
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    // 1. Get reCAPTCHA token
    const token = recaptchaRef.current?.getValue();
    if (!token) {
      alert("Please verify you are human!");
      setLoading(false);
      return;
    }

    try {
      // 2. Verify token with backend
      const verifyRes = await fetch("/api/verify-recaptcha", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ token }),
      });
      const verifyData = await verifyRes.json();

      if (!verifyRes.ok || !verifyData.success) {
        alert("reCAPTCHA verification failed. Please try again.");
        recaptchaRef.current.reset();
        setLoading(false);
        return;
      }

      // 3. Send email via EmailJS (only if reCAPTCHA is valid)
      const templateParams = {
        from_name: e.target.user_name.value,
        email: e.target.user_email.value,
        message: e.target.message.value,
      };

      await emailjs.send(
        "service_hir6x6i", // ✅ replace with your EmailJS service ID
        "template_gu9gbrb", // ✅ replace with your template ID
        templateParams,
        "NTAXYgwkYqoNSYeG4" // ✅ replace with your public key
      );

      alert("Message sent successfully!");
      e.target.reset();
      recaptchaRef.current.reset();
    } catch (err) {
      console.error("Error:", err);
      alert("Error sending message. Please try again later.");
      recaptchaRef.current.reset();
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
      <section className="py-12 px-6 text-center">
        <h1 className="text-3xl md:text-4xl font-bold mb-4">
          Let’s Discuss Your{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-cyan-500">
            Project
          </span>{" "}
        </h1>
        <p className="max-w-2xl mx-auto text-base sm:text-lg md:text-xl text-gray-400">
          Let’s collaborate and create something meaningful for you
        </p>
      </section>

      {/* Contact Section */}
      <motion.div
        className="flex-grow container mx-auto px-4 sm:px-6 py-16"
        initial="hidden"
        animate="visible"
        variants={stagger}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-6xl mx-auto">
          {/* Contact Form */}
          <motion.div
            id="contact-form"
            variants={fadeUp}
            className="bg-black bg-opacity-70 p-6 md:p-8 rounded-2xl shadow-lg backdrop-blur-md border border-gray-500 hover:shadow-xl hover:shadow-cyan-500/30 transition-shadow duration-300"
          >
            <h3 className="text-teal-400 text-2xl font-semibold mb-6 text-center">
              Send a Message
            </h3>
            <form className="flex flex-col space-y-4" onSubmit={handleSubmit}>
              <input
                type="text"
                name="user_name"
                placeholder="Full Name"
                className="p-3 rounded-lg bg-white/15 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-teal-500 w-full text-white"
                required
              />
              <input
                type="email"
                name="user_email"
                placeholder="Your Email"
                className="p-3 rounded-lg bg-white/15 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-teal-500 w-full text-white"
                required
              />
              <textarea
                name="message"
                placeholder="Your Message"
                rows="5"
                className="p-3 rounded-lg bg-white/15 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-teal-500 w-full text-white"
                required
              ></textarea>

              {/* reCAPTCHA */}
              <ReCAPTCHA
                sitekey={import.meta.env.VITE_RECAPTCHA_SITE_KEY} // ✅ pulls from .env
                ref={recaptchaRef}
              />

              <button
                type="submit"
                disabled={loading}
                className="relative px-5 py-3 overflow-hidden font-semibold rounded-xl text-teal-400 border-2 border-teal-500
                hover:text-white hover:border-cyan-500 transition-colors duration-300 group w-full text-center"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-teal-500 to-cyan-600 -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-in-out"></span>
                <span className="relative z-10">
                  {loading ? "Sending..." : "Send Message"}
                </span>
              </button>
            </form>
          </motion.div>

          {/* Contact Info Cards */}
          <motion.div variants={fadeUp} className="flex flex-col space-y-6">
            {/* Email */}
            <div className="flex items-center p-5 bg-black rounded-xl shadow-lg border border-gray-700 hover:shadow-2xl hover:shadow-teal-500/40 transition duration-300">
              <FaEnvelope className="text-3xl mr-5 text-teal-400" />
              <div>
                <p className="text-base font-semibold text-teal-300">Email</p>
                <p className="text-sm text-gray-300">talhariaz797@gmail.com</p>
                <p className="text-md text-gray-500">Response within 4 hours</p>
              </div>
            </div>

            {/* Phone */}
            <div className="flex items-center p-5 bg-black rounded-xl shadow-lg border border-gray-700 hover:shadow-2xl hover:shadow-cyan-500/40 transition duration-300">
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
              className="flex items-center p-5 bg-black rounded-xl shadow-lg border border-gray-700 hover:shadow-2xl hover:shadow-cyan-500/40 transition duration-300"
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
