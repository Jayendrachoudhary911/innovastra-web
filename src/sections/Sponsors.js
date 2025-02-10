import React, { useEffect, useState } from "react";
import { forwardRef } from "react";
import "../styles/Sponsors.css";
import SponsorImage from "../assets/image.png";

const Sponsors = forwardRef((props, ref) => {

  return (
    <section ref={ref} className="sponsors">
      <h1>Our Sponsors</h1>
      <div className="marquee-wrapper">
        <div className="marquee">
        <div className="marquee-content">
                    <marquee>
                    <span class="stat"><img className="sponsor_card" src={SponsorImage}></img></span>
                    <span class="stat"><img className="sponsor_card" src={SponsorImage}></img></span>
                    <span class="stat"><img className="sponsor_card" src={SponsorImage}></img></span>
                    <span class="stat"><img className="sponsor_card" src={SponsorImage}></img></span>
        
                    <span class="stat"><img className="sponsor_card" src={SponsorImage}></img></span>
                    <span class="stat"><img className="sponsor_card" src={SponsorImage}></img></span>
                    <span class="stat"><img className="sponsor_card" src={SponsorImage}></img></span>
                    <span class="stat"><img className="sponsor_card" src={SponsorImage}></img></span>
                    </marquee>
        </div>
        </div>
      </div>
            <div class="fade fade-left"></div>
            <div class="fade fade-right"></div>
    </section>
  );
});

export default Sponsors;
