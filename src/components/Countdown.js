import React, { useState, useEffect } from "react";

const Countdown = ({ eventDate }) => {
  const calculateTimeLeft = () => {
    const difference = +new Date(eventDate) - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        hours: Math.floor((difference / (1000 * 60 * 60)) % 1000),
        min: Math.floor((difference / 1000 / 60) % 60),
        sec: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="countdown">
      {Object.keys(timeLeft).map((interval) => (
        <div key={interval} className="countdown-item">
          <span>{timeLeft[interval]}</span><br></br>
          <small>{interval}</small>
        </div>
      ))}
    </div>
  );
};

export default Countdown;
