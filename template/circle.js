import React from "react";
import classnames from "classnames";
import "./circle.css";

const Circle = ({ className, ...rest }) => {
  return <div className={classnames("circle", className)} />;
};

export default Circle;
