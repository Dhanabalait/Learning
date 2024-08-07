import React, { useEffect, useState } from "react";
import "./DigitalClock.css";
import { Link } from "react-router-dom";
export const DigitalClock = () => {
  const [currentTime, setCurrentTime] = useState(new Date());
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    return ()=>clearInterval(timer);
  }, []);

  const formatWithTimeWithLeadZero = (num) => {
    return num < 10 ? `0${num}` : num;
  };
  const formatHour = (hour) => {
    return hour === 0 ? 12 : hour > 12 ? hour - 12 : hour;
  };
  const formatDate = (date) => {
    const options = {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric"
    };
    return date.toLocaleDateString(undefined, options);
  };
  return (
    <div className="clock-container">
      <div className="digital-clock">
        <h3>Digital Clock</h3>
        <p className="time">
          {formatWithTimeWithLeadZero(formatHour(currentTime.getHours()))}:
          {formatWithTimeWithLeadZero(currentTime.getMinutes())}:
          {formatWithTimeWithLeadZero(currentTime.getSeconds())}
          {currentTime.getHours() < 12 ? " AM" : " PM"}
        </p>
        <p className="date mb-0">{formatDate(currentTime)}</p>
      </div>
      <Link to="/" className="text-light mt-3">Home</Link>
    </div>
  );
};

export default DigitalClock;
