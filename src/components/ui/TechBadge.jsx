import React from "react";

const TechBadge = ({ className = "", children }) => {
  return (
    <span
      className={`px-3 py-1 text-xs sm:text-sm rounded-full border ${className}`.trim()}
    >
      {children}
    </span>
  );
};

export default TechBadge;
