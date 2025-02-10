import React from "react";
import { forwardRef } from "react";
import "../styles/Mentors.css";

const Judges = forwardRef((props, ref) => {
  const chief_guests = [
    { name: "Dr. A. Einstein", expertise: "Quantum Computing" },
    { name: "Ms. G. Hopper", expertise: "Software Engineering" },
    { name: "Mr. A. Turing", expertise: "AI & Cryptography" },
    { name: "Ms. G. Hopper", expertise: "Software Engineering" },
  ];

  const mentors = [
    { name: "Dr. A. Einstein", expertise: "Quantum Computing" },
    { name: "Ms. G. Hopper", expertise: "Software Engineering" },
    { name: "Mr. A. Turing", expertise: "AI & Cryptography" },
    { name: "Ms. G. Hopper", expertise: "Software Engineering" },
    { name: "Mr. A. Turing", expertise: "AI & Cryptography" },
    { name: "Ms. G. Hopper", expertise: "Software Engineering" },
  ];
  
  const judges = [
    { name: "Dr. A. Einstein", expertise: "Quantum Computing" },
    { name: "Ms. G. Hopper", expertise: "Software Engineering" },
    { name: "Mr. A. Turing", expertise: "AI & Cryptography" },
    { name: "Ms. G. Hopper", expertise: "Software Engineering" },
    { name: "Mr. A. Turing", expertise: "AI & Cryptography" },
  ];
  return (
    <section ref={ref} className="mentors-div">
      <h1>Our Chief Guests</h1>
      <div className="judge-list">
        {chief_guests.map((chief_guests, index) => (
          <div key={index} className="judge-card">
            <h3>{chief_guests.name}</h3>
            <p>{chief_guests.expertise}</p>
          </div>
        ))}
      </div>

      <h1>Our Mentors</h1>
      <div className="judge-list">
        {mentors.map((mentors, index) => (
          <div key={index} className="judge-card">
            <h3>{mentors.name}</h3>
            <p>{mentors.expertise}</p>
          </div>
        ))}
      </div>
      
      <h1>Our Judges</h1>
      <div className="judge-list">
        {judges.map((judge, index) => (
          <div key={index} className="judge-card">
            <h3>{judge.name}</h3>
            <p>{judge.expertise}</p>
          </div>
        ))}
      </div>
    </section>
  );
});

export default Judges;
