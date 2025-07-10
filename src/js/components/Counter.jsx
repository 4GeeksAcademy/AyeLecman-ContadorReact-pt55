
import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock } from "@fortawesome/free-solid-svg-icons";

const Counter = () => {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setSeconds(prev => prev + 1), 1000);
    return () => clearInterval(id);
  }, []);

  const paddedSeconds = String(seconds).padStart(6, "0");

  return (
    <div className="text-center bg-dark h-100 mt-5">
      <div className="container-fluid d-flex justify-content-center mt-5">
        <FontAwesomeIcon icon={faClock} className="text-light fs-1 me-3 mt-4" />
        <h1 className="text-light display-3">{paddedSeconds}</h1>
      </div>
    </div>
  );
};

export default Counter;