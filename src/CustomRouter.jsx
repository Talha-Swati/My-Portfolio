// src/CustomRouter.jsx
import React from "react";
import { BrowserRouter } from "react-router-dom";

export default function CustomRouter({ children }) {
  return <BrowserRouter>{children}</BrowserRouter>;
}
