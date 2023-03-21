import React from "react";
import hocFunction from "../withCounter";

function HoverCounter(props) {
  const { count, handleClick } = props;

  return (
    <>
      <p>{count} times</p>
      <p onMouseOver={handleClick}>on Hover</p>
    </>
  );
}

export default hocFunction(HoverCounter, 10);
