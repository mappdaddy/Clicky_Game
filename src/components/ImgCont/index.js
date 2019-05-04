import React from "react";
import "./style.css";

function Box(props) {
  return <div className="wrapper center">{props.children}</div>;
}

export default Box;
