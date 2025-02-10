import React from "react";
import { forwardRef } from "react";
import "../styles/Mentors.css";

const Judges = forwardRef((props, ref) => {
  const team = [
    { name: "Dr. A. Einstein", expertise: "Quantum Computing" },
    { name: "Ms. G. Hopper", expertise: "Software Engineering" },
    { name: "Mr. A. Turing", expertise: "AI & Cryptography" },
    { name: "Ms. G. Hopper", expertise: "Software Engineering" },
    { name: "Mr. A. Turing", expertise: "AI & Cryptography" },
    { name: "Dr. A. Einstein", expertise: "Quantum Computing" },
    { name: "Ms. G. Hopper", expertise: "Software Engineering" },
    { name: "Mr. A. Turing", expertise: "AI & Cryptography" },
    { name: "Ms. G. Hopper", expertise: "Software Engineering" },
    { name: "Mr. A. Turing", expertise: "AI & Cryptography" },
    { name: "Ms. G. Hopper", expertise: "Software Engineering" },
    { name: "Mr. A. Turing", expertise: "AI & Cryptography" },
  ];
  return (
    <section ref={ref} className="team-div">
      <h1>Contact Our Team</h1>
      <div className="judge-list">
        {team.map((team, index) => (
          <div key={index} className="judge-card">
            <h3>{team.name}</h3>
            <p>{team.expertise}</p>
          </div>
        ))}
      </div>
    </section>
  );
});

export default Judges;
