// CvModal.jsx
import React, { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const CvModal = ({ isOpen, onClose }) => {
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handleEsc);
    return () => document.removeEventListener("keydown", handleEsc);
  }, [onClose]);

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/30 backdrop-blur-md"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose} // close on outside click
        >
          {/* Stop propagation so clicking inside the CV doesn’t close */}
          <motion.div
            className="relative w-11/12 h-[95vh] bg-white rounded-2xl shadow-2xl overflow-hidden"
            initial={{ scale: 0.85, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.85, opacity: 0 }}
            transition={{ duration: 0.3 }}
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
            <embed
              src="https://drive.google.com/file/d/1llhCph2yn3D_dmOhxlCXWxHQ39z5t4mk/preview"
              type="application/pdf"
              className="w-full h-full"
              title="CV Document"
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default CvModal;
