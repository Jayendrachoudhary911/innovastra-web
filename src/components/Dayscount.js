import React, { useState, useEffect } from "react";

const Countdown = ({ eventDate }) => {
  const calculateTimeLeft = () => {
    const difference = +new Date(eventDate) - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
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
    <div className="dayscountdet">
      {Object.keys(timeLeft).map((interval) => (
        <div key={interval} className="count1">
          <span>{timeLeft[interval]}</span><br></br>
          <small>{interval} to go</small>
        </div>
      ))}
    </div>
  );
};

export default Countdown;
