import React from "react";
import { forwardRef } from "react";
import "../styles/AboutUs.css";
import AboutImage from "../assets/about-image.jpg";

const About = forwardRef((props, ref) => {
    return (
      <section ref={ref} className="about-us">
      <div className="about-us-container">
          <div className="about-us-text">
              <h4 className="about-us-index">(01)</h4>
              <h1 className="about-us-title">About Us</h1>
              <p className="about-us-description">
                  We are a team of passionate developers dedicated to crafting
                  innovative digital solutions. Our expertise spans across web
                  development, mobile apps, and cutting-edge technologies, all
                  driven by a commitment to excellence and user-centric design.
              </p>
          </div>
          <div className="about-us-image">
              <img src={AboutImage} alt="About Us" />
          </div>
      </div>
  </section>
    );
});

export default About;

