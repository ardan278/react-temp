import React from "react";
import { memo } from "react";
function Child(props) {
  console.log("Child Component Loaded...");
  return (
    <div>{props.num}</div>
  );
}
export default memo(Child)