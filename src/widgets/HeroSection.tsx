import React from "react";
import "./Global.css";
import backgroundImage from "./hero_background.png";
import HeroImage from "./hero_image.png";
export {};

const HeroSection: React.FC = () => {
  return (
    <section className="hero-section">
      <div
        className="background-image"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      ></div>
      <div className="text-container">
        <h1>
          Host your meeting with world-class amenities.<br></br>Starting at
          <span style={{ color: "#F2B304" }}> ₹199/-!</span>
        </h1>
      </div>
      <div className="image-container">
        <img src={HeroImage} alt="Meeting Imagee" />
      </div>
    </section>
  );
};

export default HeroSection;
