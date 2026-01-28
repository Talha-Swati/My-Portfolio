import React from "react";

const SocialLinks = ({
  links,
  className = "",
  itemClassName = "",
}) => {
  return (
    <div className={`flex ${className}`.trim()}>
      {links.map((social, i) => {
        const LinkComponent = social.Component ?? "a";
        return (
          <LinkComponent
            key={social.key ?? i}
            href={social.link}
            target="_blank"
            rel="noopener noreferrer"
            className={`text-gray-100 text-xl sm:text-2xl hover:text-cyan-400 transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500/60 rounded ${itemClassName}`.trim()}
            whileHover={social.whileHover}
            whileTap={social.whileTap}
          >
            {social.icon}
          </LinkComponent>
        );
      })}
    </div>
  );
};

export default SocialLinks;
