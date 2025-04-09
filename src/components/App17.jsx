import React from "react";
import Child from "./Child";
import { useState } from "react";
export default function App17() {
  const [count, setCount] = useState(0);
  const num = new Date();
  return (
    <div>
      <h3>This is App17</h3>
      <Child num={num.getMinutes()} />
      <p>
        <button onClick={() => setCount(count + 1)}>Count</button>
      </p>
      <p>{count}</p>
    </div>
  );
}