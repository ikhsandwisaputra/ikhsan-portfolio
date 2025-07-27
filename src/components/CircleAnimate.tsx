// /components/BlurLoader.jsx
import React from "react";
import "../css/circle.css"; ""; // Import animasi dari CSS eksternal

const CircleAnimate = () => {
  return (
    <div className="blur-loader-container">
      <span></span>
      <span></span>
      <span></span>
      <span></span>
    </div>
  );
};

export default CircleAnimate;
