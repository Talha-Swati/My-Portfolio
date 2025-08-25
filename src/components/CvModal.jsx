// CvModal.jsx
import React, { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const CvModal = ({ isOpen, onClose }) => {
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handleEsc);

    // ✅ Disable body scroll when modal is open
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.removeEventListener("keydown", handleEsc);
      document.body.style.overflow = ""; // cleanup
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-50 flex items-start justify-center bg-black/40 backdrop-blur-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          {/* 🔥 Modal box */}
          <motion.div
            className="relative mt-[8vh] w-11/12 md:w-3/4 h-[85vh] bg-white rounded-2xl shadow-2xl overflow-hidden"
            initial={{ scale: 0.9, opacity: 0, y: 40 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 40 }}
            transition={{ duration: 0.35, ease: "easeOut" }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button
              onClick={onClose}
              className="absolute top-3 right-3 text-orange-500 text-2xl font-bold z-10 hover:text-red-500 transition"
            >
              ✕
            </button>

            {/* CV Document */}
            <iframe
  src="https://drive.google.com/file/d/1llhCph2yn3D_dmOhxlCXWxHQ39z5t4mk/preview"
  className="w-full h-full"
  allow="autoplay"
  sandbox="allow-same-origin allow-scripts allow-popups"
  title="CV Document"
/>

          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default CvModal;
