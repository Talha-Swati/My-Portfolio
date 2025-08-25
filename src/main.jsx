import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import "./globals.css";
import App from "./App.jsx";
import CustomRouter from "./CustomRouter.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <CustomRouter>
      <App />
    </CustomRouter>
  </StrictMode>
);
