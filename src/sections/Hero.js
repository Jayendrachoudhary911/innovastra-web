import React, { useEffect, useState } from "react";
import { forwardRef } from "react";
import "../styles/Hero.css";
import Hourscount from "../components/Hourscount";
import Dayscount from "../components/Dayscount";

const Hero = forwardRef((props, ref) =>{
  return (
    <div ref={ref} className="hero-container">
      <div className="hero"> 
      <h1 className="hero-title">Innovastra</h1>
      <h3 className="hero-para"><strong className="hero-para1">24hrs Hackathon</strong> • Unlease The <strong className="hero-para1">Power</strong> Of <strong className="hero-para1">Technology</strong></h3>

      <div className="tags-container">
        <a href="google.com" className="tag">Register Now</a>
      </div>
      
      <div className="timer">
      <div className="dayscountdet">
       <Dayscount className="count1" eventDate="2025-02-28T11:00:00" />
      </div>
      <div className="countdet">
        <Hourscount className="count" eventDate="2025-02-28T11:00:00" />
      </div>
      </div>

      </div>
    </div>
  );
});

export default Hero;
