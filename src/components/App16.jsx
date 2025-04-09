import React from "react";
import { useRef } from "react";
export default function App16() {
  let numRef = useRef();
  const handleSubmit = () => {
    let num = numRef.current.value
    if (num>18) {
        alert("Welcome")
    }
    else {
        alert("Not allowed")
    }
  }
  return (
    <div>
      <h3>This is App16</h3>
      <p>
        <input type="number" ref={numRef}></input>
      </p>
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
}