import React, { useState, useRef } from "react";
import "./App10.css";

export default function App10() {
  const [runs, setRuns] = useState(0);
  const [wickets, setWickets] = useState(0);
  const [message, setMessage] = useState("Let's Begin The Game");

  const runRef = useRef(null);
  const wicketRef = useRef(null);
  const msgRef = useRef(null);

  const handleRuns = (runsToAdd) => {
    if (wickets < 10) {
      setRuns((prevRuns) => prevRuns + runsToAdd);
      setMessage(`Well Done! You scored ${runsToAdd} runs. Total Runs: ${runs + runsToAdd}`);

      if (runRef.current) runRef.current.style.backgroundColor = "green";
      if (wicketRef.current) wicketRef.current.style.backgroundColor = "white";
      if (msgRef.current) msgRef.current.style.backgroundColor = "white";
    }
  };

  const handleWickets = () => {
    if (wickets < 9) {
      setWickets((prevWickets) => prevWickets + 1);
      setMessage(`Better Luck Next Time! Total Wickets: ${wickets + 1}`);

      if (runRef.current) runRef.current.style.backgroundColor = "white";
      if (wicketRef.current) wicketRef.current.style.backgroundColor = "red";
      if (msgRef.current) msgRef.current.style.backgroundColor = "white";
    } else if (wickets === 9) {
      setWickets(10);
      setMessage("Game Over! All 10 wickets are down.");

      if (msgRef.current) msgRef.current.style.backgroundColor = "pink";
      if (runRef.current) runRef.current.style.backgroundColor = "white";
      if (wicketRef.current) wicketRef.current.style.backgroundColor = "white";
    }
  };

  return (
    <div>
      <div className="App-App10-Container">
        <h1>This is App10</h1>
      </div>
      <hr />

      <div className="App-App10-Row">
        <div className="App-App10-Box" ref={runRef}>
          <button className="app10-button" onClick={() => handleRuns(1)}>1 Run</button>
          <button className="app10-button" onClick={() => handleRuns(2)}>2 Runs</button>
          <button className="app10-button" onClick={() => handleRuns(3)}>3 Runs</button>
          <button className="app10-button" onClick={() => handleRuns(4)}>4 Runs</button>
          <button className="app10-button" onClick={() => handleRuns(6)}>6 Runs</button>
          <div>Runs: {runs}</div>
        </div>
        <div className="App-App10-Box" ref={wicketRef}>
          <button className="app10-button" onClick={handleWickets}>Wicket</button>
          <div>Wickets: {wickets}</div>
        </div>
      </div>
      <hr />

      <div className="App-App10-Row">
        <div className="App-App10-Box" ref={msgRef}>{message}</div>
      </div>
      <hr />
    </div>
  );
}
