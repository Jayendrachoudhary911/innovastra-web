import React, { useState, useEffect } from "react";
import "../styles/BottomNav.css";

const BottomNav = ({ eventDate }) => {
  const calculateTimeLeft1 = () => {
    const difference = +new Date(eventDate) - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft1());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft1());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="countdown1">
      {Object.keys(timeLeft).map((interval) => (
        <div key={interval} className="countdown-item1">
          <span>{timeLeft[interval]}</span>
          <small>{interval}</small>
        </div>
      ))}
    </div>
  );
};

export default BottomNav;
