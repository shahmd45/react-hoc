import React from "react";
import hocFunction from "../withCounter";

function ClickCounter(props) {
  const { count, handleClick } = props;

  return (
    <>
      <p>{count} times</p>
      <button onClick={handleClick}>click</button>
    </>
  );
}

export default hocFunction(ClickCounter, 5);
