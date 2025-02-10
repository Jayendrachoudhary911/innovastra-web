import React, { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import LogoImage from "../assets/logo.png";

const Navbar = ({
  heroRef,
  aboutRef,
  contactRef,
  faqsRef,
  judgesRef,
  prizeRef,
  problemRef,
  sponsorsRef,
  timelineRef,
  trackRef,
}) => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (ref) => {
    setMenuOpen(false); // Close menu on navigation
    ref.current.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <header className={`navbar ${scrolled ? "scrolled" : ""}`}>
      <nav>
        <a href="/"><img className="logo" src={LogoImage}></img></a>
        <div className={`nav-links ${menuOpen ? "open" : ""}`}>
          <div className="nav-link-div">
            <li><a className="nav_buttons" href="/">Home</a></li>
            <li><a className="nav_buttons" onClick={() => scrollToSection(aboutRef)}>About</a></li>
            <li><a className="nav_buttons" onClick={() => scrollToSection(timelineRef)}>Timeline</a></li>
            <li><a className="nav_buttons" onClick={() => scrollToSection(sponsorsRef)}>Sponsors</a></li>
            <li><a className="nav_buttons" onClick={() => scrollToSection(judgesRef)}>Mentors</a></li>
            <li><a className="nav_buttons" onClick={() => scrollToSection(contactRef)}>Contact</a></li>
            <li><a className="nav_buttons" href="/Ourteam">Our Team</a></li>
          </div>
          <div className="reg-div">
            <a className="reg-button" href="google.com">Register</a>
          </div>
        </div>
        <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <FaTimes /> : <FaBars />}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
