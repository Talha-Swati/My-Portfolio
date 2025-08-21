import React, { useRef, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope, FaInstagram } from "react-icons/fa";
import ReCAPTCHA from "react-google-recaptcha";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const recaptchaRef = useRef();
  const [captchaVerified, setCaptchaVerified] = useState(false);

  const handleSubmit = (e) => {
  e.preventDefault();

  if (!captchaVerified) {
    alert("Please verify you are human!");
    return;
  }

  // Updated template parameters for EmailJS
  const templateParams = {
    from_name: e.target.user_name.value, // sender's name
    email: e.target.user_email.value,    // sender's email
    message: e.target.message.value,
  };

  emailjs
    .send(
      "service_hir6x6i", // Replace with your EmailJS service ID
      "template_gu9gbrb", // Replace with your EmailJS template ID
      templateParams,
      "NTAXYgwkYqoNSYeG4" // Replace with your EmailJS public key
    )
    .then(
      (result) => {
        alert("Message sent successfully!");
        e.target.reset();
        recaptchaRef.current.reset();
        setCaptchaVerified(false);
      },
      (error) => {
        alert("Error sending message: " + error.text);
      }
    );
};


  return (
    <div className="bg-gradient-to-b from-gray-900 via-black to-gray-900 text-white min-h-screen flex flex-col">
      {/* Navbar */}
      <Navbar />

      {/* Contact Section */}
      <div className="flex-grow flex flex-col items-center justify-center px-6 py-16">
        <h2 className="text-4xl font-bold text-center mb-8">
          Get In <span className="text-purple-500">Touch</span>
        </h2>
        <p className="text-center text-gray-300 max-w-2xl mb-12">
          Feel free to reach out for collaborations, freelance projects, or just
          to say hi! I’m always excited to connect with passionate people.
        </p>

        <div className="grid md:grid-cols-2 gap-10 w-full max-w-5xl">
          {/* Contact Form */}
          <div className="bg-gray-800 bg-opacity-60 p-8 rounded-2xl shadow-lg backdrop-blur-md border border-gray-700">
            <h3 className="text-2xl font-semibold mb-6">Send a Message</h3>
            <form className="flex flex-col space-y-4" onSubmit={handleSubmit}>
              <input
                type="text"
                name="user_name"
                placeholder="Your Name"
                className="p-3 rounded-lg bg-gray-900 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-500"
                required
              />
              <input
                type="email"
                name="user_email"
                placeholder="Your Email"
                className="p-3 rounded-lg bg-gray-900 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-500"
                required
              />
              <textarea
                name="message"
                placeholder="Your Message"
                rows="5"
                className="p-3 rounded-lg bg-gray-900 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-500"
                required
              ></textarea>

              {/* reCAPTCHA */}
              <ReCAPTCHA
                sitekey="6LcCAKsrAAAAABldTA-4rqh5YyWZiPcWdqsCQpKD" // Replace with your reCAPTCHA site key
                ref={recaptchaRef}
                onChange={() => setCaptchaVerified(true)}
              />

              <button
                type="submit"
                className="bg-purple-600 hover:bg-purple-700 transition-all py-3 rounded-lg font-semibold shadow-md"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Info + Socials */}
          <div className="flex flex-col items-center justify-center bg-gray-800 bg-opacity-60 p-8 rounded-2xl shadow-lg backdrop-blur-md border border-gray-700">
            <h3 className="text-2xl font-semibold mb-6">Connect With Me</h3>
            <p className="text-gray-300 mb-6 text-center">
              You can also find me on these platforms:
            </p>
            <div className="flex space-x-6 text-3xl">
              <a
                href="mailto:talhariaz797@gmail.com?subject=Hello%20Talha&body=I%20want%20to%20contact%20you"
                className="hover:text-purple-400 transition"
              >
                <FaEnvelope />
              </a>
              <a
                href="https://github.com/Talha-Swati"
                target="_blank"
                rel="noreferrer"
                className="hover:text-purple-400 transition"
              >
                <FaGithub />
              </a>
              <a
                href="https://www.linkedin.com/in/talha-riaz-swati/"
                target="_blank"
                rel="noreferrer"
                className="hover:text-purple-400 transition"
              >
                <FaLinkedin />
              </a>
              <a
                href="https://instagram.com/talha_riaz_swati"
                target="_blank"
                rel="noreferrer"
                className="hover:text-purple-400 transition"
              >
                <FaInstagram />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Contact;
