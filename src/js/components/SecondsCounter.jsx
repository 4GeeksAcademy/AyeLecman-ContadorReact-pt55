
import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock } from "@fortawesome/free-solid-svg-icons";

const Counter = () => {

let num = 0;
    setInterval(() => {
      num++;
      const element = document.getElementById("counter");
      if (element) {
        element.textContent = String(num).padStart(6, "0");
      }
    }, 1000);



return (
    <div className="text-center bg-dark h-100 mt-5">
      <div className="container-fluid d-flex justify-content-center mt-5">
        <FontAwesomeIcon icon={faClock} className="text-light fs-1 me-3 mt-4" />
        <h1 id="counter" className="text-light display-3">000000</h1>
      </div>
    </div>
  );
};

export default Counter;