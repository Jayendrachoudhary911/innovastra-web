import React, { useState } from 'react';
import { forwardRef } from "react";
import '../styles/Timeline.css';
import ArrowDown from "../assets/angle-small-down.svg";

const Timeline = forwardRef((props, ref) => {
  const timelineData = [
    { time: '10:30 AM', date: '28-02-2024', title: 'Inaugration Ceremony' },
    { time: '11:10 AM', title: 'Problem Statement Reveals' },
    { time: '01:00 PM', title: 'Fun Activity' },
    { time: '02:15 PM', title: 'Mentor Session' },
    { time: '03:15 PM', title: 'Jury Session' },
    { time: '04:45 PM - 05:00 PM', title: 'Evening Snaks' },
    { time: '05:01 PM', title: 'Continue Hacking' },
    { time: '08:30 PM', title: 'Dinner Time' },
    { time: '10:00 PM - 11:00 PM', title: 'Musical Event' },
    { time: '12:30 PM', title: 'Mid-Night Snacks' },
    { title: 'Fun activity'},
    { time: '09:00 AM', date: '01-03-2024', title: 'Breakfast' },
    { time: '10:00 AM', title: 'Final Jury Session' },
    { time: '11:00 AM', title: 'Closing Ceremony' },
    { time: '10:00 AM', title: 'See You Next Time!' },
  ];

  const [showFullTimeline, setShowFullTimeline] = useState(false);

  const handleViewMore = () => {
    setShowFullTimeline(true);
  };

  return (
    <div ref={ref} className="timeline-container">
      <div>
        <h1>Timeline</h1>
      </div>
      <div className="timeline-line"></div>
      {timelineData.slice(0, showFullTimeline ? timelineData.length : 3).map((item, index) => (
        <div className={`timeline-item ${index % 2 === 0 ? 'left' : 'right'}`} key={index}>  
          <div className="timeline-time">{item.time}</div>
          <div className="timeline-content">
            <h2>{item.date}</h2>
            <h3>{item.title}</h3>
            <p>{item.description}</p>
          </div>
        </div>
      ))}

      {!showFullTimeline && (
        <button className="view-more-btn" onClick={handleViewMore}>View More <img className="arrow_img" src={ArrowDown}></img></button>
      )}
    </div>
  );
});

export default Timeline;