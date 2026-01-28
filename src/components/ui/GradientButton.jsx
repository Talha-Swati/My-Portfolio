import React from "react";

const GradientButton = ({
  as: Component = "button",
  className = "",
  children,
  gradientClassName = "from-cyan-600 to-teal-600",
  hoverGradientClassName = "hover:from-cyan-500 hover:to-teal-500",
  ...props
}) => {
  return (
    <Component
      className={`bg-gradient-to-r ${gradientClassName} ${hoverGradientClassName} text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500/60 ${className}`.trim()}
      {...props}
    >
      {children}
    </Component>
  );
};

export default GradientButton;
