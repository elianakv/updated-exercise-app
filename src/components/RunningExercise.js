import React, { useState } from "react";

const RunningExercise = () => {
  const [laps, setLaps] = useState([]);

  const recordLap = () => {
    const currentTime = new Date().toLocaleTimeString();
    setLaps([...laps, currentTime]);
  };

  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <h2>Running Exercise</h2>
      <button onClick={recordLap} style={{ padding: "10px 20px", fontSize: "16px" }}>
        Record Lap
      </button>
      <h3>Lap Times:</h3>
      <ul>
        {laps.map((lap, index) => (
          <li key={index}>Lap {index + 1}: {lap}</li>
        ))}
      </ul>
    </div>
  );
};

export default RunningExercise;
