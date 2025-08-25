import { Routes, Route } from "react-router-dom";
import Contact from "./pages/Contact.jsx";
import About from "./pages/About.jsx";
import Projects from "./pages/Projects.jsx";
import Home from "./pages/Home.jsx";
import Services from "./pages/Services.jsx";
import "./App.css";
import "./globals.css";
import CustomCursor from "./components/CustomCursor.jsx";
import PrivacyPolicy from "./components/PrivacyPolicy.jsx";
import TermsConditions from "./components/TermsConditions.jsx";

function App() {
  return (
    <>
    <CustomCursor />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/services" element={<Services />} />
      <Route path="/privacy-policy" element={<PrivacyPolicy />} />
      <Route path="/terms-conditions" element={<TermsConditions />} />

    </Routes>
    </>
  );
}

export default App;
