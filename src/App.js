// src/App.js
import React, { useRef } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; // Import Router components
import "./styles/global.css";
import Navbar from "./components/Navbar";
import Hero from "./sections/Hero";
import About from "./sections/About";
import ProblemStatements from "./sections/ProblemStatements";
import Timeline from "./sections/Timeline";
import Prizes from "./sections/Prizes";
import Sponsors from "./sections/Sponsors";
import Judges from "./sections/Judges";
import LiveUpdates from "./sections/LiveUpdates";
import FAQs from "./sections/FAQs";
import Contact from "./sections/Contact";
import Footer from "./components/Footer";
import OurTeam from "./Pages/Ourteam"; // Importing the "OurTeam" page

const App = () => {
  // 🔥 Define refs before using them
  const heroRef = useRef(null);
  const aboutRef = useRef(null);
  const contactRef = useRef(null);
  const faqsRef = useRef(null);
  const judgesRef = useRef(null);
  const liveRef = useRef(null);
  const prizeRef = useRef(null);
  const problemRef = useRef(null);
  const sponsorsRef = useRef(null);
  const timelineRef = useRef(null);
  const trackRef = useRef(null);

  return (
    <Router> {/* Wrapping the application with the Router */}
      <div className="app">
        <Navbar 
          heroRef={heroRef}
          aboutRef={aboutRef}
          contactRef={contactRef}
          faqsRef={faqsRef}
          judgesRef={judgesRef}
          problemRef={problemRef}
          sponsorsRef={sponsorsRef}
          timelineRef={timelineRef}
        />

        <Routes>
          {/* Define the default home route */}
          <Route
            path="/"
            element={
              <>
                <Hero />
                <About ref={aboutRef} />
                <ProblemStatements ref={problemRef} />
                <Timeline ref={timelineRef} />
                <Sponsors ref={sponsorsRef} />
                <Judges ref={judgesRef} />
                <Prizes ref={prizeRef} />
                <Footer ref={contactRef} />
              </>
            }
          />
          <Route 
            path="/ourteam" 
            element={
              <>
              <OurTeam />
              <Footer />
              </>
              } />
          
        </Routes>
      </div>
    </Router>
  );
};

export default App;
