
import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock } from "@fortawesome/free-solid-svg-icons";

const DigitCounter = ({ time }) => {
  return (
    <h1 id="counter" className="text-light display-3 fw-bold">
      {time}
    </h1>
  )
}

const SecondsCounter = ({ seconds }) => {
  return (
    <div className="text-center bg-dark h-100 mt-5 p-4">
      <div className="container-fluid d-flex justify-content-center align-items-center gap-5">
        <FontAwesomeIcon icon={faClock} className="text-light fs-1 me-3" />
        <DigitCounter time={Math.floor((seconds % 1000000) / 100000)} />
        <DigitCounter time={Math.floor((seconds % 100000) / 10000)} />
        <DigitCounter time={Math.floor((seconds % 10000) / 1000)} />
        <DigitCounter time={Math.floor((seconds % 1000) / 100)} />
        <DigitCounter time={Math.floor((seconds % 100) / 10)} />
        <DigitCounter time={Math.floor((seconds % 10) / 1)} />
      </div>
    </div>
  )



};

export default SecondsCounter;