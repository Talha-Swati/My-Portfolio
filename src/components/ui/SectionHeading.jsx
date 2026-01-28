import React from "react";

const SectionHeading = ({
  title,
  subtitle,
  align = "center",
  titleClassName = "",
  subtitleClassName = "",
  wrapperClassName = "",
}) => {
  const alignClass = align === "left" ? "text-left" : align === "right" ? "text-right" : "text-center";

  return (
    <div className={`${alignClass} ${wrapperClassName}`.trim()}>
      <h2
        className={`text-3xl md:text-4xl font-semibold mb-4 ${titleClassName}`.trim()}
      >
        {title}
      </h2>
      {subtitle ? (
        <p className={`text-gray-400 text-lg ${subtitleClassName}`.trim()}>
          {subtitle}
        </p>
      ) : null}
    </div>
  );
};

export default SectionHeading;
