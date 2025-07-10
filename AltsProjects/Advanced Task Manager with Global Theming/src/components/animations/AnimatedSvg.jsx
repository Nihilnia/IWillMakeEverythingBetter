import React from "react";
import "./AnimatedSvg.css";

const AnimatedSvg = ({ src, alt, className }) => {
  return (
    <div className="animated-svg-container">
      <img src={src} alt={alt} className={`animated-svg filter-white-svg ${className || ""}`} />
    </div>
  );
};

export default AnimatedSvg;
