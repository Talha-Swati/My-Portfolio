// CustomCursor.jsx
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

export default function CustomCursor() {
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    const mouseMove = (e) => setPos({ x: e.clientX, y: e.clientY });

    const mouseOver = (e) => {
      if (e.target.tagName === "A" || e.target.tagName === "BUTTON") {
        setHovered(true);
      }
    };
    const mouseOut = (e) => {
      if (e.target.tagName === "A" || e.target.tagName === "BUTTON") {
        setHovered(false);
      }
    };

    window.addEventListener("mousemove", mouseMove);
    window.addEventListener("mouseover", mouseOver);
    window.addEventListener("mouseout", mouseOut);

    return () => {
      window.removeEventListener("mousemove", mouseMove);
      window.removeEventListener("mouseover", mouseOver);
      window.removeEventListener("mouseout", mouseOut);
    };
  }, []);

  return (
    <motion.div
      className={`fixed top-0 left-0 pointer-events-none z-[9999] rounded-full mix-blend-difference
        ${hovered ? "w-3 h-3 bg-gray-400" : "w-4 h-4 border-2 border-gray-400"}`}
      animate={{ x: pos.x - 8, y: pos.y - 8 }}
      transition={{ type: "spring", stiffness: 500, damping: 30 }}
    />
  );
}
