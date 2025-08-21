import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Contact from './pages/Contact.jsx'
import About from './pages/About.jsx'
import Projects from './pages/Projects.jsx'
import './App.css'
import './globals.css'
import Home from './pages/Home.jsx'

function App() {

  
return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
    </Router>
  );   
  
}

export default App
