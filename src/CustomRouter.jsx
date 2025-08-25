// src/CustomRouter.jsx
import React from "react";
import { BrowserRouter, HashRouter } from "react-router-dom";

// Detect if running on GitHub Pages
const isGithubPages = window.location.hostname.includes("github.io");

export default function CustomRouter({ children }) {
  if (isGithubPages) {
    return <HashRouter>{children}</HashRouter>;
  }
  return <BrowserRouter>{children}</BrowserRouter>;
}
