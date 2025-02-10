import React, { useState } from "react";
import "../styles/PrizeTimeline.css";
import { forwardRef } from "react";

const Prizes = forwardRef((props, ref) => {
  const prizes = [
    { title: "1st Prize", description: "🏆 Coming Soon!" },
    { title: "2nd Prize", description: "🥈 Announcement in progress!" },
    { title: "3rd Prize", description: "🥉 Stay tuned for exciting rewards!" },
    { title: "Special Prize", description: "🎉 Revealing shortly!" },
  ];

  return (
    <div className="prize-section">
    <h1 className="prize-heading">🎁 Prizes Announcement</h1>
    <div className="prize-container">
      {prizes.map((prize) => (
        <div className="prize-card">
          <h3>{prize.title}</h3>
          <p>{prize.description}</p>
        </div>
      ))}
    </div>
  </div>
  
  );
});

export default Prizes;
